import React, { Fragment, useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import { currentAccountVar, passwordVar } from '../cache';
import { gql, useQuery } from '@apollo/client';
import { useNavigate, Link } from 'react-router-dom';

const CenteredDiv = styled.div`
  margin: 0 auto;
  width: 50%;

  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`;

const Login = () => {

  const [form] = Form.useForm();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [wrongPassword, setWrongPassword] = useState("");

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const { username, password } = values;
    setIsLoading(true);

    try {
      const user: CognitoUser = await Auth.signIn(username, password);
      const userSession = user.getSignInUserSession();
        if (!userSession) throw new Error('sign in session null');
        const accessToken = userSession.getAccessToken().getJwtToken();
  
        const { attributes } = await Auth.currentAuthenticatedUser();
  
        currentAccountVar({
          isLoggedIn: true,
          accessToken,
          email: attributes.email,
          sub: attributes.sub
        });
      
      navigate('/');
    } catch (error) {
      console.log('error logging in:', error);
      const code = error.code;
      switch (code) {
        case 'UserNotConfirmedException':
          alert('Your account is not verified, please confirm your account!');
          currentAccountVar({
            ...currentAccountVar(),
            email: username
          });
          passwordVar(password);
          navigate('/confirm-signup');
          break;
        case 'NotAuthorizedException':
          setIsLoading(false);
          setWrongPassword('Wrong Password');
          return true;
        case 'PasswordResetRequiredException':
          return true;
        default:
            return false;
      }
    }
  };


  return (
    <CenteredDiv>
      <Form
        name="normal-login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item
          help={wrongPassword}
        >
          <Button type="primary" loading={isLoading} htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/signup">sign up now!</Link>
        </Form.Item>
      </Form>
    </CenteredDiv>
  );
}

export default Login;