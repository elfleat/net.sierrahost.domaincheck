import React from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Input,
    Title, Content, H3, View, Text, Item, Icon, Button,
    Form, Grid, Col, List, ListItem
} from 'native-base';

import GlobalHeader from '../components/GlobalHeader';

const tldResults = [{
  tld: '.com',
  loading: false,
  available: true,
  body: 'testDomain',
},{
  tld: '.net',
  loading: false,
  available: true,
  body: 'testDomain'
},{
  tld: '.org',
  loading: false,
  available: true,
  body: 'testDomain'
},{
  tld: '.io',
  loading: false,
  available: true,
  body: 'testDomain'
},{
  tld: '.co',
  loading: false,
  available: true,
  body: 'testDomain'
}]

export default class SearchScreen extends React.Component {
  state = {
    loading: false,
    settings: false,
    tlds: {
      com: true,
      org: true,
      net: true,
      biz: true,
      me: true,
      io: true,
      tv: false,
      uk: false,
      br: false,
      jp: false,
      it: false,
      pl: false
    },
    activeHistory: '',
    history: {},
    backendAwake: false
  }


  _getState = async () => {
    try {
      let storedState = await AsyncStorage.getItem('domainCheckState.v2');
      storedState = JSON.parse(storedState);
      if (storedState) {
        this.setState(storedState)
      }
     } catch (error) {
       // Error retrieving data
     }
  }

  _saveState = async () => {
    try {
      const currentState = JSON.stringify(this.state);
      await AsyncStorage.setItem('domainCheckState', currentState);
    } catch (error) {
      // Error Saving Data
    }
  }

  componentWillMount() {
    this._getState();
  }

  componentDidUpdate() {
    this._saveState();
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <GlobalHeader />
        {/* <Content> */}
          <View style={{
            backgroundColor: 'rgba(0,0,0,0.03)',
            paddingTop: 10, paddingBottom: 15, borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 1 }}>
            <Form style={[styles.form]}>
              <Item>
                <Icon name="ios-search" />
                <Input  style={{ borderWidth: 0 }} placeholder="Search" />
                <Button transparent onPress={() => alert('hello world')}>
                  <Icon style={{ color: 'gray' }} name="ios-settings" />
                </Button>
              </Item>
            </Form>
          </View>
          <FlatList
            data={tldResults}
            keyExtractor={(item, index) => `${item.body}${item.tld}`}
            renderItem={({item}) => <Text key={`${item.body}${item.tld}`}>{item.body}{item.tld}</Text>}
          />
          {/* <List style={{ marginRight: 15 }} renderRow={(item) => (
            <ListItem>
              <Text>{item.body}{item.tld}</Text>
            </ListItem>
          )} dataArray={tldResults} /> */}
            {/* <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem> */}
         {/* </Content> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    // padding: 10,
    // backgroundColor: 'red'
  }
});
