import React, {Component} from 'react';


class App extends Component {

constructor(props){
    super(props);
    this.state = {
    counter: 0
    }
}

increment = () => {

    this.setState = ({counter: this.state.counter + 1})
}

decrement = () => {
    this.setState = ({counter: this.state.counter - 1})
}

render() {
        return (
            <div>

            <button onClick={this.increment}> ADD 1</button>
            <button onClick={this.decrement}> SUBTRACT 1 </button>
            <h1>{this.state.counter}</h1>
            </div>
        )
    }


}

export default App;