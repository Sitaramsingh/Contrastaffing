import { StyleSheet, Dimensions  } from 'react-native';
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  signupContainer: {
      backgroundColor: '#d7e7f7', 
      flex: 1,
      paddingTop:30,
      height: screenHeight,
      // alignItems: "center",
      

    },
  })