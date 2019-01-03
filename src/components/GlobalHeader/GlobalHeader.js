import React, { Component } from "react";
import { Header, Body, Title, Left, Right } from 'native-base'

class GlobalHeader extends Component {
  render() {
    const title = this.props.title || 'Domain Checker'
    return (
      <Header>
        <Left/>
        <Body>
          <Title  style={{ width: 150 }}>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default GlobalHeader;
