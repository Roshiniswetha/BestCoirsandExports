import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/design/Navbar";
import Footer from "./components/design/Footer";
import Box from "@mui/material/Box";

import Home from './components/Home'
import About from './components/About'
import ItemsList from "./components/design/ItemsList";
import Contact from "./components/Contact"
import Enquire from './components/Enquire'
import Card from "./data/db.json";
import Image from './assets/images/coco-bg3.jpg';
import "./App.css";

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Products', url: '/coir' },
  { title: 'Enquire', url: '/enquire' },
  { title: 'Contact', url: '/contact' },
];

function App() {
  const data = Card;
  return (
  <BrowserRouter>
    <React.Fragment>
      <Navbar sections={sections}/>
      <Box
        className="app"
      >
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route path="/about" element={<About data={data}/>} />

        <Route path="/coir" element={<ItemsList data={data} />} />

        <Route path="/enquire" element={<Enquire />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
      </Box>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
  );
}

export default App;
