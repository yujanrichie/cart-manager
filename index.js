function CartManager() {
    let cartItems = [];

    this.storeItems = function() { };

    this.pushItems = function() { };

    this.updateItems = function() { };

    this.removeItems = function() { };

    this.subscribeCartUpdates = function(callbackFunction) { };

    //readonly cartItems property
    Object.defineProperty(this, 'cartItems', {
        get: function() {
            return cartItems;
        }
    });
}