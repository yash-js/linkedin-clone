import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../fireabase";
import { login } from "../features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const nameNotify = () => toast.error("Full Name is Required");

  const errorNotify = (err) => toast.error(err);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const register = () => {
    if (!name) {
      return nameNotify();
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePicture,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoURL: userAuth.user.photoURL,
            })
          );
        })
        .catch((err) => errorNotify(err.message));
    });
  };

  console.log(login);
  const loginToApp = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => errorNotify(err.message));
  };

  return (
    <div className="login">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <img
        src="http://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (Required if registering)"
        />

        <input
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          type="text"
          placeholder="Profile Picture Url"
        />

        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />

        <input
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
        />

        <button onClick={loginToApp} type="submit">
          Sign In
        </button>
      </form>

      <p>
        Not a member ?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
