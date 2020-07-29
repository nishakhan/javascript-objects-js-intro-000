var playlist = { artistName: "songTitle" }

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [Slowdive]: songTitle }, { [My Bloody Valentine]: songTitle }, { [Phil Ochs]: songTitle })
}
