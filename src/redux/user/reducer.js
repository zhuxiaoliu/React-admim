/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 14:27:12
 */
import produce from "immer";
import * as types from "@/redux/mutation-types";
const userState={
    userInfo:null
};
const user = (state = userState,action)=>
    produce(state, draftState => {
		switch (action.type) {
			case types.SET_USERINFO:
				draftState.userInfo = action.userInfo;
				break;
			default:
				return draftState;
		}
	})
export default user;