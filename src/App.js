import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from './pages/Contact';
import Mentions from "./pages/Mentions";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import address from './Address';


export default function App(){
  return(
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg bg-dark text-light text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand text-light fw-bolder" href="#page-top">{address.firstName} {address.lastName}</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"><i class="fas fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse"id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <Link to="/"className="nav-item mx-0 mx-lg-1 text-decoration-none text-light">Accueil</Link>
                        <Link to="/services"className="nav-item mx-0 mx-lg-1 text-decoration-none text-light">Services</Link>
                        <Link to="/portfolio"className="nav-item mx-0 mx-lg-1 text-decoration-none text-light">Portfolio</Link>
                        <Link to="/contact" className="nav-item mx-0 mx-lg-1 text-decoration-none text-light">Contact</Link>
                        <Link to="/Mentions"className="nav-item mx-0 mx-lg-1 text-decoration-none text-light">Mentions légales</Link>
                    </ul>
                </div>
            </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/mentions" element={<Mentions/>}></Route>
      </Routes>

      <Footer />
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

    </div>
    
  );
}