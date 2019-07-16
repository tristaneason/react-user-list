import React from 'react';
import './Card.css';

const Card = ({
    name,
    thumbnail,
    email,
    phone,
    location
}) => {
    return <div className="card">
        <i className="fas fa-user-edit card__edit"></i>
        <span className="card__name">{name}</span>
        <img src={thumbnail} className="card__thumbnail" alt="Thumbnail" />
        <span className="card__email">{email}</span>
        <span className="card__phone">{phone}</span>
        <span className="card__location">{location}</span>
    </div>
}

export default Card;
