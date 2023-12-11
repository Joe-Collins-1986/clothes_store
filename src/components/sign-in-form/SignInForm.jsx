import { useState } from "react";
import FormInput from "../form-input/FormInput";
import "../sign-in-form/sign-in-form-styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGoogleRedirect();

    //POP UP BUILT WITH TRY CATCH TO RESOLVE CLOSE ERROR
    // try {
    //   await signInWithGooglePopup();
    // } catch (err) {
    //   return;
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        // Latest update firebase generic error code for security so not worth switch
        case "auth/invalid-login-credentials":
          alert("Invalid details");
          break;
        case "xxx":
          alert("xxx");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
