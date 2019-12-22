import React, { Component } from "react";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    let key = "1941cdb836b747be80919ad0181307ff";
    let url =
      'https://cognitivesearchapi.cognitiveservices.azure.com/bing/v7.0/news?q=""';

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.setRequestHeader("Ocp-Apim-Subscription-Key", key);
    xmlHttp.send(null);
    let response = JSON.parse(xmlHttp.responseText);
    let ans = response.value.map(({ name, url }) => {
      return { name, url };
    });
    console.log(response.value);
    // response.value.array.forEach(({ name }) => {
    //   ans.push(name);
    // });
    this.setState({ news: ans });
    console.log(ans);
  }
  render() {
    return (
      <ul>
        {this.state.news.map(({ name, url }) => (
          <li key={name}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default News;
