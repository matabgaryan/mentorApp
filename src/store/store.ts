import {combineReducers, configureStore, PreloadedState} from "@reduxjs/toolkit";
import employeesReducer from "./slices/employees";
import mentorsReducer from "./slices/mentors";
import authReducer from './slices/auth';
import {RootState} from "~core/types";

export const store = configureStore({
    reducer:{
        applications: employeesReducer,
        mentors: mentorsReducer,
        auth: authReducer,
    },
})
const rootReducer = combineReducers({
    applications: employeesReducer,
    mentors: mentorsReducer,
    auth: authReducer,
});


export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

