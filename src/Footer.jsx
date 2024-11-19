import React from 'react';
import address from './Address';
import {Link} from "react-router-dom";
import Liens from './Liens';
import inGrey from '../src/images/flaticon/inGrey.png'; 
import twitterGrey from '../src/images/flaticon/twitterGrey.png'; 
import gitGrey from '../src/images/flaticon/gitGrey.png'; 
import '../src/style.css'

const Footer = () => {
  return (
    <footer className= "bg-dark py-3 mt-auto">
<hr />
<div className="container text-center ">
    <div className="row ">
        <section className="col-md-4 mt-3 text-white">
            <address >
                <strong>{address.firstName} {address.lastName}</strong>
                <br />
                {address.addr.street}
                <br />
                {address.addr.code} {address.addr.city}
                <br />
                {address.phone}
                <br />
                <a className='text-decoration-none text-light' href="mailto:">{address.mail}</a>
            </address>
            
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className='social'><i><img className="img-fluid" src={twitterGrey} alt="" /></i></a> 
            <a href="https://github.com/Gomkai" target='_blank' rel='noopener noreferrer' className='social'><i><img className='img-fluid' src={gitGrey} alt="" /></i></a>
            <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer" className='social'><i><img className="img-fluid" src={inGrey} alt="" />  </i></a>
        </section>

        <section className="col-md-4 mt-3 ">
          <span className="text-light fs-5 fw-bold">Lien utiles</span>
            <div className="row ">
            <p className="m-0"><Link to="/" className="text-decoration-none text-light">Accueil</Link></p>
            <p className="m-0"><Link to="/services" className="text-decoration-none text-light">Services</Link></p>
            <p className="m-0"><Link to="/portfolio" className="text-decoration-none text-light">Portfolio</Link></p>
            <p className="m-0"><Link to="/contact" className="text-decoration-none text-light">Contact</Link></p>
            <p className="m-0"><Link to="/Mentions" className="text-decoration-none text-light">Mentions légales</Link></p>
            </div>

        </section>

        <section className="col-md-4 mt-3 ">
         <span className="text-light fs-5 fw-bold">Mes derniéres réalisations</span>
            <div className="row">

            <a href={Liens.fresh} className="text-decoration-none text-light" target="_blank" 
            rel="noopener noreferrer">Freshfood</a>

            <a href={Liens.akira} className="text-decoration-none text-light" target="_blank" 
            rel="noopener noreferrer">Restaurant Akira</a>

            <a href={Liens.bienEtre} className="text-decoration-none text-light" target="_blank" 
            rel="noopener noreferrer">Espace bien etre</a>

            <a href={Liens.seo} className="text-decoration-none text-light" target="_blank" 
            rel="noopener noreferrer">Espace bien etre</a>        

            <a href={Liens.api} className="text-decoration-none text-light" target="_blank" 
            rel="noopener noreferrer">Création d'une API</a>
            
            <a href={Liens.figma} className="text-decoration-none text-light" target="_blank" 
            rel="noopener noreferrer">Maquette de site</a>

            </div>
        </section>
    </div>
</div>
    </footer>
  );
};

export default Footer;