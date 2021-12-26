import * as React from "react";
import Layout from "./components/Layout/Layout";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./components/PrivateRoute/PrivateRoute"; //登入驗證機制
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ForgotPage from "./pages/ForgotPage";
import AboutPage from "./pages/AboutPage";
import MemberPage from "./pages/MemberPage"; //待加入登入驗證

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/auth"} element={<AuthPage />} />
        <Route path={"/forgot"} element={<ForgotPage />} />
        <Route
          path={"/about"}
          element={
            <RequireAuth>
              <AboutPage />
            </RequireAuth>
          }
        />
        <Route path={"/member"} element={<MemberPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
