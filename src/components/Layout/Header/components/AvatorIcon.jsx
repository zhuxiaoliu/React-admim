/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-26 16:54:16
 */
import { Avatar, Dropdown,Modal,message,Menu } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import avatar from '@/assets/svg/avator.svg';
import { setToken } from '@/utils/auth';
import { useNavigate } from "react-router-dom";
const AvatarIcon=(props)=>{
      	// 点击当前菜单跳转页面
	const navigate = useNavigate();
    	// 退出登录
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				setToken("");
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};
    	// Dropdown Menu
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span className="dropdown-item">退出登录</span>,
					onClick: logout
				}
			]}
		></Menu>
	);
    return (
		<>
			<Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={avatar} />
			</Dropdown>
		</>
	);
    
}
export default AvatarIcon;