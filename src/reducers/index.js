import { combineReducers } from 'redux';
 
function workouts(state = [], action) {
    return state;
}

function view(state = [], action) {
    switch(action.type) {
        case 'CHANGE_CYCLE_VIEW':
        return action.num
        default:
        return state;
    }
}
 
const rootReducer = combineReducers({
    workouts, view
})

export default rootReducer;