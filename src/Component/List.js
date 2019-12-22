import React, { Component } from "react";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h2>Industrial Research</h2>
        </div>
        <input
          type="radio"
          name="gender"
          id="global_research"
          value="global_research"
          checked={this.props.value === "Global Research"}
          onChange={this.props.toggle}
        ></input>
        <label for="Global Research">Global Research</label>
        <br />
        <input
          type="radio"
          name="gender"
          id="local_research"
          value="local_research"
          checked={this.props.value === "Local Research"}
          onChange={this.props.toggle}
        ></input>
        <label for="local_research">Local Research</label>
      </div>
    );
  }
}

export default List;
