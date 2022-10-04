/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 13:36:55
 */

import * as types from "@/redux/mutation-types";

// * setBreadCrumb
export const setBreadcrumbList= (breadcrumbList) => ({
	type: types.SET_BREADCRUMB_LIST,
	breadcrumbList
});

export const setBreadcrumbFlag= (breadcrumbFlag) => ({
	type: types.SET_BREADCRUMB_FLAG,
	breadcrumbFlag
});