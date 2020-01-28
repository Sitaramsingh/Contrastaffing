import { StyleSheet, Dimensions  } from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);


export default StyleSheet.create({
    loginContainer: {
        backgroundColor: '#d7e7f7', 
        flex: 1,
        paddingTop:30,
        height: screenHeight,
        alignItems: "center",
      },
      loginCard: {
        marginTop: 20,
        backgroundColor: '#ffff',          
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ffffff',
        padding:20,
        shadowOffset:{ width: 10, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 1.0,
      },
      loginHeader: {
        fontSize: 40,
        fontWeight: '700'
      },
      inputLoginStyle: { 
        height: 40, 
        // width: 280,
        borderRadius: 1,
        borderColor: '#979797',
        borderWidth: 1,
        paddingLeft: 8,
      },
      forgotStyle: {
        color: "#2557a7",
        fontSize: 15,
        fontWeight: '700',
        marginTop: 25,
      },
      loginBtnCont: {
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      labelstyle : {
        marginTop:20,
        marginBottom:12,
      },
      loginButtonStyle: {
        borderRadius: 3,
        width: 280,
        fontFamily: 'OpenSans',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 10,
        paddingRight: 45,
        paddingBottom:15,
        paddingLeft: 10,
        textAlign: 'center',
        backgroundColor: "#2557a7",
        // backgroundColor: "#3d5a98",
        color: "white",
        marginTop: 30,
      },
      signupText: {
        flexDirection: "row",
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
      },
      signUpColor: {
        color: "#3869b2"
      }
})