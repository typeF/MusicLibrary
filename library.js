/*
You will need to implement the following functions:

printPlaylists
printTracks
printPlaylist
addTrackToPlaylist
addTrack
addPlaylist
printSearchResults (stretch)
*/

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
// console.log(library.playlists[1]);
var numTracks = 0;

for (var playlistID in library.playlists){
  var playlist = library.playlists[playlistID];
  // console.log(playlistID);
  // console.log(playlist.name);
  console.log(playlistID + " " + playlist.name + " - " + playlist.tracks.length + " tracks");
  }
}
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var tracks in library.tracks){
    var trackNum = library.tracks[tracks];
    console.log(tracks + ": " + trackNum.name + " by " + trackNum.artist + " (" + trackNum.album + ")");
  }
}
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  playlistSelect = playlistId;
  trackSelection = library.playlists[playlistSelect];
  console.log(trackSelection.id + ": " + trackSelection.name + " - " + trackSelection.tracks.length + " tracks");
  trackId = trackSelection.tracks;
  //console.log(trackId);
  for (var i = 0; i < trackId.length; i++){
    var track = trackId[i];
    var trackInfo = library.tracks[track];
    console.log(track + ": " + trackInfo.name + " by " + trackInfo.artist + " (" + trackInfo.album + ")");
  }

  // library.tracks[trackid].all other info
// print out play list ID, name, # of tracks
// iterate through and obtain all teh track numbers
// using the track number generate the track information
  // for (var tracks in trackSelection){
  //   var trackNum = trackSelection.name;
  //   console.log(tracks + ": " + trackNum.name + " by " + trackNum.artist + " (" + trackNum.album + ")");
  // }

}
printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
    playlistAdd = playlistId;
    trackAdd = trackId;
    library.playlists[playlistAdd].tracks.push(trackAdd);
    //console.log(library.playlists[playlistAdd].tracks);
/* get playlistID length, find last position, assign
   new track ID to last position
   add track 3 to playlist 1
*/


//
}

addTrackToPlaylist("t01", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  libtracks = library.tracks;
console.log(libtracks[2]);
// trackNum =
library.tracks[uid()] = {
  id: uid(),
  name: name,
  artist: artist,
  album: album
  };
  console.log(library.tracks);
}
addTrack("New Name is", "New artist is", "New album is");

// adds a playlist to the library

var addPlaylist = function (name) {
library.playlists[uid()] = {
  id: uid(),
  name: name,
  tracks: []
  };
  console.log(library.playlists);
}
addPlaylist("New Playlist #1");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  for (var tracks in library.tracks){
      var trackNum = library.tracks[tracks];

      string = trackNum.name;
      var result = string.search(query);
      if (result > -1){
        console.log("Found result: " + trackNum.name);
        console.log(trackNum);
      }

      string = trackNum.artist;
      var result = string.search(query);
      if (result > -1){
        console.log("Found result: " + trackNum.artist);
        console.log(trackNum);
      }

      string = trackNum.album;
      var result = string.search(query);
      if (result > -1){
        console.log("Found result: " + trackNum.album);
        console.log(trackNum);
      }

  }
}
printSearchResults("James");

/*
for (var tracks in library.tracks){
    var trackNum = library.tracks[tracks];
    console.log(tracks + ": " + trackNum.name + " by " + trackNum.artist + " (" + trackNum.album + ")");
  }

  */