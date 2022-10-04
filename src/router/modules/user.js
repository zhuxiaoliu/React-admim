/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 10:18:24
 */
import User from "@/views/user/index";
import Layout from '@/components/Layout/index'
const homeRouter =[{
    element:<Layout />,
    children: [
        {
            path: "/user",
            element: <User />,
            meta: {
                requiresAuth: true,
                title: "个人中心",
                key: "user"
            }
        }
    ]
}];
export default homeRouter;