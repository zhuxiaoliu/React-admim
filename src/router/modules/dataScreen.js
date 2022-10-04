/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-10-03 11:55:59
 */
import  lazyLoad from '@/router/utils/lazyLoad';
import React from "react";
const dataScreen= [
    {
        path: "/dataScreen",
        element: lazyLoad(React.lazy(() => import("@/views/dataScreen/index"))),
        meta: {
            requiresAuth: true,
            title: "数字大屏",
            key: "dataScreen"
        }
    }
]
export default dataScreen;