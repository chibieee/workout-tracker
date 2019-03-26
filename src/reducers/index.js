import { combineReducers } from 'redux';
 
function workouts(state = [], action) {
    console.log('Change Workouts');
    console.log(state, action);
    return state;
}

function view(state = [], action) {
    console.log(state, action);
    return state;
}
 
const rootReducer = combineReducers({
    workouts, view
})

export default rootReducer;