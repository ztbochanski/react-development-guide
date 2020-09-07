import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-page.styles.scss";

const SignInPage = () => (
  <div className="sign-in-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInPage;
