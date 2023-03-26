import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Ceremony from '../pages/Ceremony';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/ceremony" element={<Ceremony/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;