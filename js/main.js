$(document).ready(function () {

	$('#spaceImage, #spaceImage2').responcy();

	$(window).resize(function() {
		$('#spaceImage, #spaceImage2').responcy({
			small : 600,
			medium : 1100,
			large : 1920
		});
	});

});
