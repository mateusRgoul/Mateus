
import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/Styles';
import * as Progress from 'react-native-progress';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function ({ handleOpenDPP }) {

    const DPP = ({ weeksLeft, trimester }) => (
        <TouchableOpacity style={styles.button} onPress={handleOpenDPP}>
            <View style={styles.viewButton1}>
                <Text style={styles.buttonText}>{weeksLeft} semanas restantes</Text>
            </View>

            <View style={styles.viewButton2}>

                <CircularProgress
                    value={trimester}
                    progressValueStyle={styles.valueCircleProgress}
                    valueSuffix={'º'}
                    valueSuffixStyle={styles.suffixCircleProgress}
                    title={'TRIMESTRE'}
                    titleStyle={styles.titleCircleProgress}
                    radius={50}
                    initialValue={0}
                    activeStrokeColor={'#EB9F63'}
                    //rotation={360}
                    maxValue={3}
                />
            </View>

        </TouchableOpacity>

    )
    return (
        <View style={styles.pregnancyInfos}>
            <DPP weeksLeft="28" trimester='1' />
        </View>
    )
}


