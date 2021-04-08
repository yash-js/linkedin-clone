import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import FlipMove from "react-flip-move";
import "./Feed.css";
import { db } from "../fireabase";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamps", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts")
      .add({
        name: user.displayName,
        description: user.email,
        message: input,
        timestamps: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL || user.displayName[0],
      })
      .then(() => setInput(""));
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              placeholder="Write Something and Hit Enter"
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />

          <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />

          <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />

          <InputOption
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, timestamps, photoURL },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
