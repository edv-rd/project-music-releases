import React from 'react';

// delimiter code from https://stackoverflowteams.com/c/technigo/questions/2239
const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return ' & ';
  } else if (index < length - 2) {
    return ', ';
  }
};

export const Artist = (props) => {
  return (
    <span style={{ color: '#a0a0a0' }}>
      {/* looping through array of artist names} */}
      {props.artist.map((items, index) => {
        return (
          <>
            <a key={items.id} href={items.external_urls.spotify} className="artist-name">{items.name}</a>
            {generateDelimiter(index, props.artist.length)}
          </>
        )
      })}
    </span>
  )
};