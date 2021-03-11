window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js'),
		modal = require('../parts/modal.js'),
		ajax = require('../parts/ajax.js'),
		slider = require('../parts/slider.js'),
		calc = require('../parts/calc.js'),
		timer = require('../parts/timer.js');

	tab();
	modal();
	ajax();
	slider();
	calc();
	timer();
	
});