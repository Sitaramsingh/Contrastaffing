// import {connect} from "react-redux";
import { connect } from 'react-redux'


// component
import LoginScreen from "../Components/LoginScreen";

//actions
import {userLogin} from '../Redux/Actions';


const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogin: (text: object, navigation: Function) => {dispatch(userLogin(text, navigation))}
  }
}

  export default connect(
    null,
    mapDispatchToProps
  )(LoginScreen)
