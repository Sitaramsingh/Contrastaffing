import {USER_LOGIN} from '../Constants/type';

const initialState = {
    users: []
  }
function userLogin(state: any, payload: any){
  debugger
  const newState = payload
  return  newState
}  

export function users(state=initialState, action: any){
    switch (action.type){
      case USER_LOGIN:
        return userLogin(state, action.payload) 

      default:
        return state;
    }

}