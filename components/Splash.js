import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { primary, secondary } from '../utils/colors'
import ProgressCircle from 'react-native-progress/Circle';

export default function Splash(){
    return (
        <View style={styles.container}>
            <View style={styles.mainHeadingContainer}>
                <Text style={styles.mainHeading}>Domain Checker</Text>
                <Text style={styles.subHeading}>By Elias Sierra</Text>
                <ProgressCircle style={styles.circleStyle} color={secondary} size={30} indeterminate={true} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: primary
    },
    circleStyle: {
        alignSelf: 'center',
        marginTop: 20
    },
    mainHeading: {
        textAlign: 'center',
        fontSize: 30,
        color: secondary
    },
    subHeading: {
        textAlign: 'center',
        fontSize: 15,
        color: secondary,
        opacity: 0.8
    }
})