/*
 * @Descripttion: 路由守卫
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 13:12:39
 */
import { getToken } from '@/utils/auth'
import { Navigate ,useLocation} from "react-router-dom";
import { rootRouter } from "@/router/index";
import { searchRoute,handleRouter,findAllBreadcrumb } from "@/utils/util";
import {getMenuList} from '@/api/menu';
import  {setMenuList} from "@/redux/menu/action";
import {setBreadcrumbList} from '@/redux/breadcrumb/action'
import { connect } from "react-redux";

const AuthRouter=(props)=>{
  const { setMenuList,setBreadcrumbList,menuList} = props;
  const { pathname } = useLocation();
  const route = searchRoute(pathname, rootRouter);
  	// * 判断当前路由是否需要访问权限(不需要权限直接放行)
	if (!route.meta?.requiresAuth) return props.children;
  //  判断是否有token
  if(!getToken()){
        return <Navigate to="/login" replace />;
  }
  //判断是否获取菜单权限
  //const menuList = store.getState().menu.menuList;
  if(!menuList){
    getMenuList().then(data=>{
      //全局loading设置....
      const result = data.data || [];
      // 把路由菜单处理成一维数组，存储到 redux 中，做菜单权限判断
      setMenuList(result);
      // 根据菜单全量获取面包屑全量，存储到redux中
      setBreadcrumbList(findAllBreadcrumb(result));
      const dynamicRouter = handleRouter(result);
      	// * 如果访问的地址没有在路由表中重定向到403页面
	  if (dynamicRouter.indexOf(pathname) == -1) return <Navigate to="/403" />;
    })
  } else {
    const dynamicRouter = handleRouter(menuList);
    // * 如果访问的地址没有在路由表中重定向到403页面
    if (dynamicRouter.indexOf(pathname) == -1) return <Navigate to="/403" />;
  }
  
   return props.children;
}
const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { setMenuList,setBreadcrumbList };
export default connect(mapStateToProps, mapDispatchToProps)(AuthRouter);