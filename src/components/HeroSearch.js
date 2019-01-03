import React from 'react';
import { StyleSheet } from 'react-native'
import {
    Grid, Row, Col, Text, Item, Input, View,
    Button
} from 'native-base'

import Colors from '../constants/Colors';

export default class HeroSearch extends React.Component {
  render() {
    return (
      <Grid>
          <Col>
            <View style={styles.heroContainer}>
                <Text style={styles.h1}>Ready to check your next domain idea?</Text>
                <View style={styles.heroInputContainer}>
                    <Item style={styles.heroInput} rounded>
                        <Input placeholder='DomainIdea.com'/>
                    </Item>
                    <Button style={{ margin: 20, alignSelf: 'center' }} primary>
                        <Text> Search </Text>
                    </Button>
                </View>
            </View>
          </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    heroContainer: {
        // backgroundColor: 'rgba(0,0,0,0.04)',
        paddingTop: 70,
        paddingBottom: 20
    },
    heroInputContainer: {
        margin: 30
    },
    heroInput: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        paddingRight: 10
    }
})
