import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const loginGoogleUser = async () => {
        const res = await signInWithGooglePopup();
        await createUserDocumentFromAuth(res);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginGoogleUser}>
                Sign in with Google
            </button>
        </div>
    );
}

export default SignIn;