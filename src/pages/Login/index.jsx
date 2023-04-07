import React, { useState } from "react";
import Logo from "./../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

import { auth } from "./../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const { userAuth } = useAuth();

  let navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // CAMBIAR A ASYNC AWAIT
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        navigate("/admin");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-hero-pattern w-full h-[100vh]">
      <form
        className="space-y-8 w-full max-w-[320px] mx-auto pt-40"
        onSubmit={handleSubmit}
      >
        <div className="flex items-end gap-5">
          <img src={Logo} alt="" className="h-14" />
          <h4 className="font-body text-xl mb-1">Welcome, Enrique 😎</h4>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Please, enter your email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Please, enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="btn btn-lg
            bg-accent hover:bg-secondary-hover"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
