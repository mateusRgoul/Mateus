import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Styles';
import { LinearGradient } from 'react-native-svg';
import moment from 'moment';

const DATA = [
    {
        id: '1',
        info: ['Sex', '01'],
    },
    {
        id: '2',
        info: ['Sab', '02'],
    },
    {
        id: '3',
        info: ['Dom', '03'],
    },
    {
        id: '4',
        info: ['Seg', '04'],
    },
    {
        id: '5',
        info: ['Ter', '05'],
    },
    {
        id: '6',
        info: ['Qua', '06'],
    },
    {
        id: '7',
        info: ['Qui', '07'],
    },
    {
        id: '8',
        info: ['Sex', '08'],
    },
    {
        id: '9',
        info: ['Sab', '09'],
    },
    {
        id: '10',
        info: ['Dom', '10'],
    },
    {
        id: '11',
        info: ['Seg', '11'],
    }
]

const getCurrentDay = () => {
    return moment().format('DD');
};

export default function () {
    const currentDay = getCurrentDay();
    return (
        <View style={styles.ListStyle}>
            <FlatList
                horizontal={true}
                data={DATA}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                //snapToAlignment={'start'}
                //scrollEventThrottle={16}
                //decelerationRate={'fast'}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={{ ...styles.calendarViewListStyle, backgroundColor: item.info[1] === currentDay ? '#EB9F63' : '#FFFFFF' }}>
                            <Text style={styles.dayText}>{item.info[0]}
                                {'\n'}
                            </Text>
                            <Text style={styles.numberText}>{item.info[1]}</Text>
                        </View>
                    </TouchableOpacity>


                )}

            />
        </View>

    )
}