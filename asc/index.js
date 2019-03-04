document.addEventListener('DOMContentLoaded', function() {
	// load slider elements
	var sliders = document.querySelectorAll('.slider');
	var options = {
		height: 600,
		interval: 1500
	}
	M.Slider.init(sliders, options);
});