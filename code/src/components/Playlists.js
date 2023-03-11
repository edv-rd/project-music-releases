import React from 'react';
import { Playlist } from './Playlist'

export const Playlists = (props) => {
  return (
    <div className="playlists">
      <h1>Playlists</h1>
      <hr />
      {props.data.playlists.items.map((playlist) => {
        return (
          <Playlist playlist={playlist} />
        )
      })}
    </div>
  )
}