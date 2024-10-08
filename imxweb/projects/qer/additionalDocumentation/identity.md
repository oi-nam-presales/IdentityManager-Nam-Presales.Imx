# Identity Management

This section lists components that support identity management use-cases.

## 1. Data Explorer 'Identities' section

The identities section of the data explorer is defined in the [`DataExplorerIdentitiesComponent`](../components/DataExplorerIdentitiesComponent.html) and can be used in two different contexts:
1. as an identity administrator
2. as a manager

The manager view is filtered by identities, that are reporting to the user, while the admin view shows all identities in the system.

Clicking on an identity opens a side sheet that displays more information about the identity.

This library defines the following sub components that are part of this side sheet:
- a tab control with the following sub components:
  - [`ObjectHyperviewComponent`](../components/ObjectHyperviewComponent.html): displays a hyper view for the identity.
  - [`OrgChartComponent`](../components/OrgChartComponent.html): displays an organizational chart for the identity.
  - [`ObjectHistoryComponent`](../../qbm/components/ObjectHistoryComponent.html): displays the history of the identity object. This is defined in QBM.
- [`AssignmentsComponent`](../components/AssignmentsComponent.html): A component, that shows the memberships of the selected entity. The component looks quite similar to the data explorer control. The registration of membership tabs is quite similar, too.

- Additionally, it is possible to register other tabs using the [`ExtService`](../../qbm/injectables/ExtService.html), which is part of the QBM library.


## 2. Address Book
The [`AddressbookComponent`](../components/AddressbookComponent.html) lists all identities from the `Person` database table. It is a read-only view that opens a read-only sidesheet as well.

## 3. Profile
The [`ProfileComponent`](../components/ProfileComponent.html) provides access to the current user's main data. Additionally the user can configure e-mail subscriptions ([`MailSubscriptionsComponent`](../components/MailSubscriptionsComponent.html)), manage
security keys ([`SecurityKeysComponent`](../components/SecurityKeysComponent.html)) and edit the Q&A profile ([`PasswordQueryComponent`](../components/PasswordQueryComponent.html)).

To extend the profile with more tab pages, register them with the [`ExtService`](../../qbm/injectables/ExtService.html), which is part of the QBM library.

## 4. User Model
The user model is defined in the [`UserModelService`](../injectables/UserModelService.html). It contains functions to fetch the current session's configuration, including information on available program features, pending items and direct reports.
