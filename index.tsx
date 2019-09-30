import React, { Component, createRef } from 'react';
import { render } from 'react-dom';
import ColorPad from './components/ColorPad';
import ColorPadAlt from './components/ColorPadAlt';
import { SketchPicker } from 'react-color';

import './style.css';

interface AppProps { }
interface AppState {
  color: string;
}

class App extends Component<AppProps, AppState> {
  ref: React.RefObject<HTMLDivElement> = createRef();
  constructor(props) {
    super(props);
    this.state = {
      color: 'rgba(1,23,23,1)'
    }
  }

  update = ({hex, rgb: {r, g, b, a}}) => {
    const color = `rgba(${r}, ${g}, ${b}, ${a})`;
    this.ref.current.style.backgroundColor = color;
    this.setState({
      color
    })
  }
  render() {
    return (
      <div className="app-wrapper">
        <h1>ForwardRef Demo</h1>
        <p>The color pad is updated in real time by accessing the DOM node directly</p>
        <div style={{display: 'flex'}}>
          <ColorPad ref={this.ref}/>
          <ColorPadAlt color={this.state.color} />
        </div>
        <SketchPicker onChange={e => this.update(e)} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
