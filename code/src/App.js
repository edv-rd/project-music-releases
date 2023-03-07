import React from 'react';
import data from './data.json';
import { Album } from './components/Album';
import { Artist } from './components/Artist';

export const App = () => {
  return (
    <>
      {data.albums.items.map((items) => {
        return (
          <>
            <Album key={items.id} album={items} />
            <Artist artist={items.artists[0].name} />
          </>
        )
      })}
    </>
  )
};
