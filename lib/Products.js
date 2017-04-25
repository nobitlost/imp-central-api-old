'use strict';

class Products {

    // Retrieves a list of the Products associated with the logged-in account.
    //
    // Parameters:
    //     filters    : Object  Optional Key/Value filters that will be applied to the result list
    //                          The valid keys are:
    //                              'filter[owner.id]' - filter by Product owner ID
    //     pageNumber : Number  Optional pagination page number (starts at 1).
    //                          If not specified, the default value is 1.
    //     pageSize   : Number  Optional pagination size - maximum number of items to return.
    //                          If not specified, the default value is 20.
    // 
    // Returns:                 Promise that resolves when the Products list is successfully
    //                          obtained, or rejects with an error
    list(filters = null, pageNumber = null, pageSize = null) {
    }

    // Possible filters keys for the list() filters:
    static get FILTER_OWNER_ID() {
        return 'filter[owner.id]';
    }

    // Creates a Product.
    //
    // Parameters:
    //     attributes : Object  Key/Value attributes of the Product to be created. 
    //                          The valid keys are:
    //                              'name' (required) - the product's name, this must be unique 
    //                                  for all Products owned by a particular Account
    //                              'description' (optional) - an optional free-form description 
    //                                  of the product
    //     ownerId    : String  Account ID of the product owner. If no ownerId is provided,
    //                          the product is assigned to the logged-in account
    //
    // Returns:                 Promise that resolves when the Product is successfully created, 
    //                          or rejects with an error
    create(attributes, ownerId = null) {
    }

    // Retrieves a specific Product.
    //
    // Parameters:
    //     productId : String   ID of the product to be retrieved
    //
    // Returns:                 Promise that resolves when the Product is successfully obtained, 
    //                          or rejects with an error
    get(productId) {
    }

    // Updates a specific Product.
    //
    // Parameters:
    //     productId  : String  ID of the product to be updated
    //     attributes : Object  Key/Value attributes of the Product that will be updated. 
    //                          The valid keys are:
    //                          'name' - the product's name, this must be unique 
    //                              for all Products owned by a particular Account
    //                          'description' - an optional free-form description 
    //                              of the product
    //
    // Returns:                 Promise that resolves when the Product is successfully updated, 
    //                          or rejects with an error
    update(productId, attributes) {
    }

    // Deletes a specific Product.
    //
    // Parameters:
    //     productId : String   ID of the Product to be deleted
    //
    // Returns:                 Promise that resolves when the Product is successfully deleted, 
    //                          or rejects with an error
    delete(productId) {
    }
}

module.exports = Products;
