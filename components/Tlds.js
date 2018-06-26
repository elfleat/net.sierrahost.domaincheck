import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
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