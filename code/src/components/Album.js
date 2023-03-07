import React from 'react';

export const Album = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.album.name}</h1>
      <img src={props.album.images[0].url} alt="albumcover" />
    </>
  )
};