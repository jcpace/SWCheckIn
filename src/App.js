import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SW Airlines Auto Check-In</h2>
        </div>
        <div className="start-form">
          <form>
            <fieldset>
              <legend>
                <span class="number">1</span> Flight Info
              </legend>
              <input type="text" name="field1" placeholder="Confirmation Number *" />
              <input type="text" name="field2" placeholder="First Name *" />
              <input type="text" name="field2" placeholder="Last Name *" />
            </fieldset>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
