$(document).ready(function(){
  $(".hamburger, .close").click(function(e) {
		$("nav ul").toggleClass("open-nav");
		e.preventDefault();
	})
});
