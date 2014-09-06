/*$(".menu-trigger").click(function() {
  $(this).toggleClass("after");
  //$("#menu").slideToggle();
});
*/
/*if(Meteor.isClient)
{
  $(document).ready(function(){
    $("#toggle").click(function() {
      $(this).toggleClass("on");
      //$(this).show("#menu", { direction: "left" }, 1000);

      $("#menu").toggleClass("on");
    });
  });  
}*/

flag = true;

Template.menu.events({
    "click #toggle": function (e) {
        $("#toggle").toggleClass("on", 1000);
        $("#menu").toggleClass("on", 1000);
        if (flag) {
            $("#player").animate({transform: "scale(.7, .7)", opacity: "0.3"});
            player.pauseVideo();
        } else {
            $("#player").animate({transform: "scale(1.25, 1.25)", opacity: "0.7"});
            player.playVideo();
        }
        flag = !flag;
    }
});