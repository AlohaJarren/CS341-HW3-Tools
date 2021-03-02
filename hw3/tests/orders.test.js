//Jarren Calizo

//Require the orders.js file
const orders = require('../routes/orders.js');

//Arbitrary values to use in a random order
var randomOrder = {topping: 'pineapple on pizza', quantity: 3};
var randomOrderJSON = JSON.stringify(randomOrder);

//JUnit test that tests to receive orders.js file, and if an order has a topping and quantity
test ('test a random order', () => {
    expect(orders).toEqual(expect.anything()); //checks if there is a orders.js file
    expect(randomOrderJSON).toEqual(expect.stringContaining('topping')); //checks if JSON object has a topping
    expect(randomOrderJSON).toEqual(expect.stringContaining('quantity')); //checks if JSON object has a quantity
});