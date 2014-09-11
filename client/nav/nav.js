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
	    var index = parseInt(jqThis.scrollTop() / this.innerHeight, 10);

	    anchors.removeClass("active");
	    anchors.eq(index).addClass("active");
	});
};