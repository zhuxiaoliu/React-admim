/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 15:59:04
 */
import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {Menu} from 'antd';
import { searchRoute,getOpenKeys } from "@/utils/util";
import * as Icons from "@ant-design/icons";
import logo from "@/assets/svg/logo.svg";
import './index.less';

const SizeMenu=(props)=>{
  const { pathname } = useLocation();
  const {menuList,isCollapse} = props;
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const [openKeys, setOpenKeys] = useState([]);
  // 刷新页面菜单保持高亮
	useEffect(() => {
		setSelectedKeys([pathname]);
		isCollapse ? null : setOpenKeys(getOpenKeys(pathname));
	}, [pathname,isCollapse]);
  const getItem = (label, key, icon, children, type)=>{
    return {
      key,
      icon,
      children,
      label,
      type,
    }; 
   };
   	// 动态渲染 Icon 图标
	const customIcons= Icons;
	const addIcon = name => {
    return React.createElement(customIcons[name]);
	};
	// 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
	const deepLoopFloat = (menuList=[], newArr=[]) => {
		(menuList || []).forEach(item => {
			// 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
			if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, item.icon?addIcon(item.icon):null));
			newArr.push(getItem(item.title, item.path, item.icon?addIcon(item.icon):null, deepLoopFloat(item.children)));
		});
		return newArr;
	};
	// 设置当前展开的 subMenu
	const onOpenChange = (openKeys) => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	};
  	// 点击当前菜单跳转页面
	const navigate = useNavigate();
	const clickMenu = item => {
    const {key} =item;
		const route = searchRoute(key,menuList);
		if (route.isLink) window.open(route.isLink, "_blank");
		navigate(key);
	};
    return (
		<div className="sideMenu">
			<div className="logo-box">
				<img src={logo} alt="logo" className="logo-img" />
				{!isCollapse?<h2 className="logo-text">React Admin</h2>:null}
			</div>
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				openKeys={openKeys}
				items={deepLoopFloat(menuList)}
				selectedKeys={selectedKeys}
				onClick={clickMenu}
				onOpenChange={onOpenChange}
				></Menu>
      	</div>)
    
}
const mapStateToProps = state => state.menu;
const mapDispatchToProps = { };
export default connect(mapStateToProps, mapDispatchToProps)(SizeMenu);