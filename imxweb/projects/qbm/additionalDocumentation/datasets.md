# Data Sets

In this section you can find components that are designed to display data sets. These cover both flat lists and hierarchical data structures.

## 1. Data Source Toolbar
The [`DataSourceToolbarComponent`](../../components/DataSourceToolbarComponent.html) is used to handle the interaction between the data source and the actual view.
It is defined in the [`DataSourceToolbarModule`](../../modules/DataSourceToolbarModule.html), together with the other components that are used inside the toolbar.

The following features are available:
- Filtering
- Searching
- Grouping
- Sorting
- Export and configuration of the view

The definition of values and functions for these features should be defined using the [`DataSourceToolbarSettings`](../../interfaces/DataSourceToolbarSettings.html) interface.


## 2. Paginator
The [`DataSourcePaginatorComponent`](../../components/DataSourcePaginatorComponent.html) is used to handle pagination of the data. This is done by updating the navigation state of its linked [`DataSourceToolbarComponent`](../../components/DataSourceToolbarComponent.html). The usage of a paginator is optional.

## 3. View Components

### 3.1. Data Table
The [`DataTableComponent`](../../components/DataTableComponent.html) is the most commonly used view component for our portals. 

It renders an Angular Material table with columns that can be defined by using other components. These are defined in the [`DataTableModule`](../../modules/DataTableModule.html), as well as the data table itself. 

### 3.2. Data Tiles

The [`DataTilesComponent`](../../components/DataTilesComponent.html) can be used to render a tile view which displays a [`DataTileComponent`](../../components/DataTileComponent.html) for each element in the data source. Both components are part of the [`DataTileModule`](../../modules/DataTilesModule.html), but only the [`DataTilesComponent`](../../components/DataTilesComponent.html) is exported.

### 3.3. Data Tree
The [`DataTreeComponent`](../../components/DataTreeComponent.html) can be used to display hierarchical data. Other than the table, it uses a special data source, that can be defined by extending the abstract [`TreeDatabase`](../../classes/TreeDatabase.html) class. The data tree is part of the [`DataTreeModule`](../../modules/DataTreeModule.html), together with other components that can be used with the data tree like the [`DataTreeSearchResultsComponent`](../../components/DataTreeSearchResultsComponent.html). This component shows a flat view of an entry subset, because some parameter like a filter or a search string will flatten the result.

If you prefer to use a data tree with a data source toolbar functionality, there is a [`DataTreeWrapperComponent`](../../components/DataTreeWrapperComponent.html) defined in the [`DataTreeWrapperModule`](../../modules/DataTreeWrapperModule.html). This component combines a data tree with a data source toolbar so that the user can search and filter the tree.

### 3.5. Other

There are some other components that can be used to display a list of elements. However, these components are not compatible with the data source toolbar.

**Select Component**

The [`SelectComponent`](../../components/SelectComponent.html) can be used to show a list of entries using an auto complete control. It is defined in the [`SelectModule`](../../modules/SelectModule.html).

**Ordered List Component**

The [`OrderedListComponent`](../../components/OrderedListComponent.html) can be used to display a simple list of `<Name, Value>` entries. It is defined in the [`OrderedListModule`](../../modules/OrderedListModule.html).


## 4. Other Components

Here are some components that are connected to listings, but do not really fit into the other categories.

### 4.1 Selected Elements
Because all view component can contain a multi-select feature, it is possible to select some items. If you like to check, which elements are selected across pages, you can use a [`SelectedElementsComponent`](../../) that shows, how many elements are selected. This component is clickable, which opens a side sheet with all elements inside a table.

### 4.2 Foreign Key Picker
There are two foreign key picker dialogs available.

**4.2.1 Normal Picker**

The classic data picker is defined inside the [`FkAdvancedPickerComponent`](../../components/FkAdvancedPickerComponent.html). It contains a [`FkSelectorComponent`](../../components/FkSelectorComponent.html) that could be used on other components as well.

**4.2.2 Hierarchical Picker**

The hierarchical picker is defined in the [`FkHierarchicalDialogComponent`](../../components/FkHierarchicalDialogComponent.html) and displays the data inside a searchable tree.