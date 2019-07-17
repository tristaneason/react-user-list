import React from 'react';
import './Card.css';

const Card = props => {
    return <div className="card">
        {!props.editUserClicked ?
            (<i className="fas fa-user-edit card__edit" onClick={props.editUser}></i>) :
            (<i className="fas fa-save card__edit" onClick={props.editUser}></i>)
        }
        {!props.editUserClicked ?
            (<span className="card__name">{props.name}</span>) :
            (<input className="card__textbox--large capitalize" type="text" value={props.name} onChange={() => {}} />)
        }
        <img src={props.thumbnail} className="card__thumbnail" alt="Thumbnail" />
        {!props.editUserClicked ?
            (<span className="card__email">{props.email}</span>) :
            (<input className="card__textbox wide" type="text" value={props.email} onChange={() => {}} />)
        }
        {!props.editUserClicked ?
            (<span className="card__phone">{props.phone}</span>) :
            (<input className="card__textbox" type="text" value={props.phone} onChange={() => {}} />)
        }
        {!props.editUserClicked ?
            (<span className="card__location">{props.location}</span>) :
            (<input className="card__textbox capitalize wide" type="text" value={props.location} onChange={() => {}} />)
        }
    </div>
}

export default Card;
