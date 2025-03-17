
// Set the date we're counting down to
var countDownDate = new Date("may 19, 2021 18:20:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$(function(){
    var i=true;
    $('#burger').on('click',function(){
        if(i==true){
            $('#menu-deroulant').slideDown(500);
            i=false;
        }else{
            $('#menu-deroulant').slideUp(500);
            i=true;
        }
    });

    $("video").prop('muted', true);

    $("#audio").click( function (){
        if( $("video").prop('muted') ) {
            $("video").prop('muted', false);
            $(this).attr('src','images/audiooff.png');
        } else {
            $("video").prop('muted', true);
            $(this).attr('src','images/audioon.png');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400 ) {
            $('#logo-mini').fadeIn(500);
        } else {
            $('#logo-mini').fadeOut(500);
        }

    });
});




