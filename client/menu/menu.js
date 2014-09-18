
// true if video is playing, false if video is paused.
isVideoPause = false;

Template.menu.events({
    // Use template click event to handle video scale / show menu
    "click #toggle": function (e) {
        // Menu button, fade in menu
        $("#toggle").toggleClass("on", 1000);
        $("#menu").toggleClass("on", 1000);
        if (isVideoPause) {
            // if the video is playing, pause it.
            $("#player").stop().animate({transform: "scale(.7, .7)", opacity: "0.3"});
            player.pauseVideo();
        } else {
            // if the video is paused, play it.
            $("#player").stop().animate({transform: "scale(1, 1)", opacity: "0.7"});
            player.playVideo();
        }
        isVideoPause = !isVideoPause;
    }
});