import React, { Component, createRef } from 'react';
import { render } from 'react-dom';
import ColorPad from './components/ColorPad';
import { SketchPicker } from 'react-color';

import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  ref: React.RefObject<HTMLDivElement> = createRef();

  update = () => {
    this.ref.current.style.backgroundColor = 'red';
  }
  render() {
    return (
      <div className="app-wrapper">
        <h1>ForwardRef Demo</h1>
        <div>
          <ColorPad ref={this.ref}/>
        </div>
        <SketchPicker />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
