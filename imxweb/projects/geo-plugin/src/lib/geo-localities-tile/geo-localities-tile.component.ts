import { Component, OnInit } from '@angular/core';
import { EuiSidesheetService } from '@elemental-ui/core';
import { EntityData } from '@imx-modules/imx-qbm-dbts';
import { imx_SessionService } from 'qbm';
import { QerApiService } from 'qer';
import { GeoMapSidesheetComponent } from '../geo-map-sidesheet/geo-map-sidesheet.component';

@Component({
  selector: 'imx-geo-localities-tile',
  templateUrl: './geo-localities-tile.component.html',
  standalone: false,
})
export class GeoLocalitiesTileComponent implements OnInit {
  public isAuthorized = false;
  public loading = true;
  public localities: EntityData[] = [];

  constructor(
    private readonly session: imx_SessionService,
    private readonly qerApiService: QerApiService,
    private readonly sidesheet: EuiSidesheetService,
  ) { }

  public async ngOnInit(): Promise<void> {
    try {
      const uidPerson = this.session.SessionState?.UserUid;
      if (uidPerson) {
        this.isAuthorized = await this.hasGeoRole(uidPerson);
      }
      if (this.isAuthorized) {
        const result = await this.qerApiService.client.portal_admin_role_locality_get({
          withProperties: '-CustomProperty07,CustomProperty08,PostalAddress,ZIPCode,UID_DialogCountry'
        });
        this.localities = result.Entities ?? [];
      }
    } catch (error) {
      console.error('[GeoLocalitiesTile] Error during initialization:', error);
    } finally {
      this.loading = false;
    }
  }


  public onTileClick(): void {
    this.sidesheet.open(GeoMapSidesheetComponent, {
      title: 'Localities',
      padding: '0px',
      width: '1400px',
      testId: 'geo-map-sidesheet',
      data: { localities: this.localities },
    });
  }

  private async hasGeoRole(uidPerson: string): Promise<boolean> {
    const pageSize = 100;
    let startIndex = 0;

    do {
      const result = await this.qerApiService.client.portal_person_rolememberships_AERole_get(uidPerson, {
        withProperties: '-RoleFullPath',
        PageSize: pageSize,
        StartIndex: startIndex,
      });

      const entities = result.Entities ?? [];

      if (entities.some((e) => e.Columns?.['RoleFullPath']?.Value === 'Custom\\Geo')) {
        return true;
      }

      startIndex += entities.length;
      if (entities.length === 0 || startIndex >= (result.TotalCount ?? 0)) {
        break;
      }
    } while (true);

    return false;
  }
}
