import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Form, Input, Button } from 'antd';
import { PageLayout } from '../components';

import { confirmSignup } from '../amplify/auth';
import { currentAccountVar, passwordVar } from '../apollo/cache';
import { useQuery, gql } from '@apollo/client';

import styled from '@emotion/styled';

const CenteredDiv = styled.div`
  margin: 0 auto;
  width: 75%;
  max-width: 250px;

  .verify-button {
    width: 100%;
  }
`;

const CURRENT_EMAIL = gql`
  query getCurrentEmail {
    currentAccount @client {
      email
    }
  }
`;

const ConfirmSignup = () => {

  const { data } = useQuery(CURRENT_EMAIL);
  const [isLoading, setIsLoading] = useState(false);

  const email = data.currentAccount.email;

  const onFinish = async (values: any) => {
    console.log('success: ', values);
    setIsLoading(true);
    const signupConfirmResponse = await confirmSignup(
      email,
      passwordVar(),
      values.code
    );
    if (signupConfirmResponse.account !== undefined) {
      const account = signupConfirmResponse.account;
      console.log(account);
      //clear passwordVar after confirming and signing in
      passwordVar('');
      navigate('/');
    } else {
      console.log(signupConfirmResponse.error);
      setIsLoading(false);
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('failed', errorInfo);
  }

  return (
  <PageLayout>
    <CenteredDiv>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              type: "string",
              min: 6,
              max: 6,
              message: 'Must be 6 digits'
            },
            {
              validator: (_, value) => {
                if (isNaN(value)) {
                  return Promise.reject('Only digits are allowed');
                }
                return Promise.resolve();
              }
            }
          ]}
        >
          <Input
            placeholder="6-digit verification code"
            type="string"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" loading={isLoading} htmlType="submit" className="verify-button">
            Verify
          </Button>
        </Form.Item>
      </Form>
    </CenteredDiv>
  </PageLayout>
  );
};

export default ConfirmSignup;