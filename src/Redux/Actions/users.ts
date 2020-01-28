import {USER_LOGIN} from "../Constants/type";
import axios from "axios";

  export function userLogin(payload:object, navigation: Function) {
    return(dispatch: Function)=> {
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
        dispatch({
          type: USER_LOGIN,
          payload: res.data,
        },navigation('SignUpScreen'))
      })
      // .catch((error) =>{
      //   console.log("error", error)
      // })
    }
  }