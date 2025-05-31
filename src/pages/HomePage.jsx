import React from "react";
// import Header from '../components/Header';
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
};

export default HomePage;
