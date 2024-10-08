# Administration

The Administration Portal consists of the following main components.

- [`DashboardComponent`](../../components/DashboardComponent.html) defines the main page.
- [`StatusComponent`](../../components/StatusComponent.html) shows the list of available applications.
- [`ConfigComponent`](../../components/ConfigComponent.html) exposes the API configuration layer.
- [`PackagesComponent`](../../components/PackagesComponent.html) shows the list of available packages. 
- [`PluginsComponent`](../../components/PluginsComponent.html) shows the list of loaded API plugins.
- [`CacheComponent`](../../components/CacheComponent.html) shows the cache status.
- [`LogsComponent`](../../components/LogsComponent.html) provides access to the server logs.
- [`SwaggerComponent`](../../components/SwaggerComponent.html) wraps the API documentation component.

## Authentication

In this section you will find other component, that are used during authentication. 

The login itself is handled by the [`AuthenticationService`](../../injectables/AuthenticationService.html). The UI component is provided by the [`LoginComponent`](../../components/LoginComponent.html).

To check whether the user is currently logged in, there is a special [route guard](../../guards/AuthenticationGuardService.html) to redirect the user to the login component if a login is requred. An older way doing this is using the [`imx_SessionService`](../../injectables/imx_SessionService.html).