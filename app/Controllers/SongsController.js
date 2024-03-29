import store from "../store.js";
import SongService from "../Services/SongsService.js";
//Private
/**Draws the Search results to the page */
function _drawResults() {
  let template = ''
  let songs = store.State.songs;
  songs.forEach(song => template += song.Template);
  document.querySelector("#songs").innerHTML = template
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let template = ''
  let playlists = store.State.playlist;
  playlists.forEach(playlist => template += playlist.playlistTemplate)
  document.querySelector("#playlist").innerHTML = template
}
function _drawSongPreview() {

}
function _drawPlaylistPreview() {

}
//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your subscribers
    store.subscribe("songs", _drawResults)
    store.subscribe("playlist", _drawPlaylist)
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {
    SongService.addSong(id)
    _drawPlaylist()
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
    SongService.removeSong(id);
    _drawPlaylist()
  }
  songPreview(id) {
    let song = store.State.songs.find(s => s._id == id);
    document.getElementById('preview').innerHTML = song.Template + song.previewTemplate
  }
  playlistPreview(id) {
    let playlists = store.State.playlist.find(p => p._id == id);
    document.getElementById('preview').innerHTML = playlists.playlistTemplate + playlists.previewTemplate
  }
}
