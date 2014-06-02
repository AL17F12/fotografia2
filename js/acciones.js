// JavaScript Document
var panel='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"> <div class="panel-content" align="center"><img src="imagenes/la.jpg" width="200" height="110"><div data-role="controlgroup"><a data-role="button" href="#page"> Pagina Principal </a><a data-role="button" href="#page2"> Fotografia Artistica </a> <a data-role="button" href="#page3"> Arte y Fotografia </a> <a data-role="button" href="#page4"> Frases celebre </a> <a data-role="button" href="#Galeria"> Galeria </a></div></div></div>';
	
	$(document).on('pagebeforecreate','[data-role=page]',function(){
		
		if ($(this).find('[data-role=panel]').length === 0)
		{
			$('[data-role=header]').before(panel);
			
			}
		});//before create
		
		
$(document).ready(function(e) {
	
	 $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	
	 $("#camara")[0].play();	
	 $.mobile.navigate( "#page" );
	});
	
	
 document.addEventListener("deviceready",function(){
  $('#cam').tap(function(){
    navigator.notification.vibrate(500);
  });
  $('#cam').tap(function(){
    navigator.notification.beep(2);
  });
 },false); //deviceready
}); //document ready
