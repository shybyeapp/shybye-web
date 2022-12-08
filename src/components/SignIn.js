import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin">
      <GoogleButton onClick={handleGoogleSignin} />
    </div>
  );
};

export default SignIn;
