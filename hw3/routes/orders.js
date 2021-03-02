// Jarren Calizo
var express = require('express');
var router = express.Router();

//array of JSON Objects
var toppingsAndQuantities = {
    data: [
        {
            topping: "cherry",
            quantity: 22
        },
        {
            topping: "plain",
            quantity: 47
        },
        {
            topping: "chocolate",
            quantity: 96
        }
    ]
};

/* GET orders listing. */
router.get('/', function(req, res, next) {
    var myJSON = JSON.stringify(toppingsAndQuantities); //converts JSON objects to JSON strings
    res.send(myJSON);
});

/* POST orders listing. */
router.post('/', function(req, res) {
    var postJSON = JSON.stringify(toppingsAndQuantities);
    res.send(postJSON);
})

module.exports = router;