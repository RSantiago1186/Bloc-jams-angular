(function () {
  function SongPlayer() {
    var SongPlayer = {};
    var currentSong = null;
    var currentBuzzObject = null;
    /**
     * @function setSong
     * @desc Stops currently playing song and loads new audio file as currentBuzzObject
     * @param {Object} song
     * @returns function
     */
    var setSong = function (song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = false;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      currentSong = song;
    };
    /**
     * @function play
     * @desc Checks if a song is playing and plays a new song using currentBuzzObject
     * @param {Object} song
     */
    SongPlayer.play = function (song) {
      if (currentSong !== song) {
        setSong(song);
      } else if (currentSong === song) {
        if (currentBuzzObject.isPaused()) {
            currentBuzzObject.play();
        }
      }
    };
    /**
     * @function pause
     * @desc Checks if a song is currently playing and pauses it
     * @param {Object} song
     */
    SongPlayer.pause = function (song) {
      song.playing = false;
      currentBuzzObject.pause();
    };
    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
