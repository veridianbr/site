import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <div className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
