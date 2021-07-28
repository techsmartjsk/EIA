$(document).ready(function(){
    $("#right").click(function(){
        if($("#sidebar-left").css('display')=='none'){
            $("#sidebar-left").css('display','flex');
            $("#right").css('margin-right','170px');
        }else{
            $("#sidebar-left").css('display','none');
            $("#right").css('margin-right','30px');
        }
    });

    $("#left").click(function(){
        if($("#sidebar-right").css('display')=='none'){
            $("#sidebar-right").css('display','block');
            $("#left").css('margin-left','370px');
        }else{
            $("#sidebar-right").css('display','none');
            $("#left").css('margin-left','30px');
        }
    });
});


