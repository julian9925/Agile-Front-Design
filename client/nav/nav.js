Template.nav.events({
    'click .nav > a': function(event) {
    	var mynum = event.target.className;
    	mynum = mynum.replace('nav','');

    	$('body, html').animate({
            scrollTop: window.innerHeight * (mynum - 1)
        }, 300); 
        event.preventDefault();
    }
});

Template.nav.rendered = function () {
	var anchors = $('.nav > a');
	var currentIndex = null;
    var jqLogo = $('.logo');
	$(window).on('scroll', function(event) {
	    var jqThis = $(this);
	    var index = Math.round(jqThis.scrollTop() / this.innerHeight);

	    // console.log("on scroll");
	    if(currentIndex === index) {
	    	return;
	    }

        isVideoPause = index > 0;

        player[index != 0 ? "pauseVideo" : "playVideo"]();

	    // console.log("page change");
    	anchors.removeClass("active");
    	anchors.eq(index).addClass("active");
        jqLogo.removeClass('current' + currentIndex).addClass('current' + index);
    	currentIndex = index;
	});
};