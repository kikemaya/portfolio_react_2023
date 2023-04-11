import { useState } from "react";
import { useNavigate } from "react-router-dom";

// FIREBASE CONFIG
import { auth, db, storage } from "./../../firebase/firebaseConfig";

import { signOut } from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";

import { ref, uploadBytes } from "firebase/storage";

// UUID, EXTERAL LIBRARY
import { v4 } from "uuid";

// FUCNTION TO GENERATE A DATETIME FORMAT
import { getCurrentDateTime } from "../../data";

// ALERT GENERATOR, EXTERNAL LIBRARY
import Swal from "sweetalert2";

const AdminPanel = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  // REDIRECT FUNCTION FROM REACT ROUTER DOM
  let navigate = useNavigate();

  // ALERT TEMPLATE INTERFACE
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleAdminPostSubmit = async (e) => {
    try {
      e.preventDefault();

      const imgRefString = `images/${v4()}`;
      const imageRef = ref(storage, imgRefString);

      await addDoc(collection(db, "posts"), {
        id: v4(),
        title: postTitle,
        content: postContent,
        image: imgRefString,
        timestamp: getCurrentDateTime(),
      });

      await uploadBytes(imageRef, imageUpload);

      Toast.fire({
        icon: "success",
        title: "your post was successfully added",
      });

      e.target.reset();
    } catch (err) {
      Toast.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });

      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-hero-pattern h-screen">
      <div className="flex items-center justify-between w-full max-w-[780px]">
        <h1 className="text-xl">Admin Panel</h1>
        <button
          className="
        btn btn-lg
        bg-accent hover:bg-secondary-hover"
          onClick={logOut}
        >
          Logout
        </button>
      </div>

      <h2 className="w-full max-w-[780px] my-3 text-3xl">
        Let's try to add a new post!
      </h2>

      <form
        className="space-y-8 w-full max-w-[780px]"
        onSubmit={handleAdminPostSubmit}
      >
        <input
          className="input"
          type="text"
          placeholder="Please, give me the post title"
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />

        <label htmlFor="image_uploader">Please, add a picture </label>
        <input
          id="image_uploader"
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />

        <textarea
          className="textarea"
          placeholder="Please, write a post..."
          onChange={(e) => setPostContent(e.target.value)}
          required
        ></textarea>

        <button
          className="
            btn btn-lg
            bg-accent hover:bg-secondary-hover
            "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
