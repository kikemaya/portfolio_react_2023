import { useEffect, useState } from "react";

// IMPORT FIREBASE CONFIG
import { auth, database } from "../../firebase/firebaseConfig";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { onValue, ref, set } from "firebase/database";

// UUID, EXTERNAL LIBRARY
import { v4 } from "uuid";

// CUSTOM ALERTS, EXTERNAL LIBRARY
import Swal from "sweetalert2";

// CUSTOM FUNCTION TO GET A FORMATTED DATE TIME
import { getCurrentDateTime } from "../../data";

const Opinions = () => {
  // STATE TO KNOW IF THERE'S A USER SIGNED IN
  const [myUserAuth, setMyUserAuth] = useState(null);

  // SINGLE OPINION
  const [singleComment, setSingleComment] = useState("");

  // ARRAY OF ALL OPINIONS
  const [opinions, setOpinions] = useState([]);

  async function signInForComment() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  }

  async function logOut(e) {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }

  const handleUserSubmitOpinion = (e) => {
    e.preventDefault();

    set(ref(database, "clientOpinions/" + v4()), {
      postId: v4(),
      userName: myUserAuth.displayName,
      profilePic: myUserAuth.photoURL,
      opinion: singleComment,
      timestamp: getCurrentDateTime(),
    })
      .then(() => {
        console.log("Opinion published successfully");
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire("Unsuccessfull, something went wrong!");
        console.error(err);
      });
  };

  const getAllOpinions = () => {
    console.log("opninion");
    const dbRef = ref(database, "clientOpinions");

    onValue(dbRef, (snapshot) => {
      const arr = [];

      snapshot.forEach((childSnapshot) => {
        arr.push(childSnapshot.val());
      });

      setOpinions(arr);
    });
  };

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setMyUserAuth(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    getAllOpinions();
  }, []);

  return (
    <div className="bg-tertiary bg-hero-pattern flex flex-col w-full justify-center">
      {
        // IF THERE'S AN AUTHENTICATED USER, SHOW THE SIGN IN BAR, ELSE, SHOW THE LOG OUT BAR AND THE FORM
        myUserAuth === null ? (
          <div className="flex flex-col w-full items-center py-10">
            <div className="flex items-center gap-5">
              <p>Do you want to let me know your opinion?</p>
              <button
                className="btn bg-white text-blue-600
                  rounded-md hover:bg-white"
                onClick={signInForComment}
              >
                Sign In with Google
              </button>
            </div>
          </div>
        ) : (
          // FORM TO SEND AN OPINION
          <div
            className={`flex flex-col gap-5 
            bg-tertiary bg-hero-pattern p-10
            ${opinions.length > 0 ? "pb-0" : "pb-10"}`}
          >
            <form
              className="flex items-center justify-between gap-5"
              onSubmit={logOut}
            >
              <p className="text-xl">
                Welcome, {auth.currentUser.displayName}!
              </p>
              <button className="btn bg-accent rounded-md">Log out</button>
            </form>

            <form
              onSubmit={handleUserSubmitOpinion}
              className="flex gap-5 items-center"
            >
              <input
                type="text"
                placeholder="Write an opinion"
                className="input focus:outline-blue-600 rounded-md"
                onChange={(e) => setSingleComment(e.target.value)}
              />
              <button
                className="btn btn-lg
                bg-blue-600 hover:bg-blue-800 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        )
      }
      {/* PRINT OPINIONS SECTION */}
      <div
        className={`flex gap-5 flex-wrap justify-center 
        ${opinions.length > 0 ? "py-10" : "py-0"}`}
      >
        {opinions.length > 0 &&
          opinions.map((user) => {
            return (
              <div
                className="gap-5 p-5
                bg-primary bg-hero-pattern rounded-lg w-96"
                key={user.postId}
              >
                <div className="flex flex-col gap-5">
                  <p className="flex gap-3">
                    <img
                      src={user.profilePic}
                      alt="profile pica"
                      className="rounded-full w-10"
                    />
                    <b>{user.userName}</b>
                  </p>
                  <p>{user.opinion}</p>
                  <p>{user.timestamp}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Opinions;
