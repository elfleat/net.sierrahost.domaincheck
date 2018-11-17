import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

import HeroSearch from './../components/HeroSearch'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title  style={{ width: 150 }}>Domain Checker</Title>
          </Body>
          <Right />
        </Header>
        <Body>
          <HeroSearch />
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});
