import React from 'react';

export const Playlist = (props) => {
  return (
    <div className="playlist-button">
      <a key={props.playlist.id} href={props.playlist.external_urls.spotify} className="playlist-name">{props.playlist.name}</a>
    </div>
  )
}