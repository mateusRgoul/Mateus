import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/Styles';
import * as Progress from 'react-native-progress';


export default function(){
    const GradientButton = ({text}) => (
        <LinearGradient colors={['#A2DEFF', '#C99EFF']}
        start={[0.0,2]}
        end={[1.5,1.5]}
        style={styles.gradient}>
            <View style={styles.viewButton1}>
                <Text style={styles.buttonText}>34 semanas restantes</Text>
                <Text style={styles.buttonText2}>1º trimestre</Text>
            </View>

            <View style={styles.viewButton2}>
                <Text style={styles.buttonText3}>Você está grávida de 06 semanas</Text>
                    <Progress.Bar 
                    progress={0.15} 
                    width={200} 
                    height={6} 
                    color='white'
                    borderColor='white'
                    borderWidth={0.8}
                />
            </View>
        </LinearGradient>
    )
    return (
        <View>
            <GradientButton text="21" />
        </View>
    )
}
