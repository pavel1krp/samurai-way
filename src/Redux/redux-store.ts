import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReduser";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

//@ts-ignore
window.store = store