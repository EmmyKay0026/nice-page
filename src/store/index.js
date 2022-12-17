import { createStore } from "redux";


const hamburgerReducer = (state = {hamburger: false}, action)=>{
    if(action.type === 'open'){
        return  {hamburger: state.hamburger = true}
    }
    if(action.type === 'close'){
        return  {hamburger: state.hamburger = false}
    }
    return state
}


const store = createStore(hamburgerReducer)


export default store