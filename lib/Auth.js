'use strict';

// Access to almost every endpoint in the Electric Imp Central API requires authorization.
// Authorization is presented via an access_token in the HTTP Authorization header.
//
// There are four separate ways to initialize the library by an access token to allow an access to Imp Central API.
// a) if you already have a non-expired access token (e.g. saved after the previous usage of the library):
//    use set accessToken() property setter;
// b) if an access token is expired but you have a refresh token (e.g. saved after the previous usage of the library
//    or received after login methods): use refreshAccessToken() method;
// c) if you have a login key: use getAccessToken() with login key;
// d) alternatively, use login() method with identifier/password pair and, additionally,
//    if Two-Factor authentication is enabled for your account, loginUsingOtp() method with one-time password.
//    Login methods allow to obtain the both - an access token and a refresh token.
//
// Remember, when access token is expired any call of Imp Central API returns 401 error. You need to re-initialize
// the library by a new access token using one of the above ways.
//
// Note for review: not all of the above ways may be implemented/supported by [the first version of] the library.

class Auth {

    // Sets an access token for further access to Imp Central API.
    // 
    // Parameters:
    //     token    : String    an access token
    set accessToken(token) {
    }

    // Retrieves a new access token from a refresh token.
    //
    // The obtained access token to be automatically used by the library for further access to Imp Central API.
    // Also, the access token is returned to the caller in the HTTP response body.
    //
    // Parameters:
    //     refreshToken : String    a refresh token
    //
    // Returns:                     Promise that resolves if operation succeeds, or rejects 
    //                              with an error
    refreshAccessToken(refreshToken) {
    }

    // Retrieves a new access token from a login key.
    //
    // The obtained access token to be automatically used by the library for further access to Imp Central API.
    // Also, the access token is returned to the caller in the HTTP response body.
    //
    // Parameters:
    //     loginKey : String    a login_key
    //
    // Returns:                 Promise that resolves if operation succeeds, or rejects 
    //                          with an error
    getAccessToken(loginKey) {
    }

    // Authenticate a user via an identifier/password pair.
    //
    // If the authentication is successfully completed, the obtained access token to be automatically used
    // by the library for further access to Imp Central API.
    // Also, the access token and the obtained refresh token are returned to the caller in the HTTP response body.
    //
    // If Two-Factor authentication is enabled for the user, loginUsingOtp() method needs to be
    // additionally called to complete the authentication.
    //
    // Parameters:
    //     id       : String    the account identifier, this could be an email address or a username
    //     password : String    the account password.
    //
    // Returns:                 Promise that resolves if the operation succeeds, or rejects 
    //                          with an error
    login(id, password) {
    }

    // Authenticate a user via an one-time password (second phase of Two-Factor authentication).
    // See Two-Factor Auth of Electric Imp impCentral API (v5).
    //
    // If the authentication is successfully completed, the obtained access token to be automatically used
    // by the library for further access to Imp Central API.
    // Also, the access token and the obtained refresh token are returned to the caller in the HTTP response body.
    //
    // Parameters:
    //     otp        : String  one-time password
    //     loginToken : String  short-lived token obtained using login(id, password) method call
    //
    // Returns:                 Promise that resolves if the operation succeeds, or rejects 
    //                          with an error
    loginUsingOtp(otp, loginToken = null) {
    }
}

module.exports = Auth;
