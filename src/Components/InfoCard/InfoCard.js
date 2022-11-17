import React from 'react';

const InfoCard = ({ card }) => {
  const { name, description, bgClass, icon } = card;
  return (
    <div>
      <div className={`card lg:max-h-40 text-white px-5 pb-5 pt-10 lg:pt-3 md:card-side shadow-xl ${bgClass}`}>
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
