$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.05);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px' /*sin el guion - hace el efecto al reves  */
		});

	});

});