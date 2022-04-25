import React from 'react';
import Home from "./Container/Home/Home";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Listing from './Container/Listing/Listing';
import Footer from './Components/Footer/Footer';
import Message from './Container/Messages/Message';
import Pricing from './Container/Pricing/Pricing'


function App() {
  return (
        <Router>
            <Header />
            <Routes>
                <Route path={'/'}  element={<Home />} />
                <Route path={'/listing'}  element={<Listing />} />
                <Route path={'/messages'}  element={<Message />} />
                <Route path={'/pricing'}  element={<Pricing />} />
            </Routes>
            {/* <Footer/> */}
        </Router>
  );
}

export default App;
