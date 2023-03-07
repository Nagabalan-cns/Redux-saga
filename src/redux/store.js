import { applyMiddleware, createStore } from "redux";
import rootreducer from "./reducer/index";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import { configureStore } from "@reduxjs/toolkit";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootreducer,
    middleware: (getDefaultMiddleware) =>[
        ...getDefaultMiddleware(),
        sagaMiddleware()
    ]
    
});
sagaMiddleware.run(rootSaga);
export default store;



