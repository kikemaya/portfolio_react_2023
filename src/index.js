import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";

import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Error404 from "./components/ErrorPages";
import Error418 from "./components/ErrorPages/Error418";
import { AuthProvider } from "./contexts/AuthContext";

import PrivateRoute from "./components/PrivateRoute";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<App />} />
          <Route path="/coffe" element={<Error418 />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>,
  </React.StrictMode>,
  document.getElementById("root")
);
