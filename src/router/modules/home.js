/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 10:18:24
 */
import Home from "@/views/home/index";
import Layout from '@/components/Layout/index'
const homeRouter =[{
    element:<Layout />,
    children: [
        {
            path: "/home",
            element: <Home />,
            meta: {
                requiresAuth: true,
                title: "首页",
                key: "home"
            }
        }
    ]
}];
export default homeRouter;