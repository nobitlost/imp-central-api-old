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

const config = require('./config');
const ImpCentralApi = require('../lib/ImpCentralApi');

const TIMEOUT = 20000;

var impCentralApi = new ImpCentralApi(config.apiEndpoint);

module.exports.getRandomInt = function () {
    return Math.floor(Math.random() * 10000);
}

module.exports.init = function (done) {
    impCentralApi.debug = config.debug;
    impCentralApi.auth.login(config.email, config.password).
        then((res) => {
            done();
        }).
        catch((error) => {
            done.fail(error);
        });
}

module.exports.impCentralApi = impCentralApi;
module.exports.TIMEOUT = TIMEOUT;