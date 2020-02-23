import React, {Component} from 'react';

export class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children
    }
}