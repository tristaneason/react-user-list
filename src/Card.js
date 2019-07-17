import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            thumbnail: this.props.thumbnail,
            email: this.props.email,
            phone: this.props.phone,
            location: this.props.location,
            editUserClicked: false
        }
    }

    invokeEditUser() {
        this.setState(prevState => ({ editUserClicked: !prevState.editUserClicked }));
    }

    editUser(key, value) {
        this.setState({ [key]: value });
        console.log(this.state);
    }

    render() {
        const { state } = this;
        return <div className="card">
            {!state.editUserClicked ?
                (<i className="fas fa-user-edit card__edit" onClick={this.invokeEditUser.bind(this)}></i>) :
                (<i className="fas fa-save card__edit" onClick={this.invokeEditUser.bind(this)}></i>)
            }
            {!state.editUserClicked ?
                (<span className="card__name">{state.name}</span>) :
                (
                    <input
                        className="card__textbox--large capitalize"
                        type="text"
                        value={state.name}
                        onChange={e => this.editUser('name', e.target.value)} />
                )
            }
            <img src={state.thumbnail} className="card__thumbnail" alt="Thumbnail" />
            {!state.editUserClicked ?
                (<span className="card__email">{state.email}</span>) :
                (
                    <input
                        className="card__textbox wide"
                        type="text"
                        value={state.email}
                        onChange={e => this.editUser('email', e.target.value)} />
                )
            }
            {!state.editUserClicked ?
                (<span className="card__phone">{state.phone}</span>) :
                (
                    <input
                        className="card__textbox"
                        type="text"
                        value={state.phone}
                        onChange={e => this.editUser('phone', e.target.value)} />
                )
            }
            {!state.editUserClicked ?
                (<span className="card__location">{state.location}</span>) :
                (
                    <input
                        className="card__textbox capitalize wide"
                        type="text"
                        value={state.location}
                        onChange={e => this.editUser('location', e.target.value)} />
                )
            }
        </div>
    }
}

export default Card;
