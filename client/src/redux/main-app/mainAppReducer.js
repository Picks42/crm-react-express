import usersTypes from './mainAppTypes';
const INITIAL_VALUE = {
  toaster:false,
  toasterMsg:"Hello World"
}
const shopReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case usersTypes.SET_TOASTER_MSG:
      return {
        ...state,
        toaster:true,
        toasterMsg: action.payload
      }
      case usersTypes.HIDE_TOASTER:
        return{
          ...state,
          toaster:false
        }
    default:
      return state
  }
}
export default shopReducer;