$(document).ready(function() {

	$(window).on('scroll', function() {
		var	scrollTop = $(window).scrollTop(),
			docHeight = $(document).height(),
			winHeight = $(window).innerHeight(),
			projContentHeight = $('#project-content').height(),
			driftHeight = $('#drifting').height();
		
		var scrollPercent = Math.floor(((scrollTop - projContentHeight) / (driftHeight - 653))*100);

		console.clear();
		console.log("scroll top: " + scrollTop);
		console.log("doc height: " + docHeight);
		console.log("win height: " + winHeight);
		console.log("project content height: " + projContentHeight);
		console.log("drifting height: " + driftHeight);
		console.log(scrollPercent);

		function showScroll() {
			if (scrollTop < projContentHeight) {
				$("#drift-scroll").hide();
			}
			else if (scrollPercent > 100) {
				scrollPercent = 100;
				$('#scrollPercentLabel').text(scrollPercent);
				$('#drift-scroll').show();
			}
			else {
				$('#scrollPercentLabel').text(scrollPercent);
				$('#drift-scroll').show();
			}
		};
		showScroll();
	});
	
	$("#drift-scroll").hide();
	$(".drift-data").hide();
	$("#drifting").on('mouseenter', '.drift-img', function(){
		$(this).find('.drift-data').show();
	});
	$("#drifting").on('mouseleave', '.drift-img', function(){
		$(this).find('.drift-data').fadeOut(3000);
	})
});