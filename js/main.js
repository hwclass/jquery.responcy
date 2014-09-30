$(document).ready(function () {
	
	$('#spaceImage').responcy();

	$(window).resize(function() {
		$('#spaceImage').responcy({
			small : 600,
			medium : 1100,
			large : 1920
		});
	});

});