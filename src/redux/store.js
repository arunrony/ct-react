import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSageMiddleware from 'redux-saga'
import rootReducer from "./rootReducer";
import {watcherSaga} from "./sagas/rootSaga";

const sagaMiddleware = createSageMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(watcherSaga)

export default store;