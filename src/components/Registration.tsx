import { Button, Form, Input, Space, Alert } from 'antd';
import { useId, useState } from 'react';
import * as userActions from '../store/actions/userActions';

import './styles/auth.css';

export default function Register(){    
    const id = useId();
    const [registerForm] = Form.useForm();
    const [registerError, setRegisterError] = useState<boolean|string>(false);
    const register = () => {
        let password = registerForm.getFieldValue('password')
        let password2 = registerForm.getFieldValue('password2')
        if(password === password2){
            const user = {
                id,
                email: registerForm.getFieldValue('email'),
                username: registerForm.getFieldValue('username'),
                password
            }
            userActions.register(user)
            userActions.variant()
        }else{
            setRegisterError("Passwords didn't match")
        }
    }

    return(
        <>
            <Form
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
                        <Button block type="link" onClick={() => userActions.variant()}>Login</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}