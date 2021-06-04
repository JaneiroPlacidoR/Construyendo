

$(document).ready(function(){
////
    var html=document.getElementsByClassName("center")[0];
    document.addEventListener("wheel",function(){

    var scrtop=html.scrollTop;
    // console.log(scrtop);

    if(scrtop>160){
        $("#towel").css( "transform", "rotate(0deg)")
        .css( "transition", "all 1s")
        .css( "margin-top", "-50px");
    }else if(scrtop<=160){
        $("#towel").css( "transform", "rotate(15deg)")
        .css( "transition", "all 1s")
        .css( "margin-top", "-50px");
    }
    
                      
  });
 
 
});
