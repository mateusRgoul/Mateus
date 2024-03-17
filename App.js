
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import FLCALENDAR from './components/Calendar';
import DPP from './components/MainButton';
import VirtualTour from './components/VirtualTour';
import { styles } from './styles/Styles';
import { useFonts } from '@use-expo/font';
import FLFEED from './components/Feed';
import { ModalOne } from './components/ModalOne'
import { ModalTwo } from './components/ModalTwo'
import BOOKMARK from './components/Bookmark';
import NOTIFICATIONS from './components/Notifications';

export default function App() {
  const [DPPmodalVisible, setDPPmodalVisible] = useState(false);
  const [BMmodalVisible, setBMmodalVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat.ttf'),
    'MontserratBold': require('./assets/fonts/MontserratBold.ttf'),
    'MontserratSemiBold': require('./assets/fonts/MontserratSemiBold.ttf'),
    'MontserratMedium': require('./assets/fonts/MontserratMedium.ttf'),
    'MontserratLight': require('./assets/fonts/MontserratLight.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  let user = "Joana";


  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.homeView}>
        <BOOKMARK handleOpenBM={ () => setBMmodalVisible(true)}/>
        <Text style={styles.homeText}>MEU PARTO</Text>
        <NOTIFICATIONS/>
      </View>

      <View style={styles.marginLeft}>
        <View style={styles.profile}>
          <Image
            source={require("./assets/grey.png")}
            style={styles.logo}
          />
          <Text style={styles.profileText}> Bom dia, {user}!</Text>
        </View>

        <View style={styles.dateStyle}>
          <Text style={styles.dateText}> Sexta-feira, 20 de Março | Semana 06</Text>
        </View>
        <FLCALENDAR />

        <View style={styles.viewCenter}>
          <DPP handleOpenDPP={ () => setDPPmodalVisible(true)} />
          <VirtualTour />
        </View>

        <View>
          <Text style={styles.feedText}>Meu conteúdo diário:</Text>
        </View>

        <FLFEED />

        <View>
          <Text style={styles.feedText}>Dicas</Text>
        </View>
      </View>

      <View style={styles.dicaView}>
        <Text style={styles.dicaText}>Prepare-se para uma experiência única com o Meu Parto App!</Text>
      </View>

    <Modal visible={DPPmodalVisible} animationType='fade' transparent={true}>
      <ModalOne handleClose={() => setDPPmodalVisible(false)}/>
    </Modal>

    <Modal visible={BMmodalVisible} animationType='fade' transparent={true}>
      <ModalOne handleClose={() => setDPPmodalVisible(false)}/>
    </Modal>


    </ScrollView>
  );
}




