Template.nav.events({
    'click .nav > a': function(event) {
        $(event.target).siblings().removeClass('active');
        $(event.target).addClass('active');
        //$(this).siblings().removeClass('active');            
        console.log('i am here', $(event.target));  
    }

});