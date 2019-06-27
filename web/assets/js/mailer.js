jQuery(document).ready(function ($) {
    $( "#whitelist_reg" ).click(function(event) {
        event.preventDefault();
		console.log( "start" );
	
        $.ajax({
            url : "https://lohncontrol.com/php/contact.php",
            type : 'POST',
            data: {
                'name' : $('#name').val(),
                'email' : $('#email').val(),
                'country' :  $('#country').val()
            },
            dataType:"JSON",
            success : function(response) {
console.dir(response);  
                if (response.err) {
                    console.log( "err" );
                    $( "#whitelist_msg" ).css("color",'red');
                    msg = 'Error! Please retry later!';
                } else {
                    $( "#whitelist_msg" ).css("color",'#315db7');
                    msg = 'You are registered successfully to whitelist!';
                }
                $( "#whitelist_msg" ).html(msg);
                $( "#whitelist_msg" ).show('slow');
            }
        });
    });
});