/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 14:00:50
 */
import homeRouter from './home.js';
import userRouter from './user.js';
import proTableRouter from './proTable.js';
import dataScreenRouter from './dataScreen.js';
const  allRouters= [
    ...homeRouter,
    ...userRouter,
    ...proTableRouter,
    ...dataScreenRouter
]
 export default allRouters;