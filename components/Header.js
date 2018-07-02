import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Animated, Easing } from 'react-native'
import { headerGray, secondary, primary } from '../utils/colors'
import { Feather } from '@expo/vector-icons'

import CheckBox from 'react-native-check-box'
import SettingsButton from './SettingsButton'
 
export default class Header extends Component {
    state = {
        query: '',
    }
    _handleTextChange = (char) => {
        let cleanNewText = char.replace(/\W/g, '')
        return this.setState({ query: `${cleanNewText}` })
    }
    render() {
        const { settings, settingsSwitch, tlds, tldSwitch, search, loading } = this.props
        const { query } = this.state 
        let lowerCaseQuery = query.toLowerCase()

        return (
            <View style={styles.headerContainer}>
                <View style={styles.headingsContainer}>
                    <Text style={styles.h1}>Grab it before it's taken</Text>
                    <Text style={styles.h2}>Domain Check</Text> 
                </View>

                <View style={{ flexDirection : 'row' }}> 
                    <View style={{ paddingTop: 8, paddingLeft: 8, backgroundColor: secondary, flex: 2, borderRadius: 4 }}>
                        <View style={{flexDirection: 'row' }}>
                            <Feather 
                                name="search" 
                                color={headerGray}
                                size={24} style={{ width: 20, marginTop: 2 }} />
                            <TextInput 
                                style={{ flex: 2, fontSize: 18, paddingLeft: 5, marginRight: 10, paddingBottom: 10, marginLeft: 10 }}
                                value={query}
                                onChangeText={this._handleTextChange}
                                onSubmitEditing={()=> search(lowerCaseQuery)}
                            />
                        </View>
                    </View>
                    <SettingsButton settings={settings} onPress={settingsSwitch} />
                </View>

                {settings && 
                    <View>                       
                        <View style={styles.tldsContainer}>
                            {Object.keys(tlds).map((tld) =>
                                (<CheckBox 
                                    key={tld} 
                                    onClick={()=> tldSwitch(tld)} 
                                    rightText={`.${tld}`}
                                    isChecked={tlds[tld]}
                                    checkBoxColor={secondary}
                                    style={{ width: 70, height: 30 }}
                                    rightTextStyle={{color: secondary}} />))}
                        </View>
                    </View>}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=> search(lowerCaseQuery)} style={[styles.button,{ backgroundColor: !loading ? primary : headerGray, opacity: !loading ? 1: 0.3 }]} disabled={loading}>
                        <Text style={styles.buttonText}>Check</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: headerGray,
        paddingTop: 40,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20
    },
    headingsContainer: {
        marginBottom: 20
    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: secondary
    },
    h2: {
        fontSize: 45,
        fontWeight: '100',
        color: secondary
    },
    button: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
        borderRadius: 3,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: secondary
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tldsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 25
    }
})