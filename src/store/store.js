import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import { loggerMiddleware } from "../middleware/logger";
import logger from "redux-logger";

// import { thunk } from "redux-thunk";
import { rootSaga } from "./root-saga";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
  // thunk,
].filter(Boolean);

const composedEnhancer =
  compose(
    process.env.NODE_ENV !== "production" &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);