import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './components/button';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {

  render() {
    return (
      <div className="app-wrapper">
        <h1>ForwardRef Demo</h1>
        <div>
          <Button handleOnClick={() => {}} label="Test"/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
