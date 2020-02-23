import React, {Component} from 'react';
import {CardList} from "../components/CardList";
import {Searchbox} from '../components/Searchbox'
import './App.css';
import {Scroll} from '../components/Scroll';
import {ErrorBoundry} from "../components/ErrorBoundry";

export class App extends Component {

    state = {
        robots: [],
        searchfield: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => {
                this.setState({
                    robots: users
                })
            })
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    };

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()));
        return !robots.length
            ? <h1 className='tc'>LOADING</h1>
            : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}