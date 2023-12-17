import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/design/Header";
import Footer from "./components/design/Footer";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import GlobalStyles from '@mui/material/GlobalStyles';

import Home from './components/Home'
import About from './components/About'
import ItemsList from "./components/design/ItemsList";
import Contact from "./components/Contact"
import Enquire from './components/Enquire'
import Process from './components/Process'

import {theme} from './theme'
import './assets/styles/styles.scss'

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Process', url: '/process' },
  { title: 'Products', url: '/product' },
  { title: 'Enquire', url: '/enquire' },
  { title: 'Contact', url: '/contact' },
];
// const inputGlobalStyles = <GlobalStyles styles={{root:{fontFamily:'Open Sans'}}}/>;

function App() {
  return (
    <ThemeProvider theme={theme}>
  <BrowserRouter>
   {/* {inputGlobalStyles} */}
    <React.Fragment>
      <Header sections={sections}/>
        <Container className="main_container" maxWidth={false} sx={{ marginTop: 0 }}>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route path="/about" element={<About />} />

        <Route path="/product" element={<ItemsList />} />

        <Route path="/process" element={<Process />} />

        <Route path="/enquire" element={<Enquire />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
      {/* </Box> */}
      <Footer />
      </Container>
    </React.Fragment>
  </BrowserRouter>
  // </ThemeProvider>
  );
}

export default App;
