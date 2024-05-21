import React from 'react';

const Card = ({ item }) => {
  return (
    <div className='card-wrapper'>
      {item}
      {item.type === 'video' ? (
        <video
          poster={item.img}
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
          src={`${item.url}#t=1`}
        ></video>
      ) : (
        <img alt='project poster' src={require(item.img)} />
      )}
    </div>
  );
};

export default Card;
