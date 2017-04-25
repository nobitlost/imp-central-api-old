'use strict';

// NOTE: only 'development_devicegroup' type is currently supported.
class DeviceGroups {

    // Device Groups types
    static get TYPE_DEVELOPMENT() {
        return 'development_devicegroup';
    }

    static get TYPE_PRODUCTION() {
        return 'production_devicegroup';
    }

    static get TYPE_FACTORY_FIXTURE() {
        return 'factoryfixture_devicegroup';
    }

    // Retrieves a list of Device Groups associated with the logged-in account.
    //
    // Parameters:
    //     filters    : Object  Optional Key/Value filters that will be applied to the result list
    //                          The valid keys are:
    //                              'filter[owner.id]'   - filter by the Device Group owner
    //                              'filter[product.id]' - filter by the Product that holds the Device Group
    //                              'filter[type]'       - filter by the Device Group type
    //     pageNumber : Number  Optional pagination page number (starts at 1).
    //                          If not specified, the default value is 1.
    //     pageSize   : Number  Optional pagination size - maximum number of items to return.
    //                          If not specified, the default value is 20.
    // 
    // Returns:                 Promise that resolves when the Device Groups list is successfully
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

    static get FILTER_TYPE() {
        return 'filter[type]';
    }

    // Creates a Device Group of specified type and associates it with an existing Product 
    // specified by productId.
    // NOTE: only 'development_devicegroup' type is currently supported, all other values 
    // cause the method failure.
    //
    // Parameters:
    //     productId     : String  The Product's ID 
    //     type          : String  The Device Group type
    //     attributes    : Object  Key/Value attributes of the Device Group to be created. 
    //                             The valid keys are:
    //                                 'name' (required) - the Device Group's name, this must be 
    //                                     unique for all DeviceGroups in this Product
    //                                 'description' (optional) - an optional free-form 
    //                                     description of the Device Group
    //     relationships : Object  Optional Key/Value relationships of the Device Group to be 
    //                             created. The only valid key is 'production_target'.
    //                             NOTE: Currently ignored as Production Device Groups feature.
    //
    // Returns:                    Promise that resolves when the Device Group is successfully created, 
    //                             or rejects with an error
    create(productId, type, attributes, relationships = null) {
    }

    // Retrieves a specific Device Group.
    //
    // Parameters:
    //     productId : String   ID of the Device Group to be retrieved
    //
    // Returns:                 Promise that resolves when the Device Group is successfully obtained, 
    //                          or rejects with an error
    get(deviceGroupId) {
    }

    // Updates a specific Device Group.
    //
    // Parameters:
    //     deviceGroupId : String  ID of the Device Group to be updated
    //     attributes    : Object  Key/Value attributes of the Device Group that will be updated. 
    //                             The valid keys are:
    //                                 'name' - the Device Group's name, this must be 
    //                                     unique for all Device Groups in this Product
    //                                 'description' - an optional free-form 
    //                                     description of the Device Group
    //                                 'load_code_after_blessing'
    //                                     NOTE: Currently ignored as Production Device Groups feature.
    //     relationships : Object  Optional Key/Value relationships of the Device Group to be 
    //                             created. The only valid key is 'production_target'.
    //                             NOTE: Currently ignored as Production Device Groups feature.
    //
    // Returns:                    Promise that resolves when the Device Group is successfully updated, 
    //                             or rejects with an error
    update(deviceGroupId, attributes, relationships) {
    }

    // Deletes a specific Device Group.
    //
    // Parameters:
    //     deviceGroupId : String  ID of the Device Group to be deleted
    //
    // Returns:                    Promise that resolves when the Device Group is successfully deleted, 
    //                             or rejects with an error
    delete(deviceGroupId) {
    }

    // Restart all the devices in a Device Group immediately.
    //
    // Parameters:
    //     deviceGroupId : String  ID of the Device Group
    //
    // Returns:                    Promise that resolves when the Device Group's devices were restarted, 
    //                             or rejects with an error
    restartDevices(deviceGroupId) {
    }

    // Adds one or more devices to the specified Device Group. 
    // It is not an atomic operation — it is possible for some Devices to be added and other Devices 
    // to fail to be added.
    //
    // Parameters:
    //     deviceGroupId : String  ID of the Device Group
    //     deviceIds     : String  One or more Devices IDs to be added to the Device Group
    //
    // Returns:                    Promise that resolves when all of the devices were successfully added 
    //                             to the Device Group or rejects with an error when one or more devices 
    //                             could not be assigned
    addDevices(deviceGroupId, ...deviceIds) {
    }

    // Removes one or more devices from the specified Device Group.
    // It is not an atomic operation — it's possible for some Devices to be unassigned and other Devices
    // to fail to be unassigned.
    //
    // Parameters:
    //     deviceGroupId : String  ID of the Device Group
    //     deviceIds     : String  One or more Devices IDs to be removed from the Device Group
    //
    // Returns:                    Promise that resolves when all of the devices were successfully removed 
    //                             from the Device Group or rejects with an error when one or more devices 
    //                             could not be unassigned
    removeDevices(deviceGroupId, ...deviceIds) {
    }
}

module.exports = DeviceGroups;
