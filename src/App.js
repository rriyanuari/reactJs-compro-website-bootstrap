import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/pages/common/Footer";
import Contact from "./components/pages/Contact";


class App extends Component {
  
  render(){
    return (
      <>
       <BrowserRouter>
         <PageWrapper>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
           <Footer />
         </PageWrapper>
       </BrowserRouter>

      </>
    );
  }
}

export default App;
