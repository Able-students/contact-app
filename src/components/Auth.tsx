import { Button, Form, Input, Layout, Alert,Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userActions from '../store/actions/userActions';

import store from '../store/store';
import { useSelector } from 'react-redux';
import { InitialStateType } from '../store/reducer/userReducer';
import Register from './Registration';

import './styles/auth.css';

const { Header } = Layout ;
const Auth = () => {
    // const id = useId() 
    const navigate = useNavigate()
    const [loginForm] = Form.useForm();
    // const [registerForm] = Form.useForm();
    const [loginError, setLoginError] = useState<boolean|string>(false)
    // const [registerError, setRegisterError] = useState<boolean|string>(false)

    const login = () => {
        const user = {
            email: loginForm.getFieldValue('email'),
            password: loginForm.getFieldValue('password')
        }
        userActions.login(user,setLoginError,navigate)
    }
    // const register = () => {
        
    //     let password = registerForm.getFieldValue('password')
    //     let password2 = registerForm.getFieldValue('password2')
    //     if(password === password2){
    //         const user = {
    //             id,
    //             email: registerForm.getFieldValue('email'),
    //             username: registerForm.getFieldValue('username'),
    //             password
    //         }
    //         userActions.register(user)
    //     }else{
    //         setRegisterError("Passwords didn't match")
    //     }
    // }
    type RootState = ReturnType<typeof store.getState>
    const { userVariant } = useSelector((state: RootState) => state.userReducer) as InitialStateType
    return(
    <div className='auth-block'>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <h3 className='header__text'>My book</h3>
        </Header>
        <div className='row'>
            {userVariant?
            <Form
                form={loginForm}
                className={'auth-forms'}
                >
                <Form.Item label="Email" name='email'>
                    <Input placeholder="Enter email" />
                </Form.Item>
                <Form.Item label="Password" name='password'>
                    <Input placeholder="Enter Password" type="password" />
                </Form.Item>
                {loginError && <Alert message={loginError} type="error"  style={{marginBottom: '16px'}} />}
                <Form.Item>
                    <Space direction='vertical' style={{width:'100%'}}>
                        <Button type="primary" block onClick={() => login()}>Login</Button>
                        <Button type="link" block onClick={() => userActions.variant()}>Register</Button>
                    </Space>
                </Form.Item>
            </Form>:
            <Register/> 
            }
            {/* <Form
                form={registerForm}
                className={'auth-forms'}
                >
                <Form.Item label="Username" name='username'>
                    <Input placeholder="Enter username" />
                </Form.Item>
                <Form.Item label="Email" name='email'>
                    <Input placeholder="Enter email" />
                </Form.Item>
                <Form.Item label="Password" name='password'>
                    <Input placeholder="Enter Password" type="password" />
                </Form.Item>
                <Form.Item label="Repeat password" name='password2'>
                    <Input placeholder="Enter Password" type="password" />
                </Form.Item>
                {registerError && <Alert message={registerError} type="error" style={{marginBottom: '16px'}} />}
                <Form.Item>
                    <Space direction='vertical' style={{width:'100%'}}>
                        <Button type="primary" block onClick={() => register()}>Register</Button>
                        <Button style={{marginLeft:30}} type="link" onClick={() => setFlag(!flag)}>Login</Button>
                    </Space>
                </Form.Item>

            </Form> */}
            
        </div>
    </div>)
}

export default Auth