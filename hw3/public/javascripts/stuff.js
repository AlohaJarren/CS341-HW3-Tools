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
    // Modification #2
    $('#Jan').on('click', function() {
        $('#monthAdjust').html('Jan');
    });

    $('#Feb').on('click', function() {
        $('#monthAdjust').html('Feb');
    });

    $('#Mar').on('click', function() {
        $('#monthAdjust').html('Mar');
    });

    $('#Apr').on('click', function() {
        $('#monthAdjust').html('Apr');
    });

    $('#May').on('click', function() {
        $('#monthAdjust').html('May');
    });

    $('#Jun').on('click', function() {
        $('#monthAdjust').html('Jun');
    });

    $('#Jul').on('click', function() {
        $('#monthAdjust').html('Jul');
    });

    $('#Aug').on('click', function() {
        $('#monthAdjust').html('Aug');
    });

    $('#Sep').on('click', function() {
        $('#monthAdjust').html('Sep');
    });

    $('#Oct').on('click', function() {
        $('#monthAdjust').html('Oct');
    });

    $('#Nov').on('click', function() {
        $('#monthAdjust').html('Nov');
    });

    $('#Dec').on('click', function() {
        $('#monthAdjust').html('Dec');
    });
});