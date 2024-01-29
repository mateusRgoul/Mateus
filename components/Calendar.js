import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { styles } from '../styles/Styles';

const DATA=[
    {
        id: '1',
        info: ['Dom', '16'],
    },
    {
        id: '2',
        info: ['Seg', '17'],
    },
    {
        id: '3',
        info: ['Ter', '18'],
    },
    {
        id: '4',
        info: ['Qua', '19'],
    },
    {
        id: '5',
        info: ['Qui', '20'],
    },
    {
        id: '6',
        info: ['Sex', '21'],
    },
    {
        id: '7',
        info: ['Sáb', '22'],
    },
    {
        id: '8',
        info: ['Dom', '23'],
    },
    {
        id: '9',
        info: ['Seg', '24'],
    },
    {
        id: '10',
        info: ['Ter', '25'],
    }
]


export default function(){
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
                    <View style={styles.calendarViewListStyle}>
                        <Text style={styles.dayText}>{item.info[0]}
                        {'\n'}
                        </Text>
                        <Text style={styles.numberText}>{item.info[1]}</Text>
                    </View>
                    
                )}
            
            />
        </View>
    )
}