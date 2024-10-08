# Other components and services

This page describes the most important components in the `qer` library.

## 1. Data Explorer \ My Responsibilities

The [`DataExplorerViewComponent`](../components/DataExplorerViewComponent.html) and the [`MyResponsibilitiesViewComponent`](../components/MyResponsibilitiesViewComponent.html) are used to display the main component for the  _Data administration > _Data Explorer_ and the _Responsibilities_ > _My Responsibilities_ pages. It shows a menu item for each type registered in the [`DataExplorerRegistryService`](../injectables/DataExplorerRegistryService.html) or the [`MyResponsibilitiesRegistryService`](../injectables/MyResponsibilitiesRegistryService.html) respectively.

## 2. Delegation

The [`DelegationComponent`](../components/DelegationComponent.html) implements the delegation functionality. The component uses a `MatStepper` to navigate through the steps.

## 3. Related Applications

The [`RelatedApplicationsComponent`](../components/RelatedApplicationsComponent.html) adds links to other sites to the navigation. These links are configured in the database table `RelatedApplication`.

## 4. Risk Index

The [`RiskConfigComponent`](../components/RiskConfigComponent.html) displays a table of all risk index functions. They can be edited by using the [`RiskConfigSidesheetComponent`](../components/RiskConfigSidesheetComponent.html).

## 5. Source Detective
The [`SourceDetectiveComponent`](../components/SourceDetectiveComponent.html) shows the assignment analysis of an object. It contains a tree with branches for every assignment.

## 6. Statistics
The [`StatisticsModule`](../modules/StatisticsModule.html) contains the components for the Statistics view. The entry point is the [`StatisticsHomePageComponent`](../components/StatisticsHomePageComponent.html). Statistics are organized into *areas* which are displayed in a navigation tree. The user can view the statistics for each area. Clicking on a statistic opens a [`ChartsSidesheetComponent`](../components/ChartsSidesheetComponent.html) or a [`HeatmapSidesheetComponent`](../components/HeatmapSidesheetComponent.html) for a heatmap statistic.

## 7. Terms of Use

The [`TermsOfUseListComponent`](../components/TermsOfUseListComponent.html) handles the user flow to accept the terms of use for a service item. It also includes step-up 2FA if configured.

## 8. User Process

The [`UserProcessComponent`](../components/UserProcessComponent.html) displays a list of all the processes associated with the current user.
