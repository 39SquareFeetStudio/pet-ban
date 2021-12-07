import * as React from "react";
import Layout from "./components/Layout/Layout";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ForgotPage from "./pages/ForgotPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/auth"} element={<AuthPage />} />
        <Route path={"/forgot"} element={<ForgotPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
