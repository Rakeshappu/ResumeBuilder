import { GoogleLogout } from 'react-google-login';

const clientId = '453773849620-ielhub36alcrocta0av375e4e98j2900.apps.googleusercontent.com';  // Replace with your Google Client ID

const onSuccess = (res) => {
    console.log('Logout Success: currentUser:', res.profileObj);
};


function Logout(){
    <div className="signOutbutton">
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess = {onSuccess}
      />
    </div>
}

export default Logout;