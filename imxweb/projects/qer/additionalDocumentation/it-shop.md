# IT Shop

## 1. New Request
The starting point of the request life cycle is defined by the [`NewRequestComponent`](../components/NewRequestComponent.html). This component consists of several tab page:.

1. [`NewRequestProductComponent`](../components/NewRequestProductComponent.html): The main page shows the service items organized by service category.
2. [`NewRequestPeerGroupComponent`](../components/NewRequestPeerGroupComponent.html): In this tab, the user can select recommended service items and organizational structures.
3. [`NewRequestReferenceUserComponent`](../components/NewRequestReferenceUserComponent.html): The user can select service items and organizational structures by reference user here.
4. [`NewRequestProductBundleComponent`](../components/NewRequestProductBundleComponent.html): The user can create requests based on a product bundle.

## 2. Parameter Editor

Service items can define request properties. These are handled using the [`ParameterDataService`](../injectables/ParameterDataService.html), which converts the data given by the server to editable parameter columns, that can be edited using the [`CartItemEditComponent`](../components/CartItemEditComponent.html).

## 3. Shopping Cart
The entry point into the shopping cart is defined by the [`ShoppingCartComponent`](../components/ShoppingCartComponent.html). It contains a table that lists the cart items in the cart. The items can be edited, deleted and checked for validity. All sub components and services are part of the [`ShoppingCartModule`](../modules/ShoppingCartModule.html).
Items in the cart can be moved to the Saved-for-later list and vice versa, this is handled by the [`ShoppingCartForLaterComponent`](../components/ShoppingCartForLaterComponent.html).

## 4. Pending Requests

The next step in the workflow is the approval of items. The entry point for this is the [`ApprovalsComponent`](../components/ApprovalsComponent.html), which lists all the requests currently approvable by the user.

This also contains a sub component [`InquiriesComponent`](../components/InquiriesComponent.html) which lists inquiries for the user.

All the sub components are part of the [`ApprovalsModule`](../modules/ApprovalsModule.html) which includes the components on the corresponding side sheet.

## 5. Request History

All requests visible for the current user are displayed by the [`RequestHistoryComponent`](../components/RequestHistoryComponent.html). The actions that the user can perform on these requests are implemented in the [`RequestActionService`](../injectables/RequestActionService.html).

## 6. Archived Requests

Archived requests are requests that have been offloaded to the history database. These can be viewed using the [`ArchivedRequestsComponent`](../components/ArchivedRequestsComponent.html).

## 7. Editors for Items

### 7.1. Product Bundles

Product bundles can be edited using the [`ItshopPatternComponent`](../components/ItshopPatternComponent.html), defined in the [`ItshopPatternModule`](../modules/ItshopPatternModule.html).

### 7.2. Service Categories

The [`ServiceCategoriesModule`](../modules/ServiceCategoriesModule.html) contains the [`ServiceCategoriesComponent`](../components/ServiceCategoriesComponent.html). This component uses a [`DataTreeWrapperComponent`](../../qbm/components/DataTreeWrapperComponent.html) to show the service category structure of the IT shop.

### 7.3. Service Items

The service item functionality is part of the [`ServiceItemsEditModule`](../modules/ServiceItemsEditModule.html). The entry point for this component is the ['ServiceItemsEditComponent'](../components/ServiceItemsEditComponent.html) which lists all available service items. Clicking on an item opens a [`ServiceItemsEditSidesheetComponent`](../components/ServiceItemsEditSidesheetComponent.html).

### 7.4. Workflow Editor

The workflow editor is part of the [`ApprovalWorkFlowModule`](../modules/ApprovalWorkFlowModule.html). The entry point is the [`ApprovalWorkflowHomeComponent`](../components/ApprovalWorkflowHomeComponent.html).

The editing functionality is implemented in the [`ApprovalWorkflowEditComponent`](../components/ApprovalWorkflowEditComponent.html),