# Electric Imp impCentral API (v5) JavaScript library

This library is a JavaScript wrapper for the [Electric Imp impCentral API (v5)](https://preview-apidoc.electricimp.com). **TODO: change the link to the final one**

It covers the functionality needed for development processes. The library does not cover factory and production processes.

## Library Usage

Using the library you are doing:

- the library installation

- the library instantiation

- initializing the library by an access token

- calling impCentral API methods

- processing results

- processing errors

All these steps are described in the following sections.

### Installation

**TODO**

### Instantiation

To instantiate this library you need to call [ImpCentralApi class](./lib/ImpCentralApi.js) constructor.

By default the library works with the following impCentral API base endpoint: **TODO: add the final link**

You can optionally pass to the constructor an alternative impCentral API base endpoint. This can be used to connect to private impCloud installations.

After instantiation use *ImpCentralApi* property getters to obtain the subclasses which provide methods to access impCentral API.

```javascript
const Imp = require('imp-central-api');
const imp = new Imp('<api_base_endpoint>');
imp.auth.<auth_method()>;
imp.products.<products_method()>;
```
**TODO: correct the example, if needed, or remove at all**

### Authorization / Authentication

Access to almost every endpoint in impCentral API requires authorization. Authorization is presented via an access_token in the HTTP Authorization header.

[Auth class](./lib/Auth.js) of the library provides several methods to initialize the library by an access token to allow further access to impCentral API:

- if you already have a non-expired access token, e.g. saved after the previous usage of the library: use *set accessToken()* property setter;
- if an access token is expired but you have a refresh token, e.g. saved after the previous usage of the library or received after *login()* methods: use *refreshAccessToken()* method;
- if you have a login key: use *getAccessToken()* with login key;
- alternatively, use *login()* method with identifier/password pair and, additionally, if Two-Factor authentication is enabled for your account, *loginUsingOtp() method with one-time password. Login methods allow to obtain the both - an access token and a refresh token.

**TODO: leave only the finally supported methods**

Remember, when access token is expired any call of impCentral API returns 401 error. You need to re-initialize the library by a new access token using one of the above methods.

For more information see [impCentral API: Auth](https://preview-apidoc.electricimp.com/accounts.html#tag/Auth) **TODO: change the link to the final one**

### impCentral API calls

This library is a JavaScript wrapper for impCentral API.

[Accounts](./lib/Accounts.js), [Products](./lib/Products.js), [DeviceGroups](./lib/DeviceGroups.js), [Devices](./lib/Devices.js), [Deployments](./lib/Deployments.js) classes of the library map to the corresponding groups in impCentral API. Interface methods of these classes mostly map one to one to the corresponding methods of impCentral API.

See **impCentral API Coverage** section below for the list of the supported impCentral API methods.

### Results Processing

All requests to impCentral API are made asynchronously via Promises. Any method which sends a request returns a Promise:

- if operation succeeds, the Promise resolves with HTTP response body;
- if operation fails, the Promise rejects with an error.

You need to parse the returned HTTP response body by your code.

The exact format of HTTP response body for every request can be found in [Electric Imp impCentral API (v5)](https://preview-apidoc.electricimp.com). **TODO: change the link to the final one**

### Errors Processing

[Error classes](./lib/Errors.js) define different types of errors returned by the library:

- *LibraryError* - indicates that the library detects an error, e.g. the library is wrongly initialized. The error details can be found in the message property.

- *InvalidArgumentError* - indicates that the library method is called with invalid argument(s). The error details can be found in the message property.

The two type of errors above indicate issues which usually happen during an application development. Usually they should be fixed during debugging and therefore should not occur after the application has been deployed.

- *ImpCentralApiError* - Indicates that HTTP request to impCentral API failed. The error details can be found in the message, statusCode and body properties. This error may occur during the normal execution of an application. The exact body format is described in [impCentral API: Error Handling](https://preview-apidoc.electricimp.com/#section/Error-Handling) **TODO: change the link to the final one**

## impCentral API Coverage

## Examples

**TODO: check the examples and correct/extend, if needed. Add more comments?**

1. library initialization using email/password login:

```javascript
const Imp = require('imp-central-api');
const imp = new Imp('https://api.ei.run/v5');
var token;
imp.auth.login(email, password).then((result) => {
    token = result.access_token.access_token;
},
(error) => {
    // check for the error
});
```

2. library initialization using existing access token, product and device group creation:

```javascript
imp.auth.accessToken = token;
var accountId;
imp.accounts.get().then((result) => {
    accountId = result.data.id;
});

// accountId is optional parameter of create(), if not provided, product will be assigned to the acting user
imp.products.create({ name : 'test_product'}, accountId).then((result) => {
    var productId = result.data.id;
    imp.deviceGroups.create(
        productId,
        DeviceGroups.TYPE_DEVELOPMENT,
        {name : 'temp_sensors', descr : 'temperature sensors'}).then((result) => {
        var devGroupId = result.data.id;
    });
});
```

3. list existing device groups with filters and restart all the devices from the first device group:

```javascript
var filters = {};
filters[DeviceGroups.FILTER_OWNER_ID] = accountId;
filters[DeviceGroups.FILTER_TYPE] = DeviceGroups.TYPE_DEVELOPMENT;
imp.deviceGroups.list(filters).then((result) => {
    var firstDevGroupId = result.data[0].id;
    imp.deviceGroups.restartDevices(firstDevGroupId);
});
```

## License

This library is licensed under the [MIT License](./LICENSE).

## Release History ?
