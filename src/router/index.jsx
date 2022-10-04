/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-08-29 15:22:01
 */
import React, { useState, useEffect } from "react";
import { Navigate} from "react-router-dom";
import {useRoutes} from "react-router-dom";
import Login from "@/views/login/index";
import routerArray  from './modules/index';
/**
 * 静态路由
 */
 export const rootRouter=[
  {
		path: "/",
		element: <Navigate to="/login" />
	},
  {
    path: "/login",
    element: <Login />,
    meta: {
			title: "登录页",
			key: "login",
      requiresAuth: false
		}
  },
  ...routerArray
]
const Router = () => {
  const routes = useRoutes(rootRouter);
	return routes;
};
export default Router;