'use strict';

const Accounts = require('./Accounts');
const Auth = require('./Auth');
const Products = require('./Products');
const DeviceGroups = require('./DeviceGroups');
const Devices = require('./Devices');
const Deployments = require('./Deployments');

// Client library for Electric Imp impCentral API (v5).
// Provides access to Account&Authentication, Products, Device Groupts, Devices and
// Deployments interfaces of impCentral API.
//
// All requests to impCentral API are made asynchronously via Promises.
// Any method that sends a request returns Promise that resolves with HTTP response body 
// if operation succeeds, or rejects with an error if operation fails.
//
// The exact format of HTTP response body for every request can be found in 
// Electric Imp impCentral API (v5).
//
// TODO: describe error format

class ImpCentralApi {

    // Creates ImpCentralApi library instanse.
    //
    // Parameters:
    //     apiEndpoint : String   impCentral API endpoint
    constructor(apiEndpoint = null) {
        this._accounts = new Accounts();
        this._products = new Products();
        this._deviceGroups = new DeviceGroups();
        this._devices = new Devices();
        this._deployments = new Deployments();
    }

    // Provides access to Authentication impCentral API methods.
    get auth() {
        return this._auth;
    }

    // Provides access to Account impCentral API methods.
    get accounts() {
        return this._accounts;
    }

    // Provides access to Products impCentral API methods.
    get products() {
        return this._products;
    }

    // Provides access to Device Groups impCentral API methods.
    get deviceGroups() {
        return this._deviceGroups;
    }

    // Provides access to Devices impCentral API methods.
    get devices() {
        return this._devices;
    }

    // Provides access to Deployments impCentral API methods.
    get deployments() {
        return this._deployments;
    }

    // Enables/disables logging debug mode.
    //
    // Parameters:
    //     value : Boolean    a new value for debug mode
    set debug(value) {
    }
}

module.exports = ImpCentralApi;
