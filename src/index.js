/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-08-29 14:38:31
 */
import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import "@/assets/iconfont/iconfont.less";
import reportWebVitals from '@/reportWebVitals';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux";
import App from '@/App'
import '@/index.less'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
		<PersistGate persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
    
);
reportWebVitals();
