/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 15:59:04
 */
import * as types from "@/redux/mutation-types";

// * setUserInfo
const setUserInfo= (userInfo) => ({
	type: types.SET_USERINFO,
	userInfo
});
export default setUserInfo