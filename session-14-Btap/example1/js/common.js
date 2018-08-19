$(document).ready(function(){
    $("#yes, #no").click(function(){
        alert("Hallelujah... You're home !!!");
    });
    
    $("#no").hover(function(){
        $(this).text("Có");
        }, function(){
        $(this).text("Không");
    });
});
 

