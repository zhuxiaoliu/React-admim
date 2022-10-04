/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-26 16:41:38
 */
import { Spin } from "antd";
import "./index.less";

const Loading = ({ tip = "Loading" }) => {
	return <Spin tip={tip} size="large" className="request-loading" />;
};

export default Loading;
