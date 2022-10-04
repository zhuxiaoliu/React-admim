/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 13:45:08
 */
import { legacy_createStore as createStore,combineReducers,compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from "redux";
import storage from 'redux-persist/lib/storage';
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import user from "@/redux/user/reducer";
import menu from "@/redux/menu/reducer";
import breadcrumb from '@/redux/breadcrumb/reducer';
const reducer = combineReducers({
	user,
  menu,
  breadcrumb
});
const persistConfig = {
    key: 'redux-state',
    storage: storage,
    whiteList:['user']
  };
  const persistReducerConfig = persistReducer(persistConfig, reducer);
  
// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建 store
const store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };

