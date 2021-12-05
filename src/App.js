import * as React from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/auth"} element={<AuthPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
