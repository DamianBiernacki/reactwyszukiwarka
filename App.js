import React, { PureComponent, createRef } from "react";
import "./styles.css";

export default class App extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      items: props.items || []
    };
    this.input = createRef();
  }
  changeHandler = (e) => {
    let text = e.target.value;
    if (text) {
      this.setState((state) => ({
        items: this.props.items.filter((item) =>
          item.toLowerCase().includes(text.toLowerCase())
        )
      }));
    } else {
      this.setState({
        items: this.props.items
      });
    }
  };
  render() {
    return (
      <div className="App">
        <input
          onChange={this.changeHandler}
          placeholder="Wyszukaj województwo"
          ref={this.input}
          type="text"
        />
        <ul>
          {this.state.items.map((woje) => (
            <li key={woje.toUpperCase()}>{woje}</li>
          ))}
        </ul>
      </div>
    );
  }
}
