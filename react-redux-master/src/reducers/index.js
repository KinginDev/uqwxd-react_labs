import {combineReducers} from 'redux'


//sets the state to 0 on init
const counter = (state=0, action) => {
    if(action.type === 'INCREAMENT'){
        //This will increase the value of counter by
        // the value passed to the increment method
        return state + action.inc
    }
    //Returns the current value of the counter

    return state;
}

const myReducers = combineReducers({counter});

export default myReducers;