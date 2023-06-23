import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer} from "./app-reducer";



const rootReducer = combineReducers({
    app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>


// @ts-ignore
window.store = store;

export default store;
