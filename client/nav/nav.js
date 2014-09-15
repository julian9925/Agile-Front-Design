Template.nav.events({
    'click .nav > a': function(event) {
    	console.log('nav click');
    	console.log(event.target);
    	
    	console.log(event.target.className);
    	var mynum=event.target.className;
    	mynum=mynum.replace('nav','');
    	console.log(mynum);

    	$(window).scrollTop($('#pageTwo').offset().top); 
    	console.log($('#pageTwo').offset().top);
		console.log('nav click2');

    }
});

Template.nav.rendered = function () {
	var anchors = $('.nav > a');
	var currentIndex = 0;
	$(window).on('scroll', function(event) {
	    var jqThis = $(this);
	    var index = Math.round(jqThis.scrollTop() / this.innerHeight);

	    // console.log("on scroll");
	    if(currentIndex === index) {
	    	return;
	    }

        player[index != 0 ? "pauseVideo" : "playVideo"]();

	    // console.log("page change");
    	anchors.removeClass("active");
    	anchors.eq(index).addClass("active");
    	currentIndex = index;
	});
};