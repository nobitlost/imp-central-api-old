'use strict';

// Access to almost every endpoint in the Electric Imp Central API requires authorization.
// Authorization is presented via an access_token in the HTTP Authorization header.
//
// There are four separate ways to provide an access token to the library for further access to Imp Central API.
// 1. using accessToken property setter with access token previously obtained
// 2. using refreshAccessToken() with refresh token previously obtained
// 3. using getAccessToken() with login key
// 4. using auth() method with identifier/password pair (and then authUsingOtp() for Two-Factor authentication)

class Auth {

    // Sets an access token for further access to Imp Central API.
    // 
    // Parameters:
    //     token    : String    an access token
    set accessToken(token) {
    }

    // Retrieves a new access token from a refresh token.
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
    // Parameters:
    //     loginKey : String    a login_key
    //
    // Returns:                 Promise that resolves if operation succeeds, or rejects 
    //                          with an error
    getAccessToken(loginKey) {
    }

    // Authenticate a user via an identifier/password pair.
    //
    // Parameters:
    //     id       : String    the account identifier, this could be an email address or a username
    //     password : String    the account password.
    //
    // Returns:                 Promise that resolves if the operation succeeds, or rejects 
    //                          with an error
    auth(id, password) {
    }

    // Authenticate a user via an one-time password.
    // See Two-Factor Auth of Electric Imp impCentral API (v5).
    //
    // Parameters:
    //     otp        : String  one-time password
    //     loginToken : String  short-lived token obtained using auth(id, password) method call
    //
    // Returns:                 Promise that resolves if the operation succeeds, or rejects 
    //                          with an error
    authUsingOtp(otp, loginToken = null) {
    }
}

module.exports = Auth;
