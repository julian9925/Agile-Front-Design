Template.nav.events({
    'click .nav > a': function(event) {
        $(event.target).siblings().removeClass('active');
        $(event.target).addClass('active');
    }
});

Template.nav.rendered = function () {
	
	var anchors = $('.nav > a');

	$(window).on('scroll', function(event) {

	    var jqThis = $(this);
	    var index = Math.round(jqThis.scrollTop() / this.innerHeight);

	    anchors.removeClass("active");
	    anchors.eq(index).addClass("active");
	});
};