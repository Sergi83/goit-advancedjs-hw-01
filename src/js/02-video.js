// import vimeo and throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// get tag with video player
const video = document.querySelector('iframe');

//
const player = new Player(video);

// create key for local storage
const LS_KEY = 'videoplayer-current-time';

// add time in seconds to local storage
const addTimeToLS = time => {
  // seconds = the current playback position
  localStorage.setItem(LS_KEY, time.seconds);
};

// update time in local storage every second
player.on('timeupdate', throttle(addTimeToLS, 1000));

// set time where video stoped when you open new tab or restart browser, add condition for default state when loading (without the condition get error in console)
player.setCurrentTime(localStorage.getItem(LS_KEY) || 0);
