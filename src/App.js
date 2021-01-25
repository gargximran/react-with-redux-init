import React, {Component} from 'react';
import './App.css'
import { connect } from 'react-redux'
import { increment, decrement } from "./redux/actions/counter";

class App extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
              <h1 className={'text-center'}>Hello world! {this.props.counter}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        );
    }
}

const StateToProps = state => {
    return {
        counter: state.counter
    }
}

const DispatchToPorps = dispatch => ({
    increment: () => (dispatch(increment())),
    decrement: () => (dispatch(decrement()))
})

export default connect(StateToProps, DispatchToPorps)(App);