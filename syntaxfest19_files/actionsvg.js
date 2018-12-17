$( document ).ready(function() {



setTimeout(function(){
        $('#dep1').fadeIn();
    }, 100);    

setTimeout(function(){
        $('#dep2').fadeIn();
    }, 400);    
    
setTimeout(function(){
        $('#dep3').fadeIn();
    }, 700);   
    
setTimeout(function(){
        $('#dep4').fadeIn();
    }, 1000);    
        
setTimeout(function(){
        $('#dep5').fadeIn();
    }, 1300);    
        
setTimeout(function(){
        $('#dep6').fadeIn();
    }, 1600);           
    
  setTimeout(function(){
        $('#dep7').fadeIn();
    }, 1900);    
      

   setTimeout(function(){
        $('.labeltext').fadeIn(800);
    }, 2000);    
 
 
  setTimeout(function(){
        $('.rect').fadeIn(800);
    }, 2200);    


  setTimeout(function(){
        $('.labelbottom').fadeIn(1200);
    }, 2700);    


  setTimeout(function(){
        $('circle').fadeIn(800);
    }, 3300);  


  setTimeout(function(){
        $('.arc').fadeIn(1400);
    }, 3600);    

          
  setTimeout(function(){
        $('polygon').fadeIn(1400);
    }, 3600);    
 
    
   setTimeout(function(){
        $('.label').fadeIn(1400);
    }, 4200);    
 
/* 
 $('#dep1').hover(function(){

  	  //$(this).fadeOut(500).fadeIn(500);
      $('.dep1').toggle( "pulsate", { times:3 }, 2000 );
   $("#YourItemsId").pulsate("destroy");


});
*/

 $('#dep1').mouseover(function() {

    $('.dep1').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep1').finish();

	}); 

 $('#rect1').mouseover(function() {

    $('.dep1').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep1').finish();

	}); 	

 $('#dep2').hover(function(){

    $('.dep2').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep2').finish();
	
});

 $('#rect2').hover(function(){

    $('.dep2').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep2').finish();
	
});

 $('#dep3').hover(function(){

    $('.dep3').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep3').finish();
	
 });

 $('#rect3').hover(function(){

    $('.dep3').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep3').finish();
	
 });
 
 $('#dep4').hover(function(){

    $('.dep4').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep4').finish();
	 

 });

 $('#rect4').hover(function(){

    $('.dep4').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep4').finish();
	 

 });
 
 $('#dep5').hover(function(){

    $('.dep5').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep5').finish();
	 

 }); 

 $('#rect5').hover(function(){

    $('.dep5').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep5').finish();
	 

 }); 
 
 $('#dep6').hover(function(){

    $('.dep6').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep6').finish();
	 

 });

 $('#rect6').hover(function(){

    $('.dep6').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep6').finish();
	 

 }); 
 
 $('#dep7').hover(function(){

    $('.dep7').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep7').finish();
	
 });  
 
 $('#rect7').hover(function(){

    $('.dep7').effect( "pulsate", { times:3 }, 2000 );

	}).mouseout(function() {

    $('.dep7').finish();
	
 });  
  
})