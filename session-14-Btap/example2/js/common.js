$('#closer').click(function(){
	  
		$('.boy').animate({left:'450px'},2000);
    	$('.girl').animate({right:'250px'},2000);
	
});
$('#flower').click(function(){
		$('.flow').attr('src','img/flower.jpg');
		$('.boy').animate({left:'380px'},2000);
    	$('.girl').animate({right:'165px'},2000);
}); 