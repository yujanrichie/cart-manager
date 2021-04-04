function CartManager() {
    let _cartItems = []; //expect to at least have an object with id and quantity 
    let _handleChange = function(items) { }; // variable that holds a callback 

    //checks if an item already exists in cart, return true if it exists
    let _isItemInCart = function(item) {
        if ((item != null) && (item.id != null)) {
            let itemFound = _cartItems && _cartItems.find(cartItem => cartItem && cartItem.id === item.id);
            if (itemFound != null) return true;
        }
        return false;
    };

    //readonly cartItems property
    Object.defineProperty(this, 'cartItems', {
        get: function() {
            return _cartItems;
        }
    });                                            

    /**
     * Interface Methods
     */
    
    // method to store cart items
    this.storeItems = function() { 
        //not sure what the difference with pushItem?
    };

    // method to add an item to cart
    this.pushItem = function(item) {
        if (item != null) {
            // can only push an item with an id
            if (item.id == null) {
                throw new Error('Cart item needs to have an id!');
            }

            if (_isItemInCart && _isItemInCart(item)) {
                //already in cart, update it instead
                this.updateItem(item);
            } else {
                //add to cart, make sure it has an id and quantity
                let newQuantity = item['quantity'] || 1;
                _cartItems && _cartItems.push(
                    { 
                        id: item.id, 
                        quantity: newQuantity, 
                        ...item 
                    }
                );
                _handleChange && _handleChange(_cartItems);
            }
        }
    };

    // method to update quantity of item in cart
    this.updateItem = function(item) {
        if (item != null) {
            // can only update an item with an id
            if (item.id == null) {
                throw new Error('Cart item needs to have an id!');
            }
            
            let itemFound = _cartItems && _cartItems.find(cartItem => cartItem.id === item.id);

            if (itemFound != null) {
                let newQuantity = itemFound['quantity'] || 1;
                let prevQuantity = item['quantity'] || 0;
                itemFound['quantity'] = prevQuantity + newQuantity;

                _handleChange && _handleChange(_cartItems);
            }
        }
    };

    // method to remove item in cart
    this.removeItem = function(item) {
        if ((item != null) && (item.id != null)) {
            // can only remove an item with an id
            if (item.id == null) {
                throw new Error('Cart item needs to have an id!');
            }

            _cartItems = _cartItems && _cartItems.filter(cartItem => cartItem && cartItem.id !== item.id);
            _handleChange && _handleChange(_cartItems);
        }
    };

    // method to subscribe in order to call a function after every cart update
    this.subscribeCartUpdates = function(callbackFunction) {
        _handleChange = callbackFunction;
    };
}

module.exports.CartManager = CartManager;