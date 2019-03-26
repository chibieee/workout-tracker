import { createStore } from "redux";
import rootReducer from './reducers/index'

import testWorkoutData from './testWorkoutdata';
import testViewData from './testViewData';

const defaultState = {
    workouts: testWorkoutData,
    view: testViewData
};

const store = createStore(rootReducer, defaultState);
export default store;