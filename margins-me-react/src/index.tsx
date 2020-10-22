import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Pages, { Loading } from './pages';
import './index.less';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { cache, accessTokenVar, isLoggedInVar } from './cache';

import { Amplify, Auth } from 'aws-amplify';
import awsConfig from './aws.config';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: awsConfig.cognito.REGION,
    userPoolId: awsConfig.cognito.USER_POOL_ID,
    identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: awsConfig.cognito.APP_CLIENT_ID
  }
});


const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`

const httpLink = createHttpLink({
  uri: 'http://ec2-34-232-69-157.compute-1.amazonaws.com:8080/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get access token from cache if exists
  const accessToken = accessTokenVar();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : ""
    }
  }
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  // headers: {
  //   'client-name': 'Margins Me [dev]',
  //   'client-version': '1.0.0',
  // },
  typeDefs,
  connectToDevTools: true,
});


function CheckLogin() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  Auth.currentSession().then(user => {
    console.log(user);
    console.log(user.getAccessToken());

    if (!!user && !!user.getAccessToken()) {
      accessTokenVar(user.getAccessToken().getJwtToken());
      isLoggedInVar(true);
    }
  }).finally(() => {
    console.log('heloo');
    setIsAuthenticating(false);
  });


  return (
    isAuthenticating ? <Loading /> : <Pages />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CheckLogin />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
