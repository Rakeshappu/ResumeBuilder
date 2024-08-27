import React, { useContext, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { AuthContext } from '../AuthContext';
import styles from './Navbar.module.css';
import { gapi } from 'gapi-script';
import { jwtDecode } from 'jwt-decode'; // Correct import for jwt-decode
import { googleLogout } from '@react-oauth/google'; // Correct import for Google logout

const clientId = '453773849620-ielhub36alcrocta0av375e4e98j2900.apps.googleusercontent.com';  // Replace with your Google Client ID

function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log("Current User:", user);

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
    console.log('Login Success: response:', response);

    try {
      const decoded = jwtDecode(response.credential); 
      console.log('Decoded Token:', decoded);

      const profile = {
        name: decoded.name,
        imageUrl: decoded.picture,
        email: decoded.email,
      };

      if (profile && profile.name) {
        login(profile);
      } else {
        console.error('No profile information found in decoded token');
      }
    } catch (error) {
      console.error('Failed to decode JWT token:', error);
      alert('Failed to retrieve profile information. Please try again.');
    }
  };

  const onFailure = (response) => {
    console.error('Login failed:', response);
    alert('Failed to login. See console for more details.');
  };

  const handleLogout = () => {
    googleLogout(); 
    logout(); 
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Resume Builder</h1>
      {user ? (
        <div className={styles.username}>
          {user.name}
          <img src={user.imageUrl} alt={user.name} className={styles.profileImage} />
          <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </nav>
  );
}

export default Navbar;
