# What is this?
Practice library that manages the global cart state of a user.

# Installation
`npm i yujan-cart-manager`

Then...
```
import { CartManager } from 'yujan-cart-manager';

const cartManager = new CartManager();
```

## Definition

* _CartItem_ object - object must have an id and quantity
ex.
```
{
    id: 1,
    quantity: 0
}
```
* _CallbackFunction_ - callback function with a parameter of _CartItem_ list
ex.
```
const callbackFunction = (latestCartValues) => {};
```

## Properties

* cartItems - list of _CartItem_ object

## Methods

* pushItem(_CartItem_) - method to add an item to cart
* updateItem(_CartItem_) - method to update quantity of item in cart
* removeItem(_CartItem_) - method to remove item in cart
* subscribeCartUpdates(_CallbackFunction_) - method to subscribe for any updates to the cart state
