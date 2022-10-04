/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-08-29 15:23:59
 */
import React,{ useState } from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import setUserInfo from "@/redux/user/action";
import {login} from '@/api/login';
import { setToken } from '@/utils/auth';
import loginImg from '@/assets/svg/login.svg';
import logo from '@/assets/svg/logo.svg';
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import './index.less'

const Login = (props) => {
  const navigate = useNavigate();
  const { setUserInfo } = props;
  const [loading, setLoading] = useState(false);
    const onFinish = (params) => {
        login(params).then(data=>{
         if(data.data.success){
          const userInfo = data.data.userInfo || {}
          const token = userInfo.token
          setUserInfo(userInfo)
          setToken(token)
          navigate('/home');
          }
        }).catch(err=>{
          console.log(err)
      })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
      <div className="login-container">
        <div className="login-box">
          <div className='login-left'>
            <img src={loginImg} alt="" />
          </div>
          <div className='login-form'>
          <div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">React-Admin</span>
					</div>
            <Form name="basic"
                labelCol={{ span: 5}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                size="large"
            >
              <Form.Item label="用户名" name="username"  rules={[{ required: true, message: '请输入用户名！'}]}>
                <Input placeholder="用户名：admin"   prefix={<UserOutlined />}/>
              </Form.Item>
              <Form.Item label="密码" name="password"   rules={[{ required: true, message: '请输入密码!'}]}>
                <Input.Password placeholder="密码：123456" prefix={<LockOutlined />} />
              </Form.Item>
              <Form.Item  className="login-btn">
                <Button onClick={() => { form.resetFields();}} icon={<CloseCircleOutlined />}>
                重置
                </Button>
                <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
                提交
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
}
const mapDispatchToProps = { setUserInfo };
export default connect(null, mapDispatchToProps)(Login);