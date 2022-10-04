/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 13:36:55
 */

import * as types from "@/redux/mutation-types";

// * setMenuList
export const setMenuList= (menuList) => ({
	type: types.SET_MENULIST,
	menuList
});
export const updateCollapse= (isCollapse) => ({
	type: types.UPTATE_COLLAPSE,
	isCollapse
});
