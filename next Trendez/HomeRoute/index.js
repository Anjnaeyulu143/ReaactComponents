import React, { Component } from "react";
import Cookies from "js-cookie";

export default class HomeRoute extends Component {
  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };

    const url = `https://apis.ccbp.in/products/${id}`;

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  render() {
    return (
      <>
        <h1>This is </h1>
      </>
    );
  }
}
