import { GoogleLogin } from 'react-google-login';

const clientId = '453773849620-ielhub36alcrocta0av375e4e98j2900.apps.googleusercontent.com';  // Replace with your Google Client ID


const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // login(response.profileObj);
    // alert(`Logged in successfully. Welcome ${response.profileObj.name}.`);
};

const onFailure = (res) => {
    console.log('Login failed:', res);
    // alert('Failed to login. See console for more details.');
};


export default Login;




function Login(){
    <div className="signInbutton">
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
}