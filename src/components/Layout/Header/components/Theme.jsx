/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-21 14:51:05
 */
import React,{useState}from 'react'
import { connect } from "react-redux";
import {Drawer,Divider,Switch} from 'antd';
import { SettingOutlined } from "@ant-design/icons";
import { updateCollapse } from "@/redux/menu/action";
import {setBreadcrumbFlag} from '@/redux/breadcrumb/action';
const Theme=(props)=>{
    const [visible, setVisible] = useState(false);
    const {  updateCollapse,setBreadcrumbFlag } = props;
    const { isCollapse } = props.menu;
    const {breadcrumbFlag}=props.breadcrumb;
    return (
        <div>
            <i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					setVisible(true);
				}}
			></i>
            <Drawer
                title="布局设置"
                width={320}
                closable={false}
                onClose={() => {
					setVisible(false);
				}}
                visible={visible}
                >
                <Divider className="divider">
					<SettingOutlined />
					界面设置
				</Divider>
                <div className="theme-item">
					<span>折叠菜单</span>
					<Switch
						checked={isCollapse}
						onChange={e => {
							updateCollapse(e);
						}}
					/>
				</div>
                <div className="theme-item">
					<span>面包屑导航</span>
					<Switch
						checked={breadcrumbFlag}
						onChange={e => {
							setBreadcrumbFlag(e);
						}}
					/>
				</div>

            </Drawer>
        </div>
    )
}
const mapStateToProps = state => state;
const mapDispatchToProps = { updateCollapse,setBreadcrumbFlag};
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
