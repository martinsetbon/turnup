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
    $('#lineupdrake').on('click',function(){
        $('#popup').css({'display':'block'});
    })
    $('#popup').on('click',function(){
        $('#popup').css({'display':'none'});
    })
});
