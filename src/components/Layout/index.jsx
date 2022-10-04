/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 16:12:54
 */
import React from 'react';
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "antd";
import SideMenu  from './SideMenu/index';
import LayoutHeader from "./Header";
import './index.less'


const LayoutContainer=(props)=>{
    const { Header, Footer, Sider, Content } = Layout;
    const { isCollapse} = props;
    return (
        <section className="container">
            <Sider width={220} theme="dark" collapsed={isCollapse}>
                <SideMenu></SideMenu>
            </Sider>
            <Layout>
                <LayoutHeader></LayoutHeader>
                <Content>
                    <Outlet></Outlet>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </section>
    )
    
}
const mapStateToProps = state => state.menu;
export default connect(mapStateToProps, null)(LayoutContainer);