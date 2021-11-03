import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profile: profileReducer,
    form: formReducer
})
const store = createStore(reducers)

export default store;