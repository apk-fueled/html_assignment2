var Site = {
	init : function() {
		this.tabs();
	},

	tabs : function() {
		var tabs = $('#secondary > .tabs'),
			uls = tabs.find('> ul'),
			tabHeadings = tabs.prev('#tabHeadings');


			tabs.find('h4').remove();

			uls.not(':first').hide();


		// listen for heading clicks
		tabHeadings
			.delegate('li', 'click', function(e) {
				var li = $(this),
					hash;

					// change the selected class to the selected one
					li
						.siblings()
							.removeClass('selected')
						.end()
						.addClass('selected');

					// grab the hash of anchor
					hash = li.children('a').attr('href');

					// show correspondong sections
					uls.hide().filter(hash).show();

					e.preventDefault();
			});
	}
}

Site.init();