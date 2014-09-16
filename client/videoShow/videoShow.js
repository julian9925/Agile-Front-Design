
////////////////// YOUTUBE IFRAME API //////////////////
if (!window['YT']) {YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.id = 'www-widgetapi-script';a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vfle2r0X0/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}
////////////////////////////////////////////////////////

if (Meteor.isClient) {

	Template.videoShow.rendered = function () {
		onYouTubeIframeAPIReady = function() {
			console.log("Youtube api ready");
			player = new YT.Player('player', {
				height: '195',
				width: '260',
				videoId: 'ErQ6tNEFulg',
				playerVars: {
					controls: 0, 
					showinfo: 0,
					autoplay: 1
				}, 
				events: {
					'onReady': function (event) {
						event.target.mute();
					},
					'onStateChange': onPlayerStateChange
				}
			});
		}   
	};


	///////////////////////////////////////////////////////////////////////////////////
	// Thanks to someone who wrote this in http://jsfiddle.net/hnkK7/
	// Pause video after X seconds
	var stopPlayAt = 44;
	var stopPlayTimer = null;

	function onPlayerStateChange(event) {
		var time, rate, remainingTime;
		clearTimeout(stopPlayTimer);
		if (event.data == YT.PlayerState.PLAYING) {
			time = player.getCurrentTime();
			// Add .4 of a second to the time in case it's close to the current time
			// (The API kept returning ~9.7 when hitting play after stopping at 10s)
			if (time + .4 < stopPlayAt) {
				rate = player.getPlaybackRate();
				remainingTime = (stopPlayAt - time) / rate;
				stopPlayTimer = setTimeout(pauseAndPlay, remainingTime * 1000);
			}
		}
	}
	function pauseAndPlay() {
		player.pauseVideo();
		// Pause 0.5 seconds, then go to 0 seconds
		setTimeout(function () {
			player.seekTo(0, true);
			player.playVideo();
		}, 500);
	}
	////////////////////////////////////////////////////////////////////////////////////
}