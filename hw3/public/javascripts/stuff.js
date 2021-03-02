//  Jarren Calizo
//  JavaScript Code Found Here
$(document).ready(function(){
    // Modification #1
    $('#orderButton').click(function(){
        if($('#textBox').val().indexOf('vegan') != -1) {
            alert('IMPORTANT: Our Cheesecakes Contain Dairy. Order Denied');
        }
        else {
            $('.formSection').hide();
            var usersTopping = $('input[name="flavor"]:checked').attr("id");
            var usersQuantity = $('#numOfCheesecakes option:selected').val();
            var usersNotes = $('#textBox').val();
            if (usersQuantity == 1) {
                $('#thankYouMessage').html('Thank you!  Your order has been placed. <br />' + 
                "<ul> <li>" + usersQuantity + " " + usersTopping + 
                " cheesecake </li> <li> Order Details: " + usersNotes + "</li>");
            }
            else {
                $('#thankYouMessage').html('Thank you!  Your order has been placed. <br />' + 
                "<ul> <li>"+ usersQuantity + " " + usersTopping + 
                " cheesecakes </li> <li> Order Details: " + usersNotes + "</li>");
            }
        }
    });
    // Modification #2 - Remodified HW #4
    $(".dropdown-content a").click(function(){
        var changeMonth = $(this).text(); //stores selected month in a variable
        $('#monthAdjust').html(changeMonth); //change button to stored selected month

        $.post('http://localhost:3000/orders', function(orderData){ //read in postJSON in orders.js
            var orderByMonth = JSON.parse(orderData); //converts JSON strings to JSON objects

            //populate each month's data with orders.js's array from JSON Objects Form
            $("#listCherry").html(orderByMonth.data[0].quantity + " " + orderByMonth.data[0].topping);
            $("#listChocolate").html(orderByMonth.data[2].quantity + " " + orderByMonth.data[2].topping);
            $("#listPlain").html(orderByMonth.data[1].quantity + " " + orderByMonth.data[1].topping);
        });
    });
    
});