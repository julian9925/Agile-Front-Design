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
        $("#toggle").toggleClass("on");
        $("#menu").toggleClass("on");
        if (flag) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
        flag = !flag;
    }
});