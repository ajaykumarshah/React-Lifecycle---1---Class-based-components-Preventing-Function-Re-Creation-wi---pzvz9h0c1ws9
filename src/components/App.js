import React from 'react'

import '../styles/App.css';


class App extends React.Component {

  // componentDidUpdate() {
  //   console.log("rendered");
  // }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleClick = this.handleClick.bind(this);

  }

  render() {
    //ye console yaha pr nhi hona chahiye upar wale didupdate ko uncomment karo
    console.log("rendered");
    return (
      <div id="main">
        <div id="count">{this.state.count}</div>
        <button id="incr" onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}


export default App;
