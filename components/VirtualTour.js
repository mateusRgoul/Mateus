import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../styles/Styles';


export default function () {
    return (

        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=DNXiN2ymL8g")}>
            <View style={styles.virtualTourView}>
                <View style={styles.viewButton1}>
                    <Text style={styles.buttonText}>Tour virtual</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}
