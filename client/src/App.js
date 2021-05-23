
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import RecommendationList from './RecommendationList';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
        </div>
        <Switch>
          <Route path="/:id" children={<RecommendationList />}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
