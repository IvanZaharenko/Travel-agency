<script>
	jQuery(function($) {
		var $toup = $('.up');
		var body = $('html, body');
		
		$(window).scroll(function(){
		
		
			if($(window).scrollTop()>1000){
				$toup.fadeIn(300);
			}
			else if ($(window).scrollTop()<1000){
				$toup.hide();
			}
		});
		
		$toup.on('click', function(e) {
			e.preventDefault();
			body.animate({scrollTop:0}, 600, 'swing');
		});
	});
</script>

