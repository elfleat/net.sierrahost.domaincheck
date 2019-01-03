import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, H3, View } from 'native-base';

import HeroSearch from './../components/HeroSearch'
import PromoCard from './../components/PromoCard'
import GlobalHeader from '../components/GlobalHeader';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { navigation } = this.props
    navigation.navigate('Search')
  }

  render() {
    return (
      <Container>
        <GlobalHeader />
        <Content style={{backgroundColor: 'rgba(0,0,0,0.04)'}}>
          <HeroSearch />
          <View style={{ backgroundColor: 'white', padding: 10 }}>
          {/* <H3 style={{ paddingBottom: 10, paddingTop: 15, borderBottomColor: 'rgba(0,0,0,0.04)', borderBottomWidth: 1, marginBottom: 10 }}>Featured Offers</H3> */}
          <PromoCard />
          <PromoCard />
          </View>
        </Content>
      </Container>
    );
  }









}

const styles = StyleSheet.create({
});
