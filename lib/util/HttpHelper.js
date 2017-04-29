// MIT License
//
// Copyright 2017 Electric Imp
//
// SPDX-License-Identifier: MIT
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
// OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

'use strict';

const Request = require('request');
const Logger = require('./Logger');
const Errors = require('./../Errors');

const PAGE_SIZE_DEFAULT = 20;
const PAGE_NUMBER_DEFAULT = 1;
const API_ENDPOINT_DEFAULT = 'https://api.ei.run/v5';

// Helper class for HTTP requests/responses processing
class HttpHelper {
    static set apiEndpoint(apiEndpoint) {
        if (apiEndpoint) {
            HttpHelper._apiEndpoint = apiEndpoint;
        }
    }

    static get apiEndpoint() {
        return HttpHelper._apiEndpoint || API_ENDPOINT_DEFAULT;
    }

    static set accessToken(accessToken) {
        if (accessToken) {
            HttpHelper._accessToken = new Buffer(accessToken).toString('base64');
        }
    }

    static getPaginationQuery(pageNumber, pageSize) {
        if (pageNumber || pageSize) {
            return {
                'page[number]' : pageNumber || PAGE_NUMBER_DEFAULT,
                'page[size]' : pageSize || PAGE_SIZE_DEFAULT
            };
        }
        return null;
    }

    static request(method, path, query = null, body = null) {
        if (!HttpHelper._accessToken) {
            return Promise.reject(new Errors.LibraryError('Library initialization failed: access_token is not set'));
        }
        return HttpHelper._request(method, path, query, body);
    }

    static auth(path, body) {
        // v5 auth is temporarily commented
        // const options = {
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        // };
        // return HttpHelper._request('POST', path, null, body, options, true);

        // temporary patch until v5 auth becomes available
        let url = HttpHelper.apiEndpoint;
        const suffix = '/v5';
        if (url.endsWith(suffix)) {
            url = url.substring(0, url.length - suffix.length);
        }
        const options = {
            url: url + '/account/login',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }
        let strBody = '';
        let isFirst = true;
        for (let opt in body) {
            if (!isFirst) {
                strBody += '&';
            }
            strBody += (opt === 'id' ? 'email' : opt) + '=' + body[opt];
            isFirst = false;
        }
        return HttpHelper._request('POST', '/account/login', null, strBody, options, true);
    }

    static get(path, query = null) {
        return HttpHelper.request('GET', path, query);
    }

    static post(path, body = null) {
        return HttpHelper.request('POST', path, null, body);
    }

    static patch(path, body) {
        return HttpHelper.request('PATCH', path, null, body);
    }

    static delete(path, body = null) {
        return HttpHelper.request('DELETE', path, null, body);
    }

    static _getError(error, response, body) {
        if (error) {
            // error is produced by request library
            return new Errors.LibraryError('Request error: ' + error);
        }
        if (response.statusCode < 200 || response.statusCode >= 300) {
            if (body && body.errors && body.errors.length > 0) {
                const error = body.errors[0];
                if (error.title && error.detail) {
                    return new Errors.CentralApiError(error.title + ': ' + error.detail, response.statusCode, body);
                }
            }
            return new Errors.CentralApiError('Central API error HTTP/' + response.statusCode, response.statusCode, body);
        }
        // no error
        return null;
    }

    static _request(method, path, query = null, body = null, options = null, isAuth = false) {
        return new Promise((resolve, reject) => {
            method = method.toUpperCase();

            const opts = {
                url: HttpHelper.apiEndpoint + path,
                method : method,
                headers: {
                    'Content-type': 'application/vnd.api+json',
                    'Authorization': 'Basic ' + HttpHelper._accessToken
                },
                json : true,
                qs : query,
                body : body
            };

            if (options) {
                // override custom options
                Object.assign(opts, options);
            }

            if (Logger.debug) {
                const debugOptions = JSON.parse(JSON.stringify(opts));
                // hide authorization header
                if ('Authorization' in debugOptions.headers) {
                    debugOptions.headers.Authorization = '[hidden]';
                }
                Logger.logDebug('Doing the request with options:');
                Logger.logDebug(debugOptions);
            }

            // do request to Imp Central api
            Request(opts, (error, response, body) => {
                if (Logger.debug && response) {
                    Logger.logDebug('');
                    Logger.logDebug('Response code:', response.statusCode);
                    Logger.logDebug('Response body:', response.body);
                }

                const err = HttpHelper._getError(error, response, body);
                if (err) {
                    reject(err);
                }
                else {
                    // v5 auth processing is temporarily commented
                    // if (isAuth && ('access_token' in body)) {
                    //     HttpHelper.accessToken = body.access_token;
                    // }

                    // temporary patch until v5 auth becomes available
                    if (isAuth && ('token' in body)) {
                        HttpHelper.accessToken = body.token;
                        body.access_token = body.token;
                    }

                    resolve(body);
                }
            });
        });
    }
}

module.exports = HttpHelper;
