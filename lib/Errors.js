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

const Logger = require('./util/Logger');

// Indicates that the library detects an error, e.g. the library is wrongly initialized.
class LibraryError extends Error {
    constructor(message) {
        super(message || 'Library error');
        Logger.logError(message);
    }
}

// Indicates that the library method is called with invalid argument(s).
class InvalidArgumentError extends LibraryError {
    constructor(message) {
        super(message || 'Invalid argument error');
    }
}

// Indicates that HTTP request to impCentral API failed. 
class CentralApiError extends Error {
    constructor(message, statusCode, body = null) {
        super(message || 'Central API error');
        this._statusCode = statusCode;
        this._body = body;
        Logger.logError('HTTP/%d: %s', statusCode, message);
    }

    get statusCode() {
        return this._statusCode;
    }

    get body() {
        return this._body;
    }
}

module.exports.CentralApiError = CentralApiError;
module.exports.LibraryError = LibraryError;
module.exports.InvalidArgumentError = InvalidArgumentError;