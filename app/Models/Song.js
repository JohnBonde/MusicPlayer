export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <img src="${this.albumArt}" alt="">
    <h1>${this.title}</h1>
    <h4>${this.artist} - ${this.album}</h4>
    <h3>$${this.price}</h3>
    <div class="row">
    <div class="col"
    <audio controls id="music">
    <source src="${this.preview}" type="audio/mp3">
    </audio>
    </div>
    </div>
    <div class="row">
    <div class="col"
    <button type="button" class="btn btn-primary" onclick="app.songsController.addSong('${this._id}')">Add</button>
    </div>
    </div>
    <br></br>
        `;
  }

  get playlistTemplate() {
    return `
    <img src="${this.albumArt}" alt="">
    <h1>${this.title}</h1>
    <h4>${this.artist} - ${this.album}</h4>
    <h3>$${this.price}</h3>
    <div class="row">
    <div class="col">
    <audio controls id="music">
    <source src="${this.preview}" type="audio/mp3">
    </audio>
    </div>
    </div>
    <div class="row">
    <div class="col">
    <button type="button" class="btn btn-danger" onclick="app.songsController.removeSong('${this._id}')">Delete</button>
    </div>
    </div>
    <br></br>
        `;
  }
}
