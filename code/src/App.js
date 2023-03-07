import React from 'react';
import data from './data.json';
import { Album } from './components/Album'

export const App = () => {
  return (
    <>
      {data.albums.items.map((items) => {
        return (
          <Album key={items.id} album={items} />
        )
      })}
    </>
  )
};
