import { InMemoryCache, makeVar } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentAccount: {
          read() {
            return currentAccountVar();
          }
        },
        allPublications: relayStylePagination(),
      }
    }
  }
});

const currentAccountInitialValue = {
  isLoggedIn: false,
  accessToken: '',
  email: '',
  sub: ''
}

export const currentAccountVar = makeVar(currentAccountInitialValue);
//only used to temporarily hold password in state to confirm account
//cannot be queried from cache, only used in authentication components
export const passwordVar = makeVar('');