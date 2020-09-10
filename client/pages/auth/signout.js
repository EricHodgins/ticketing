// Sign out must be called from a users browser.  The server
// does not know what to do with Cookies

import { useEffect } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

export default () => {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};
