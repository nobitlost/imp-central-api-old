'use strict';

class Devices {
    
    // Retrieves a list of devices associated with the logged-in account.
    //
    // Parameters:
    //     filters    : Object  Optional Key/Value filters that will be applied to the result list
    //                          The valid keys are:
    //                              'filter[owner.id]'             - filter by the Device owner
    //                              'filter[product.id]'           - filter by the Product that holds the 
    //                                  Device Group to which the Device is assigned
    //                              'filter[devicegroup.id]'       - filter by the Device Group to 
    //                                  which the Device is assigned
    //                              'filter[devicegroup.owner.id]' - filter by the owner of the Device Group 
    //                                  to which the Device is assigned. The value can be the literal string 'null',
    //                                  meaning return only unassigned devices.
    //                              'filter[devicegroup.type]'     - filter by the type of the Device Group 
    //                                  to which the Device is assigned
    //                                  NOTE: all other values except 'development_devicegroup' are currently ignored
    //     pageNumber : Number  Optional pagination page number (starts at 1).
    //                          If not specified, the default value is 1.
    //     pageSize   : Number  Optional pagination size - maximum number of items to return.
    //                          If not specified, the default value is 20.
    // 
    // Returns:                 Promise that resolves when the Devices list is successfully
    //                          obtained, or rejects with an error
    list(filters = null, pageNumber = null, pageSize = null) {
    }

    // Possible filters keys for the list() filters:
    static get FILTER_OWNER_ID() {
        return 'filter[owner.id]';
    }

    static get FILTER_PRODUCT_ID() {
        return 'filter[product.id]';
    }

    static get FILTER_DEVICE_GROUP_ID() {
        return 'filter[devicegroup.id]';
    }

    static get FILTER_DEVICE_GROUP_OWNER_ID() {
        return 'filter[devicegroup.owner.id]';
    }

    static get FILTER_DEVICE_GROUP_TYPE() {
        return 'filter[devicegroup.type]';
    }

    // Retrieves a specific Device.
    //
    // Parameters:
    //     deviceId : String    ID of the Device to be retrieved
    //
    // Returns:                 Promise that resolves when the Device is successfully obtained, 
    //                          or rejects with an error
    get(deviceId) {
    }

    // Updates a specific Device.
    //
    // Parameters:
    //     deviceId      : String  ID of the Device to be updated
    //     attributes    : Object  Key/Value attributes of the Device that will be updated. 
    //                             The valid keys are:
    //                                 'name' - the Device's name
    //
    // Returns:                    Promise that resolves when the Device is successfully updated, 
    //                             or rejects with an error
    update(deviceId, attributes) {
    }

    // Removes a specific device from the logged-in account.
    //
    // Parameters:
    //     deviceId : String       ID of the Device Group to be removed
    //
    // Returns:                    Promise that resolves when the Device is successfully removed 
    //                             from the account, or rejects with an error
    delete(deviceId) {
    }

    // Restarts a Device.
    //
    // Parameters:
    //     deviceId : String       ID of the Device to be restarted
    //
    // Returns:                    Promise that resolves when the Device was restarted, 
    //                             or rejects with an error
    restart(deviceId) {
    }
}

module.exports = Devices;
