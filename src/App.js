/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-08-29 14:38:31
 */

import './App.less';
import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import  Router from '@/router/index';
import  AuthRouter from '@/router/utils/authRouter'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AuthRouter>
            <Router />
          </AuthRouter>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;