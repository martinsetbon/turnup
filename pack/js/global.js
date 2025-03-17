$(function(){
    $('#centre').on('click',function(){
        $('#popup').css({'display':'block'})
    })

    $('#popup').on('click',function(){
        $(this).css({'display':'none'})
    })

});