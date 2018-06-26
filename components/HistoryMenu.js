import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { headerGray, secondary, primary, historyBar, historyPillow } from '../utils/colors'

function PillowButton({ onDelete, onPress, text, isActive }) {
    return (
        <View style={[styles.pillowBtnContainer, isActive ? styles.activePillow : {}]}>
            <TouchableOpacity style={styles.pillowClose} onPress={()=> onDelete(text)}>
                <Ionicons name="md-close" color={isActive ? historyBar: historyPillow} size={18} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onPress(text)}>
                <Text style={{color: isActive ? historyBar: historyPillow, fontSize: 14, padding: 4 }}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default class HistoryMenu extends Component {
    render() {
        const { history, deleteHistory, activeHistory, activateHistory } = this.props
        const historyEntries = Object.keys(history)

        if(!historyEntries.length) {
            return (<View />)
        }

        return (
            <View style={styles.historyMenuContainer}>
                <ScrollView horizontal={true}>
                    {Object.keys(history)
                        .map((tld)=> (<PillowButton key={tld} isActive={(activeHistory === tld)} onDelete={deleteHistory} onPress={activateHistory} text={tld} />))}
                </ScrollView> 
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    historyMenuContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: historyBar
    },
    pillowBtnContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: historyBar,
        margin: 5,
        borderRadius: 3,
        padding: 5
    },
    pillowClose: {
        padding: 5
    },
    activePillow: {
        backgroundColor: historyPillow
    }
})
