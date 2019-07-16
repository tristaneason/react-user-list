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
            filteredResults: []
        }
    }

    getUsers() {
        axios(requestOptions)
            .then(response => {
                console.log(response.data.results);
                this.setState({ results: response.data.results });
                console.log(this.state);
            })
            .catch(error => {
                console.error(error);
            });
    }

    sortAscend() {
        this.setState({
            results: this.state.results.sort((a, b) => (a.name.last > b.name.last) ? 1 : ((b.name.last > a.name.last) ? -1 : 0))
        });
    }

    sortDescend() {
        this.setState({
            results: this.state.results.sort((a, b) => (a.name.last < b.name.last) ? 1 : ((b.name.last < a.name.last) ? -1 : 0))
        });
    }

    filterUsers(e) {
        let filteredResults = this.state.results;
        filteredResults = filteredResults.filter(user => {
            return user.name.last.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({ results: filteredResults });
    }

    render() {
        return (
            <div className="app">
                <div className="center">
                    <div className="toolbar">
                        <button onClick={() => this.getUsers()} className="toolbar__button">Get New Users</button>
                        <input
                            type="text"
                            name="search"
                            className="toolbar__search"
                            placeholder="Search users"
                            onChange={this.filterUsers.bind(this)} />
                        <button onClick={() => this.sortAscend()} className="toolbar__button">A–Z</button>
                        <button onClick={() => this.sortDescend()} className="toolbar__button">Z–A</button>
                    </div>
                </div>
                <div className="grid">
                    {this.state.results.map(user => {
                        return <Card
                            key={user.login.uuid}
                            name={user.name.first + ' ' + user.name.last}
                            thumbnail={user.picture.large}
                            email={user.email}
                            phone={user.phone}
                            location={user.location.city + ', ' + user.location.state}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;
