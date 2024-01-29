import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: width,
    backgroundColor: '#FAFAFA',
    //marginLeft: 10
  },
  homeView: {
    flexDirection: 'row',
    width: width * 0.9,
    marginBottom: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 140,
  },
  marginLeft: {
    marginLeft: 10,
  },
  homeText: {
    fontFamily: 'MontserratBold',
    fontSize: 15,
    color: 'black',
    //fontStyle: 'italic',
    marginTop: 40,
  },
  bookmark: {
    width: 30,
    height: 30,
    marginTop: 40,
  },
  logo: {
    marginTop: 11,
    width: 30,
    height: 30,
    //marginRight: 3,
  },
  profile: {
    flexDirection: 'row',
    marginLeft: 2,
    gap: 6,
  },
  profileText: {
    fontFamily: 'Montserrat',
    marginTop: 15,
    fontSize: 14,
    color: 'black',
    marginBottom: 8,
  },
  dateStyle: {
    //justifyContent: 'center',  
    //alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    fontFamily: 'Montserrat',
    marginTop: 8,
    fontSize: 15,
    color: 'black',
  },
  dayText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#858484',
    //textAlign: 'center',
  },
  numberText: {
    fontFamily: 'MontserratBold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  calendarViewListStyle: {
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
  ListStyle: {
    alignItems: 'center',
    marginBottom: 5
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
    //width: '80%',
    marginBottom: 12,
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
    //alignSelf: 'center',
  },
  viewButton2: {
    marginTop: 13,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 18,
    //fontSize: 10,
    marginRight: 8,
    marginTop: 12,
    marginBottom: 10,
    color: 'black',
  },
  buttonText2: {
    fontFamily: 'MontserratMedium',
    fontSize: 16,
    marginRight: 20,
    color: 'black',
  },
  buttonText3: {
    fontFamily: 'MontserratMedium',
    fontSize: 12,
    marginBottom: 5,
    color: 'black',
  },
  estimateText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 17,
    marginTop: 9,
    marginRight: 4,
    color: 'black',
  },
  estimateNumber: {
    fontFamily: 'MontserratMedium',
    backgroundColor: '#FAFAFA',
    borderColor: '#A2DEFF',
    borderWidth: 1.5,
    borderRadius: 6,
    marginTop: 25,
    marginRight: 5,
    fontSize: 18,
    paddingHorizontal: 7,
    paddingRight: 3,
    paddingTop: 2,
    alignSelf: 'center',
  },
  feedTitle: {
    fontFamily: 'MontserratMedium',
    marginTop: 5,
    marginLeft: 3,
  },
  feedImages: {
    width: width * 0.2,
    height: width / 4,
    borderRadius: 6,
  },
  feedViewListStyle: {
    //backgroundColor: 'white',
    width: width * 0.2,
    height: width / 4,
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  dicaView: {
    backgroundColor: 'white',
    width: width * 0.94,
    height: width / 7,
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 7,
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  dicaText: {
    fontFamily: 'MontserratMedium',
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
    marginLeft: 10,

  },

})