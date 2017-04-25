'use strict';

class Deployments {

    // Retrieves the account's Deployment history.
    //
    // Parameters:
    //     filters    : Object  Optional Key/Value filters that will be applied to the result list
    //                          The valid keys are:
    //                              'filter[owner.id]'             - filter by the Deployment owner
    //                              'filter[creator.id]'           - filter by the user who created the Deployment
    //                              'filter[product.id]'           - filter by Product that holds the Device Group 
    //                                  using the deployment
    //                              'filter[devicegroup.id]'       - filter by Device Group using the deployment
    //                              'filter[sha]'                  - filter by the Deployment SHA
    //                              'filter[flagged]'              - filter by the Deployment's flagged property. 
    //                                  Filter value can be 'true', 'false', or 'any'.
    //                              'filter[flagger.id]'           - filter by the user who flagged the Deployment
    //                              'filter[tags]'                 - filter by the Deployment's tags property. 
    //                                  Deployments will match all tags, if applied multiple times.
    //     pageNumber : Number  Optional pagination page number (starts at 1).
    //                          If not specified, the default value is 1.
    //     pageSize   : Number  Optional pagination size - maximum number of items to return.
    //                          If not specified, the default value is 20.
    // 
    // Returns:                 Promise that resolves when the Deployment list is successfully
    //                          obtained, or rejects with an error
    list(filters = null, pageNumber = null, pageSize = null) {
    }

    // Possible filters keys for the list() filters:
    static get FILTER_OWNER_ID() {
        return 'filter[owner.id]';
    }

    static get FILTER_CREATOR_ID() {
        return 'filter[creator.id]';
    }

    static get FILTER_PRODUCT_ID() {
        return 'filter[product.id]';
    }

    static get FILTER_DEVICE_GROUP_ID() {
        return 'filter[devicegroup.id]';
    }

    static get FILTER_SHA() {
        return 'filter[sha]';
    }

    static get FILTER_FLAGGED() {
        return 'filter[flagged]';
    }

    static get FILTER_FLAGGER_ID() {
        return 'filter[flagger.id]';
    }

    static get FILTER_TAGS() {
        return 'filter[tags]';
    }

    // Creates a Deployment.
    // A Deployment represents Squirrel code that has been assigned to all Devices of a Device Group 
    // specified by deviceGroupId and deviceGroupType.
    // 
    // NOTE: only 'development_devicegroup' deviceGroupType is currently supported, all other values 
    // cause the method failure.
    //
    // Parameters:
    //     deviceGroupId   : String  The Device Group's ID
    //     deviceGroupType : String  The Device Group's type, only 'development_devicegroup' is 
    //                               currently supported
    //     attributes      : Object  Key/Value attributes of the Deployment to be created. 
    //                               The valid keys are:
    //                                   'device_code' (String, required) - The Squirrel device code 
    //                                       for this Deployment
    //                                   'agent_code' (String, required) - The Squirrel agent code 
    //                                       for this Deployment
    //                                   'description' (String, optional) - an optional free-form 
    //                                       description of the Deployment
    //                                   'origin' (String, optional) - an optional free-form key 
    //                                       to store the source of the code. This field can only be 
    //                                       set at Deployment creation.
    //                                   'flagged' (Boolean, optional) - a toggle marking the deployment 
    //                                       as flagged or not. Deployments flagged true cannot be deleted
    //                                       without first setting flagged to false. Default value is false.
    //                                   'tags' (Array of String, optional) - an array of tags applied to 
    //                                       this Deployment. Tags must conform to the regular expression 
    //                                       /^[A-Za-z0-9_-*.]$/ and may not exceed a total of 500 characters.
    //
    // Returns:                      Promise that resolves when the Deployment is successfully created, 
    //                               or rejects with an error
    create(deviceGroupId, deviceGroupType, attributes) {
    }

    // Retrieves a specific Deployment.
    //
    // Parameters:
    //     deploymentId : String   ID of the Deployment to be retrieved
    //
    // Returns:                    Promise that resolves when the Deployment is successfully obtained, 
    //                             or rejects with an error
    get(deploymentId) {
    }

    // Updates a specific Deployment.
    //
    // Parameters:
    //     deploymentId  : String  ID of the Deployment to be updated
    //     attributes    : Object  Key/Value attributes of the Deployment that will be updated. 
    //                             The valid keys are:
    //                                 'description' (String, optional) - an optional free-form 
    //                                     description of the Deployment
    //                                 'flagged' (Boolean, optional) - a toggle marking the deployment 
    //                                     as flagged or not. Deployments flagged true cannot be deleted
    //                                     without first setting flagged to false. Default value is false.
    //                                 'tags' (Array of String, optional) - an array of tags applied to 
    //                                     this Deployment. Tags must conform to the regular expression 
    //                                     /^[A-Za-z0-9_-*.]$/ and may not exceed a total of 500 characters.
    //
    // Returns:                    Promise that resolves when the Deployment is successfully updated, 
    //                             or rejects with an error
    update(deploymentId, attributes) {
    }

    // Deletes a specific Deployment.
    //
    // Parameters:
    //     deploymentId  : String  ID of the Deployment to be deleted
    //
    // Returns:                    Promise that resolves when the Deployment is successfully deleted, 
    //                             or rejects with an error
    delete(deploymentId) {
    }
}

module.exports = Deployments;
