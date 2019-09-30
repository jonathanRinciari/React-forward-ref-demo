import React, { Component, createRef } from 'react';
import { render } from 'react-dom';
import ColorPad from './components/ColorPad';
import { SketchPicker } from 'react-color';

import './style.css';

interface AppProps { }
interface AppState {
  color: string;
}

class App extends Component<AppProps, AppState> {
  ref: React.RefObject<HTMLDivElement> = createRef();

  update = ({hex, rgb: {r, g, b, a}}) => {
    const color = `rgba(${r}, ${g}, ${b}, ${a})`;
    this.ref.current.style.backgroundColor = color;
  }
  render() {
    return (
      <div className="app-wrapper">
        <h1>ForwardRef Demo</h1>
        <p>The color pad is updated in real time by accessing the DOM node directly</p>
        <div style={{display: 'flex'}}>
          <ColorPad ref={this.ref}/>
        </div>
        <SketchPicker onChange={(e: any) => this.update(e)} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
