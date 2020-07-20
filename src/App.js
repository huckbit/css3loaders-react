import React from 'react';
import './App.scss';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
