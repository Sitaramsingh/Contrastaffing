import React, {Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../Styles/Loginscreenstyle'
// interface State{
//   hideImage: false, 
//        apicheck: [],
//        click: 'in cons',
//        email: '',
//        password: ''
// };

class LoginScreen extends React.Component {
  constructor(props: any){
    super(props);
      this.state = {
        hideImage: false, 
        apicheck: [],
        click: 'in cons',
        email: '',
        password: ''
      }
  }
  onChangeText = (type: string,  text: string) =>{
    if(type === "type"){
      this.setState({
        email: text
      })
    } else{
      this.setState({
        password: text
      })
    }
  }
  onLogin = () =>{
    debugger
    const {email, password} = this.state;
    const {navigate} = this.props.navigation;
    this.props.userLogin({email, password}, navigate)
  }
    
  render(){
    const {navigate} = this.props.navigation;
    const {email, password} = this.state;
    return (
      <View style={styles.loginContainer}>
        <View style={styles.loginCard}>
          <View>
            <Text style={styles.loginHeader}>Login</Text>
          </View>
          <View><Text style={styles.labelstyle}>Email Id</Text></View>
          <TextInput
          style={styles.inputLoginStyle}
          placeholder='Email address'
          onChangeText={text => this.onChangeText("email", text)}
          value={email}
          />
          <View><Text style={styles.labelstyle}>Password</Text></View>
          <TextInput
            style={styles.inputLoginStyle}
            placeholder='Password'
            onChangeText={text => this.onChangeText("password", text)}
            value={password}
          />
          <View><Text style={styles.forgotStyle} onPress={() => navigate('SignUpScreen')}>Forgot Password</Text></View>
          <View>
            <TouchableHighlight
              activeOpacity={1} 
              underlayColor='none'
              onPress= {() => this.onLogin()}
            >   
              <Text style={styles.loginButtonStyle}
              >Login</Text>
            </TouchableHighlight>
          </View>
        <View style={styles.signupText}>
          <Text>Do not have an account?</Text>
          <Text style={styles.signUpColor} onPress={() => navigate('SignUpScreen')}> Sign Up</Text>
        </View>
        </View>
      </View>
    );     
  }
};

export default LoginScreen;