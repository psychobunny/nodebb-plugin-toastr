"use strict";

$(document).ready(function() {

	app.alert = function (params) {
		params.title = params.title || '';
		params.location = params.location || 'right-top';
		params.type = params.type || 'info';

		toastr.options = {
			"closeButton": false,
			"debug": false,
			"positionClass": "toast-" + params.location,
			"onclick": params.onclick,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": params.timeout,
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		};

		translator.translate(params.message, function(translatedHTML) {
			toastr[params.type](translatedHTML);
			$('.toast-right-top, .toast-left-top').css('top', $('#content').offset().top + 15);
		});
		
	};
});