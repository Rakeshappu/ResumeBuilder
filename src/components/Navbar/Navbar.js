// Navbar.js
import React, { useContext, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../AuthContext';
import styles from './Navbar.module.css';
import { gapi } from 'gapi-script';

const clientId = '453773849620-ielhub36alcrocta0av375e4e98j2900.apps.googleusercontent.com';  // Replace with your Google Client ID

function Navbar() {
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'profile email'
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    login(response.profileObj);
    alert(`Logged in successfully. Welcome ${response.profileObj.name}.`);
  };

  const onFailure = (response) => {
    console.error('Login failed:', response);
    alert('Failed to login. See console for more details.');
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Resume Builder</h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </nav>
  );
}

export default Navbar;
