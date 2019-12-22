import React, { Component } from "react";
class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.value + " in info component ");
    if (this.props.value === "Global Research")
      return <div>info related to Global Research !!!</div>;
    else return <div>info related to Local research !!!</div>;
  }
}

export default Info;
