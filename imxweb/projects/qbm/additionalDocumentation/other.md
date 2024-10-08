# Other Reusable Components and Services

In this section you can find components that are intended to be reused in other libraries and applications, and not covered by the other sections.

## 1. Bulk Editor

The [`BulkPropertyEditorComponent`](../../components/BulkPropertyEditorComponent.html) is used to edit the same list properties for multiple objects. Each [`BulkItemComponent`](../../components/BulkItemComponent.html) has its own list of [`CdrEditorComponents`](../../components/CdrEditorComponent.html).

## 2. Busy Indicator
The [BusyIndicatorComponent](../../components/BusyIndicatorComponent.html) can be used to display a loading spinner and a predefined text. A good solution is to use it together with a [`BusyService`](../../injectables/BusyService.html) that indicates if something has started / ended loading.

## 3. Charts
In our web, charts are rendered using the `ElementalUiChartComponent`. There are some configurations defined by related classes.
- [`LineChartOptions`](../../classes/LineChartOptions.html) that defines a line chart definition.
- [`SeriesInformation`](../../classes/SeriesInformation.html), that defines one series in a line chart.
- [`XAxisInformation`](../../classes/XAxisInformation.html) and [`YAxisInformation`](classes/YAxisInformation.html) that defines the information for the line axis.

There is also a [`ChartTileComponent`](../../components/ChartTileComponent.html) that can be used to render a chart as part of a tile.

## 4. Custom Theme
The [`CustomThemeService`](../../injectables/CustomThemeService.html) can be used to load all defined themes. It is also used to add the themes to the `<head>` part of the page.

## 5. Dynamic Tabs
Some tabs in side sheets have to be added dynamically because they are part of a dynamic module. The item is defined by a new [`TabItem`](../../interfaces/TabItem.html) and can be added to a tab control using a [`DynamicTabDataProviderDirective`](../../directives/DynamicTabDataProviderDirective.html).

## 6. Extensions
Sometimes it is necessary to add a component, that is not defined as part of a static module, but is part of a dynamic one. To display this component, a [`ExtComponent`](../../components/ExtComponent.html) can be used. It is part of the [`ExtModule`](../../modules/ExtModule.html), together with the needed service and a directive.

## 7. File Selector
If the user should be able to upload files, there is a [FileSelectorService](../../injectables/FileSelectorService.html) for that.

## 8. Hyper View
A hyper view is a linked graph that visualizes the relationships of an object to other objects. The [`HyperviewComponent`](../../components/HyperviewComponent.html) and its parts are all part of the [`HyperviewModule`](../../modules/HyperViewModule.html).

## 9. Masthead
In the masthead, information like the company logo, a help icon or the user menu can be displayed. It is defined inside the [`MastHeadComponent`](../../components/MastHeadComponent.html), that is part of the ['MastHeadModule'](../../modules/MastHeadModule.html).

The [`MastHeadComponent`](../../components/MastHeadComponent.html) is also responsible for the menu line underneath it. The menu is rendered using an `ElementalUiTopNavigationComponent`. The menu items can be defined by using the [`MenuService`](../../injectables/MenuService.html).

## 10. Object History
The [`ObjectHistoryComponent`](../../components/ObjectHistoryComponent.html) can be used to show the course of an object. It can be display as a table or by using a [`TimelineComponent`](../../components/TimelineComponent.html).

## 11. Side Navigation
The [`SideNavigationViewComponent`](../../components/SideNavigationViewComponent.html) is used to display a vertical menu that can be part of a page or an other component. It is collapsible for smaller screens.

Another representation of a side navigation is the [`SidenavTreeComponent`](../../components/SidenavTreeComponent.html) which uses a tree view inside a collapsible panel.

 The [`SideNavigationViewComponent`](../../components/SideNavigationViewComponent.html) is part of the [`SideNavigationViewModule`](../../modules/SideNavigationViewModule.html) while the [`SidenavTreeComponent`](../../components/SidenavTreeComponent.html) is part of the [`SidenavTreeModule`](../../modules/SidenavTreeModule.html).

## 12. SQL Wizard
The [`SqlWizardComponent`](../../components/SqlWizardComponent.html) can be used to filter the result of a larger amount of entries. It generates a filter expression that can be used as part of a normal API call. The SQL wizard is defined in the [`SqlWizardModule`](../../modules/SqlWizardModule.html) together with the sub components, that are used to build the filter.

To use a [`SqlWizardComponent`](../../components/SqlWizardComponent.html) as part of the table filter in a custom project, the abstract class [`SqlWizardApiService`](../../classes/SqlWizardApiService.html) has to be extended and added as a provider.