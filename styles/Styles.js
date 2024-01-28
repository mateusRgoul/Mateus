import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
      },
      space: {
        marginLeft: 10,
      },
      home:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        //fontStyle: 'italic',
        marginTop: 40,
      },
      logo: {
        marginTop: 11,
        width: 30,
        height: 30,
        marginRight: 3,
      },
      profile: {
        flexDirection: 'row',
        marginLeft: 2,
      },
      profileText: {
        marginTop: 15,
        fontSize: 15,
        color: 'black',
        marginBottom: 8,
      },
      dateStyle: {
        //justifyContent: 'center',  
        //alignItems: 'center',
        marginTop: 10,
      },
      dateText: {
        marginTop: 8,
        fontSize: 17,
        color: 'black',
      },
      dayText: {
        fontSize: 16,
        color: '#858484',
        //textAlign: 'center',
      },
      numberText: {
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
      },
      viewListStyle: {
          backgroundColor: 'white',
          width: 55,
          height: 100,
          marginHorizontal: 3,
          marginVertical: 10,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          verticalAlign: 'center',
      },
      listStyle: {
          alignItems: 'center',
          marginBottom:5
      },
      button: {
        marginTop: 5,
        marginLeft: 2,
        //alignSelf: 'center',
      },
      gradient: {
        width: 230,
        height: 130,
        borderRadius: 6,
        alignItems: 'center',
        //justifyContent: 'center',
      },
      viewCenter: {
        flexDirection: 'row',
      },
      elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },
      viewEstimate: {
        marginTop: 5,
        backgroundColor: 'white',
        width: 150,
        height: 130,
        borderRadius: 6,
        marginLeft: 10,
        alignItems: 'center',
        borderWidth: 2,
        //borderColor: '#858484',
        borderColor: '#C99EFF',
        

      },
      viewButton1: {
        marginLeft: 2,
        alignSelf: 'left',
      },
      viewButton2: {
        marginTop: 11,
        alignItems: 'center',
      },
      buttonText: {
        fontFamily: 'Montserrat',
          fontSize: 18,
          fontWeight: 'bold',
          marginRight: 18,
          marginTop: 12,
          marginBottom: 10,
          color: 'black',
      },
      buttonText2: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        marginRight: 18,
        color: 'black',
      },
      buttonText3: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        marginBottom: 5,
        color: 'black',
      },
      estimateText: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        marginTop: 12,
        marginRight: 10,
        fontWeight: 'bold',
        color: 'black',
      },
      estimateNumber: {
        backgroundColor: '#FAFAFA',
        //borderColor: '#A2DEFF',
        //borderWidth: 1,
        borderRadius: 6,
        width: 100,
        fontFamily: 'Montserrat',
        marginTop: 23,
        fontSize: 16,
        marginRight: 4,
        padding: 3,
        textAlign: 'center',
      },
      
})