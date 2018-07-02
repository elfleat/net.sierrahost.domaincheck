import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons'
import Api from './../utils/api'
import { primary, fail, headerGray, lightGray } from './../utils/colors'

class DomainCheck extends Component {
    state = {
        available: false,
        loading: true
    }
    componentDidMount() {
        this.check()
    }
    check = async () => {
        const response = await Api.get(`check/${this.props.domainWithTld}`, { 
            headers: { 
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        })

        if(response.data.success) {
            this.setState({
                loading: false,
                available: !response.data.isTaken
            })
        } else {
            this.check()
        } 
    }
    render() {
        const { domainWithTld, rawDomain, tld } = this.props
        const { loading, available } = this.state

        // Loading State
        let AvailabilityIcon = <Entypo style={styles.domainCheckIcon} name='back-in-time' />

        if(!loading) {
            AvailabilityIcon = <Ionicons  style={[styles.domainCheckIcon, !loading && available ? { color: primary} : { color: fail}]} name={available ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline'} />
        }


        return (
            <View style={styles.domainCheck}>
                {AvailabilityIcon}
                <Text style={styles.domainCheckText}>{rawDomain}</Text>
                <Text style={[styles.domainCheckTextTld, loading ? { color: headerGray } : (!loading && available ? { color: primary} : { color: fail})]}>.{tld}</Text>
            </View>
        )   
    }
}

export default class CheckList extends Component {
    render() {
        const { rawDomain, domainInfo } = this.props
       
        return (
            <View>
                <ScrollView>
                    {Object.keys(domainInfo.tlds).map((tld) => { 
                        let domainWithTld = `${rawDomain}.${tld}`
                        return (<DomainCheck key={domainWithTld} rawDomain={rawDomain} tld={tld} domainWithTld={domainWithTld} />)
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    domainCheck: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: 15,
        borderBottomColor: lightGray,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    domainCheckIcon: {
        fontSize: 24,
        marginTop: 5,
        color: headerGray
    },
    domainCheckText: {
        fontSize: 24,
        paddingLeft: 20
    },
    domainCheckTextTld: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})