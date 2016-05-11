$(document).ready(function(){
	$('#top_menu').on('click', function(){
		$('.var-menu').toggleClass('show');
			});
	$('.outer > li').on('click', function(){
		$(this).find('.inner').css('display', 'block');
			});
		});