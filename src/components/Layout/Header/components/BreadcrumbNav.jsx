/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-22 13:43:56
 */
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const BreadcrumbNav = (props) => {
	const { pathname } = useLocation();
	const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || [];
   const {breadcrumbFlag}=props.breadcrumb

	return (
		<>
			{breadcrumbFlag?<Breadcrumb>
                {breadcrumbList.map(item => {
                    return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
                })}
			</Breadcrumb>:null}
		</>
	);
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(BreadcrumbNav);