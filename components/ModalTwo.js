import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/Styles';


export function ModalTwo({ handleClose }) {
    return (
        <View style={styles.modalBackground}>
            <View style={styles.modalCalcule}>
                <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
                    <Text>
                        X
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.modalTextCalculeTitle}>Quer saber como estimamos sua data de parto?</Text>
                    <Text style={{ fontFamily: 'MontserratMedium', fontSize: 16 }}>Pode ter sido calculado através de duas formas: {'\n'}</Text>
                    <Text style={{ fontFamily: 'MontserratSemiBold', fontSize: 16 }}>DUM(dia da última menstruação):</Text>
                    <Text style={{ fontFamily: 'MontserratMedium', fontSize: 16 }}>Contam-se 280 dias, ou 40 semanas exatas, a partir do primeiro dia da última menstruação antes da gravidez.{'\n'}</Text>
                    <Text style={{ fontFamily: 'MontserratSemiBold', fontSize: 16 }}>USG(ultrassonografia):</Text>
                    <Text style={{ fontFamily: 'MontserratMedium', fontSize: 16 }}>Soma-se a quantidade de dias que se passaram da data da ultrassonografia até hoje (dia em que se quer a idade gestacional) e divide-se por 7. O valor inteiro do resultado da divisão é o número de semanas da gravidez e o resto da divisão, o número de dias passados da data do ultrassom. Depois é só somar o tempo de gravidez que foi detectado na ultrassonografia.{'\n'}</Text>
                </View>
            </View>

        </View>
    )
}
