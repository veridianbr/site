import React from 'react';
// import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
    return (
        <Layout>
            <Hero />

            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default HomePage;