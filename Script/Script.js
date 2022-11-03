function openNav(){
        let close =  document.querySelector(".close");
        let margin = document.querySelector(".resume");
     addEventListener("click", function(click){
    if(click){
        close.style.marginRight = "0px";
        margin.style.marginLeft = "0px";
    };
        });
    };

    function closeNav(){
        let close =  document.querySelector(".close");
       let margin = document.querySelector(".resume");
     addEventListener("click", function(click){
    if(click){
        close.style.marginRight = "-200px";
        margin.style.marginLeft = "200px";
    };
   
        });
    };
    



