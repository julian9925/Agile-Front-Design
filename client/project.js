$(window).on('scroll', function(event) {
    var jqThis = $(this);
    // console.log('page: ', jqThis.scrollTop() / this.innerHeight);
    var index = parseInt(jqThis.scrollTop() / this.innerHeight, 10);
    $('.nav a').removeClass('active');
    $('.nav a:nth-child('+(index+1)+')').addClass('active');
});