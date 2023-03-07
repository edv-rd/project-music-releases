import React from 'react';
import { Artist } from './Artist';

export const Album = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.album.name}</h1>
      <img src={props.album.images[0].url} alt="album-cover" />
      <Artist artist={props.artists} />
    </>
  )
};