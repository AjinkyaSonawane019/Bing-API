import React, { Component } from "react";
import NavBar from "./NavBar";
import Info from "./Info";
import News from "./News";
import List from "./List";
import "../App.css";
import SplitPane, { Pane } from "react-split-pane";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "Global Research"
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    console.log(this.state.checked);
  }
  toggle() {
    console.log("Called");
    if (this.state.checked === "Global Research")
      this.setState({ checked: "Local Research" });
    else this.setState({ checked: "Global Research" });
  }

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" minSize={"50%"} defaultSize={"20%"}>
          <div className="App1">
            <List value={this.state.checked} toggle={this.toggle} />
          </div>
          <div>
            <SplitPane split="horizontal" minSize={"50%"} defaultSize={"8%"}>
              <div className="App2">
                <NavBar value={this.state.checked} />
              </div>
              <div>
                <SplitPane split="vertical" minSize={"50%"} defaultSize={"70%"}>
                  <div className="App3">
                    <Info value={this.state.checked} />
                  </div>
                  <div classsName="App4">
                    <News />
                  </div>
                </SplitPane>
              </div>
            </SplitPane>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default Display;
