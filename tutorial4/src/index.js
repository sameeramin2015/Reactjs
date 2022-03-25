import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AboutmePage from './Aboutme';
import ContactPage from './Contact';
import PortfolioPage from "./Portfolio";
import Admin from './Admin';
import ProtectedRoute from "./ProtectedRout";
import BlogPage from "./Blog"


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<App helloMessage="This is just a test" />} />
    <Route path="/aboutme" element={<AboutmePage/>}/>
    <Route path="/blog" element={<BlogPage auth={{email:'root@root.com',password:'123'}} />} />
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/portfolio" element={<PortfolioPage/>}/>
    <Route path="/admin" element={
      <ProtectedRoute user={{username: 'admin', password: '123456'}}>
        <Admin/>
      </ProtectedRoute>
    }/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);


