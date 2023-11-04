import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  //   auth,
  //   signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  // USE BELOW USE EFFECT FOR REDIRECT LOGIN
  //   useEffect(() => {
  //     const fetchRedirectResult = async () => {
  //       const response = await getRedirectResult(auth);

  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };

  //     fetchRedirectResult();
  //   }, []);

  const logGoogleUser = async () => {
    //CODE NOT WORKING TO CLOSE POP UP SO ADDED TRY CATCH BLOCK
    // const { user } = await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user);

    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log("Closed Popup:", err);
    }
  };

  return (
    <div>
      <h1>Sign in page!</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
