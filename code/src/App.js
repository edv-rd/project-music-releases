import React from 'react';
import data from './data.json';
import { Album } from './components/Album'

export const App = () => {
  return (
    <div className="main-container">
      <h1>New albums</h1>
      <hr />
      <div className="albums-container">
        {data.albums.items.filter((item) => item.album_type === 'album').map((items) => {
          return (
            <Album key={items.id} album={items} />
          )
        })}
      </div>
      <h1>New singles / EPs</h1>
      <hr />
      <div className="albums-container">
        {data.albums.items.filter((item) => item.album_type === 'single').map((items) => {
          return (
            <Album key={items.id} album={items} />
          )
        })}
      </div>
    </div>
  )
};
