import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import FL from './components/FlatList';
import GB from './components/MainButton';
import { styles } from './styles/Styles';
import { useFonts } from '@use-expo/font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  let user = "Claudia";

  return (
    <ScrollView style={styles.container}>
      <View style={styles.space}>
        <Text style={styles.home}> HOME</Text>
        <StatusBar style="auto" />

        <View style={styles.profile}>
          <Image
            source={require("./assets/grey.png")}
            style={styles.logo}
          />
          <Text style={styles.profileText}> Bom dia, { user }!</Text>
        </View>

        <View style={styles.dateStyle}>
          <Text style={styles.dateText}> Sexta-feira, 20 de Março | Semana 06</Text>
        </View>
        <FL/>

        <ScrollView
  horizontal={true}
  >
          <TouchableOpacity style={styles.button}>
          <GB/>
          </TouchableOpacity>

          <View style={[styles.viewEstimate, styles.elevation]}>
            <TouchableOpacity>
              <Text style={styles.estimateText}>Data estimada{'\n'}do parto</Text>
              <Text style={styles.estimateNumber}>10/10/2020</Text>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </View>

      

  

      

     
      
    </ScrollView>
  );
}


