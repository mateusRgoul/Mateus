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
    fontSize: 13,
    color: 'black',
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
  },
  numberText: {
    fontFamily: 'MontserratBold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  calendarViewListStyle: {
    //backgroundColor: '#FFFFFF',
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
    //alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    marginLeft: 2,
  },
  /*gradient: {
    width: 240,
    height: 130,
    borderRadius: 6,
    alignItems: 'center',
  },*/
  pregnancyInfos: {
    width: 220,
    height: 150,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  virtualTourView: {
    marginLeft: 10,
    width: 160,
    height: 150,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  viewCenter: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  viewButton1: {
    marginLeft: 2,
  },
  viewButton2: {
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 16,
    marginRight: 8,
    marginTop: 3,
    marginBottom: 2,
    color: 'black',
  },
  valueCircleProgress: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  suffixCircleProgress: {
    fontFamily: 'MontserratBold',
    fontSize: 15,
  },
  titleCircleProgress: {
    fontFamily: 'MontserratBold',
    fontSize: 11,
    marginBottom: 10
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
  feedText: {
    fontFamily: 'MontserratMedium',
    fontSize: 15,
    marginLeft: 3,
    marginBottom: 12,
  },
  feedTitle: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 18,
    marginLeft: 6,
  },
  feedImages: {
    width: width * 0.95,
    height: width / 2,
    borderRadius: 6,
    marginBottom: 8,
  },
  feedViewListStyle: {
    backgroundColor: 'white',
    borderRadius: 6,
    width: width * 0.95,
    height: width * 0.8,
    marginBottom: 20,
  },
  feedContainer: {
    flex: 1,
    //flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
  },
  dataFeed: {
    fontFamily: 'MontserratMedium',
    fontSize: 13,
    alignItems: 'flex-end',
  },
  dataFeedView: {
    marginLeft: 8,
    //alignItems: 'flex-end',
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
  modalBackground: {
    backgroundColor:"rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCalcule: {
    backgroundColor: "#FAFAFA",
    width: "90%",
    height: "85%",
    //paddingTop: 24,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  modalTextCalculeTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 22,
    marginBottom: 8,
  },
  modalTextClose: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 16,
  },
  closeIcon: {
    width: width * 0.5,
    height: width / 10,
    backgroundColor: '#EB9F63', 
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

})