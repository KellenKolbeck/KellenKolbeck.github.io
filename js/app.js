var nav = {
	init: function() {
		this.navListeners();
	},

	navListeners: function(){
		$('.nav-burger').click(function() {
			$('.nav-menu').toggleClass('nav-show');
		});
	},

	smoothScroll: function() {
		$('.smooth').on('click', function() {
	    $.smoothScroll({
	        scrollElement: $('body'),
	        scrollTarget: '#' + this.id
	    });
	    
	    return false;
		});
	},

	toTop: function() {
		$('#to-top').on('click', function() {
			$.smoothScroll({
					scrollElement: $('body'),
					scrollTarget: $('.hidden')
			});

			return false;
		});
	}
};
		
nav.init();