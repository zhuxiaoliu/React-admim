/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 14:27:12
 */
import produce from "immer";
import * as types from "@/redux/mutation-types";
const BreadcrumbState={
    breadcrumbList:{},
	breadcrumbFlag:true
};
const breadcrumb = (state = BreadcrumbState,action)=>
    produce(state, draftState => {
		switch (action.type) {
			case types.SET_BREADCRUMB_LIST:
				draftState.breadcrumbList = action.breadcrumbList;
				break;
				case types.SET_BREADCRUMB_FLAG:
				draftState.breadcrumbFlag = action.breadcrumbFlag;
				break;
			default:
				return draftState;
		}
	})
export default breadcrumb;