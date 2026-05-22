import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { EUI_SIDESHEET_DATA, EuiSidesheetService } from '@elemental-ui/core';
import { EntityData } from '@imx-modules/imx-qbm-dbts';
import * as L from 'leaflet';
import { GeoLocalityPersonsSidesheetComponent } from '../geo-locality-persons-sidesheet/geo-locality-persons-sidesheet.component';
import { ensureLeafletStyles } from './leaflet-styles';

@Component({
  selector: 'imx-geo-map-sidesheet',
  templateUrl: './geo-map-sidesheet.component.html',
  styleUrls: ['./geo-map-sidesheet.component.scss'],
  standalone: false,
  host: { 'data-component-id': 'geo-map-sidesheet' },
})
export class GeoMapSidesheetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  private map: L.Map | null = null;

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public data: { localities: EntityData[] },
    private readonly sidesheet: EuiSidesheetService,
  ) { }

  public ngAfterViewInit(): void {
    // Ensure Leaflet's required CSS is in the DOM (works around production CSS bundling issues)
    ensureLeafletStyles();
    // Delay to allow EUI sidesheet open animation to settle before initializing Leaflet
    setTimeout(() => {
      this.initMap();
      // Force Leaflet to recalculate tile positions after container is fully rendered
      setTimeout(() => { this.map?.invalidateSize(); }, 200);
    }, 300);
  }

  public ngOnDestroy(): void {
    this.map?.remove();
    this.map = null;
  }

  private initMap(): void {
    this.map = L.map(this.mapContainer.nativeElement).setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);

    for (const locality of this.data.localities) {
      const latRaw = locality.Columns?.['CustomProperty07']?.Value ?? locality.Columns?.['CustomProperty07']?.DisplayValue ?? '';
      const lngRaw = locality.Columns?.['CustomProperty08']?.Value ?? locality.Columns?.['CustomProperty08']?.DisplayValue ?? '';
      const lat = parseFloat(latRaw);
      const lng = parseFloat(lngRaw);
      if (isNaN(lat) || isNaN(lng)) {
        continue; // skip localities without coordinates
      }

      const colVal = (col: string) =>
        locality.Columns?.[col]?.Value ?? locality.Columns?.[col]?.DisplayValue ?? '';
      const display = locality.Display ?? colVal('Display');
      const street = colVal('PostalAddress');
      const zip = colVal('ZIPCode');
      const cityZip = zip ? `${display}, ${zip}` : '';
      const addrLines = [street, cityZip].filter(Boolean)
        .map(l => `<div class="geo-tooltip-addr">${l}</div>`).join('');
      const tooltip = `<div class="geo-tooltip-name">${display}</div>${addrLines}`;

      const pinIcon = L.divIcon({
        className: '',
        html: `<div class="geo-pin"></div>`,
        iconSize: [24, 32],
        iconAnchor: [12, 32],
        tooltipAnchor: [0, -34],
      });

      L.marker([lat, lng] as L.LatLngTuple, { icon: pinIcon })
        .bindTooltip(tooltip, { permanent: false, direction: 'top', className: 'geo-map-tooltip', opacity: 1 })
        .on('click', () => { this.onPinClick(locality); })
        .addTo(this.map!);
    }
  }

  private onPinClick(locality: EntityData): void {
    const localityName = locality.Display ?? locality.Columns?.['Display']?.Value ?? locality.Columns?.['Display']?.DisplayValue ?? 'Locality';
    this.sidesheet.open(GeoLocalityPersonsSidesheetComponent, {
      title: localityName,
      padding: '0px',
      width: '1250px',
      testId: 'geo-locality-persons-sidesheet',
      data: {
        localityUid: locality.Keys?.[0] ?? '',
        localityName,
      },
    });
  }
}
