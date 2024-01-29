
import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import FLCALENDAR from './components/Calendar';
import GradientButton from './components/MainButton';
import { styles } from './styles/Styles';
import { useFonts } from '@use-expo/font';
import FLFEED from './components/Feed';
import ModalOne from './components/ModalOne';

export default function App() {
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

  let user = "Claudia";
  
  //const [modalOneVisible, setmodalOneVisible] = useState(false);
  //const [modalTwoVisible, setModalTwoVisible] = useState(false);

  

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.homeView}>
        <TouchableOpacity>
          <Image
            source={require("./assets/bookmark.png")}
            style={styles.bookmark}
          />
        </TouchableOpacity>

        <Text style={styles.homeText}>HOME</Text>

        <TouchableOpacity>
          <Image
            source={require("./assets/bell.png")}
            style={styles.bookmark}
          />
        </TouchableOpacity>

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
          <GradientButton />

          <View style={[styles.viewEstimate, styles.elevation]}>
            <Text style={styles.estimateText}>Data estimada{'\n'}do parto</Text>
            <TouchableOpacity>
              <Text style={styles.estimateNumber}>10/10/2020</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.feedTitle}>Meu conteúdo diário</Text>
        </View>

        <FLFEED />

        <View>
          <Text style={styles.feedTitle}>Dicas</Text>
        </View>
      </View>

      <View style={styles.dicaView}>
        <Text style={styles.dicaText}>Prepare-se para uma experiência única com o Meu Parto App!</Text>
      </View>



    </ScrollView>
  );
}




