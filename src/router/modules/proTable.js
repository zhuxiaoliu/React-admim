/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-20 10:18:24
 */
import Layout from '@/components/Layout/index';
import UseHooks from '@/views/proTable/useHooks/index';
import UseComponent from '@/views/proTable/useComponent/index';
const proTableRouter =[{
    element:<Layout />,
    meta: {
        title: "超级表格"
    },
    children: [
        {
            path: "/proTable/useHooks",
            element: <UseHooks />,
            meta: {
                requiresAuth: true,
                title: "useHooks",
                key: "useHooks"
            }
        },
        {
            path: "/proTable/useComponent",
            element: <UseComponent />,
            meta: {
                requiresAuth: true,
                title: "useComponent",
                key: "useComponent"
            }
        }
    ]
}];
export default proTableRouter;