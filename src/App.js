import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { logout, login, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./fireabase";
import Widgets from "./components/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
