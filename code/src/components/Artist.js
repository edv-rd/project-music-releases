import React from 'react';

export const Artist = (props) => {
  console.log(props)
  return (
    <a href={props.artist[0].external_urls.spotify} className="artist-name">{props.artist[0].name}</a>
  )
}