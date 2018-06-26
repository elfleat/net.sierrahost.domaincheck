import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { secondary } from '../utils/colors'

export default function SettingsButton({ settings, onPress }){
    return (
        <TouchableOpacity style={styles.settingsButton} onPress={onPress}>
            <Entypo name={settings ? 'chevron-small-up' : 'dots-three-vertical'} 
                    color={secondary}
                    size={18} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    settingsButton: {
        padding: 12
    }
})