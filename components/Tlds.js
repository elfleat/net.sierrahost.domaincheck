import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { secondary } from '../utils/colors'

export default function Tlds({ tlds, tldSwitch }){
    return (
        <View style={styles.container}>
            <Text style={{color: secondary}}>TLDs:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    settingsButton: {
        padding: 12
    }
})