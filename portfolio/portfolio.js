$(document).ready(function(){
	$(window).scroll(function(){
		$('.portModule').each(function(i){
			var btm_obj=$(this).offset().top + $(this).outerHeight();
			var btm_win=$(window).scrollTop() + $(window).height();
			if(btm_obj>btm_win){
				$(this).delay(500*(i+1)).animate({'opacity':'1'},(500));
			}
		});
	});
});