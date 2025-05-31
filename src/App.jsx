import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <div className="h-screen overflow-y-scroll ">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
