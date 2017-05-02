# Electric Imp impCentral API (v5) JavaScript library

This library is a JavaScript wrapper for the [Electric Imp impCentral API (v5)](https://preview-apidoc.electricimp.com). **TODO: change the link to the final one**

## Library Installation

**TODO**

## Library Usage

### Instantiation

To instantiate this library you need to call *ImpCentralApi* class constructor.
By default the library works with the following impCentral API base endpoint: **TODO: add the final link**
You can optionally pass to the constructor an alternative impCentral API base endpoint. This can be used to connect to private impCloud installations.

```javascript
const Imp = require('imp-central-api');
const imp = new Imp('<api_base_endpoint>'); 
```

### Authorization / Authentication

Access to almost every endpoint in impCentral API requires authorization.
Authorization is presented via an access_token in the HTTP Authorization header.

[Auth class](./lib/Auth.js) of the library provides several methods to initialize the library by an access token to allow further access to impCentral API:

- if you already have a non-expired access token, e.g. saved after the previous usage of the library: use *set accessToken()* property setter;
- if an access token is expired but you have a refresh token, e.g. saved after the previous usage of the library or received after *login()* methods: use *refreshAccessToken()* method;
- if you have a login key: use *getAccessToken()* with login key;
- alternatively, use *login()* method with identifier/password pair and, additionally, if Two-Factor authentication is enabled for your account, *loginUsingOtp() method with one-time password. Login methods allow to obtain the both - an access token and a refresh token.

**TODO: leave only the finally supported methods**

Remember, when access token is expired any call of impCentral API returns 401 error. You need to re-initialize the library by a new access token using one of the above methods.

For more information see [impCentral API: Auth](https://preview-apidoc.electricimp.com/accounts.html#tag/Auth) **TODO: change the link to the final one**

### Classes and Methods

### Limitations

development features only

### Results Returning

### Errors Processing

### Filtering

### Pagination

### Debug Output

## impCentral API Coverage

## Examples

## License

This library is licensed under the [MIT License](./LICENSE).

## Release History ?
