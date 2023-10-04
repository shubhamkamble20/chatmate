import React, { useState } from "react";
import "./NavBar.css";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
// import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const NavBar = () => {
  // const [user, setUser] = useState(false);
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};
  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="nav-bar">
      <h1 style={{color:'white'}}>Chatmate</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};
export default NavBar;