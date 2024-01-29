import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/Styles'; 

// import { Container } from './styles';

export default function ModalOne({handleCloseModalOne}){
    const [modalOneVisible, setmodalOneVisible] = useState(false);
    return(
        <View syle={styles.modalContainer}>
            <TouchableOpacity onPress={handleCloseModalOne}>
                <Text>Fechar</Text>
            </TouchableOpacity>
        </View>
    )
}
