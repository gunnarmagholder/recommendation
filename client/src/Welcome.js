import React, { Component } from 'react';


class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0};
      }
      componentDidMount() {
        fetch('http://localhost:5001/')
        .then(res => res.json())
        .then((data) => {
          console.log('Counter' + JSON.stringify(data));
          this.setState({count: data.counter});
        })
      }
      render() {
        return (
          <div className="App">
            <header className="App-header">
              Willkommen zu Recommendations - Powered by JennePry Inc. <br/>
              Aktuell haben wir { this.state.count } Recommendations!
            </header>
          
          </div>
        );
      }
}

export default Welcome