/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 14:27:12
 */
import produce from "immer";
import * as types from "@/redux/mutation-types";
const menuState={
    menuList:null,
	isCollapse:false
};
const menu = (state = menuState,action)=>
    produce(state, draftState => {
		switch (action.type) {
			case types.SET_MENULIST:
				draftState.menuList = action.menuList;
				break;
				case types.UPTATE_COLLAPSE:
				draftState.isCollapse = action.isCollapse;
				break;
			default:
				return draftState;
		}
	})
export default menu;