import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import { requestOptions } from './services';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            filteredResults: [],
            editUserClicked: false
        }
    }

    getUsers() {
        // Request users and set state
        axios(requestOptions)
            .then(response => {
                this.setState({
                    results: response.data.results,
                    filteredResults: response.data.results
                });
                console.log(this.state);
            })
            .catch(error => {
                console.error(error);
            });
    }

    sortAscend() {
        // Use sort() to compare first instance of last name to the next instance
        this.setState({
            results: this.state.filteredResults.sort((a, b) => (a.name.last > b.name.last) ? 1 : ((b.name.last > a.name.last) ? -1 : 0))
        });
    }

    sortDescend() {
        // Use sort() to compare first instance of last name to the next instance
        this.setState({
            results: this.state.filteredResults.sort((a, b) => (a.name.last < b.name.last) ? 1 : ((b.name.last < a.name.last) ? -1 : 0))
        });
    }

    filterUsers(e) {
        // Set variable to state.results, filter via lowercasing, and setting state with returned value
        let filteredResults = this.state.results;
        filteredResults = filteredResults.filter(user => {
            return user.name.last.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({ filteredResults: filteredResults });
    }

    editUser() {
        this.setState(prevState => ({ editUserClicked: !prevState.editUserClicked }));
    }

    render() {
        return (
            <div className="app">
                <div className="center">
                    <div className="toolbar">
                        <button onClick={this.getUsers.bind(this)} className="toolbar__button">Get New Users</button>
                        <input
                            type="text"
                            name="search"
                            className="toolbar__search"
                            placeholder="Search by last name"
                            onChange={this.filterUsers.bind(this)} />
                        <button onClick={this.sortAscend.bind(this)} className="toolbar__button">A–Z</button>
                        <button onClick={this.sortDescend.bind(this)} className="toolbar__button">Z–A</button>
                    </div>
                </div>
                <div className="grid">
                    {this.state.filteredResults.map(user => {
                        return <Card
                            key={user.login.uuid}
                            name={user.name.first + ' ' + user.name.last}
                            thumbnail={user.picture.large}
                            email={user.email}
                            phone={user.phone}
                            location={user.location.city + ', ' + user.location.state}
                            editUser={this.editUser.bind(this)}
                            editUserClicked={this.state.editUserClicked}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;
