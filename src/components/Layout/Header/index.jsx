/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-21 13:46:54
 */
import React from 'react';
import {Layout} from 'antd';
import BreadcrumbNav from './components/BreadcrumbNav';
import  CollapseIcon from './components/CollapseIcon';
import FullScreen from './components/FullScreen';
import Theme from './components/Theme';
import AvatarIcon from './components/AvatorIcon';
import './index.less'
const LayoutHeader = () => {
	const { Header } = Layout;
    return (
		<Header>
            <div className="header-lf">
                <CollapseIcon></CollapseIcon>
                <BreadcrumbNav></BreadcrumbNav>
            </div>
            <div className="header-ri">
                <Theme></Theme>
                <FullScreen></FullScreen>
                <AvatarIcon></AvatarIcon>
            </div>
        </Header>
       )
}
export default LayoutHeader;