import React, { Component } from 'react'
import { Image } from 'react-native'
import { 
  Card, CardItem, Thumbnail, Body, Text, Left, Button,
  Icon, Grid, Row, Col
} from 'native-base'

class PromoCard extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://blogcdn1.secureserver.net/wp-content/uploads/2014/07/GDHead.png'}} />
            <Body>
              <Text>.com Domains for $0.99 first year.</Text>
              <Text note>Godaddy.com</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://img1.wsimg.com/Sitecore/1/9/illus-.com-domain.png'}} style={{height: 120, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Body>
            <Grid style={{ width: '50%', alignSelf: 'flex-end'}}>
              <Row>
                <Col>
                  <Button transparent>
                    <Icon active name="ios-share-alt" />
                    <Text>Share</Text>
                  </Button>
                </Col>
                <Col>
                  <Button transparent>
                    <Icon name="ios-pricetag" />
                    <Text>Claim</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Body>
        </CardItem>
      </Card>
      )
  }
}

export default PromoCard
