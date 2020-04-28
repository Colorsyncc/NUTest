import React, { Component } from 'react';
//Assets
import api_url from './constants/api_url';
//Components
import MainComponent from './components/index';

import '../src/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  componentDidMount() {
    fetch(api_url).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      this.setState({ data: data})
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <MainComponent data={data}/>
      </div>
    )
  }
}

export default App;