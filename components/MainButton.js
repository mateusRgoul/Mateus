
import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/Styles';
import * as Progress from 'react-native-progress';

export default function () {
    const [progressValue, setProgress] = useState(0.2)

    const GradientButton = ({ weeksLeft, trimester, weeksCount }) => (
        <LinearGradient colors={['#A2DEFF', '#C99EFF']}
            start={[0.0, 2]}
            end={[1.5, 1.5]}
            style={styles.gradient} >
            <TouchableOpacity style={styles.button}>
                <View style={styles.viewButton1}>
                    <Text style={styles.buttonText}>{weeksLeft} semanas restantes</Text>
                    <Text style={styles.buttonText2}>{trimester}º trimestre</Text>
                </View>

                <View style={styles.viewButton2}>
                    <Text style={styles.buttonText3}>Você está grávida de {weeksCount} semanas</Text>
                    <Progress.Bar
                        progress={progressValue}
                        width={200}
                        height={6}
                        color='#FAFAFA'
                        borderColor='white'
                        borderWidth={0.8}
                    />
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
    return (
        <View>
            <GradientButton weeksLeft="28" trimester='2' weeksCount='06' />
        </View>
    )
}


