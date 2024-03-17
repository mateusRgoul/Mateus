import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/Styles';

export default function () {
    return (

        <TouchableOpacity>
            <Image
                source={require("../assets/bookmark.png")}
                style={styles.bookmark}
            />
        </TouchableOpacity>

    )
}
