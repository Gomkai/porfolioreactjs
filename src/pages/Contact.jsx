
import React from "react";
import GoogleMap from "../GoogleMaps";
import address from '../Address';
import mapDark from '../../src/images/flaticon/mapDark.png'; 
import gpsDark from '../../src/images/flaticon/gpsDark.png'; 
import phoneDark from '../../src/images/flaticon/phoneDark.png'; 
import mailDark from '../../src/images/flaticon/mailDark.png'; 


const Contact = () => {
    return(
        <main className="flex-fill d-flex flex-column mb-4 min-vh-100">
            <div className="mb-3 text-center">
            <h1 className=' paddingTop mb-3 fw-bold text-center mt-5'>Contacts</h1>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <hr className="col-md-5 mx-auto border border-primary border-2 opacity-75" />
            </div>



<div className="container border border-2">

    <div className="row d-flex align-items-stretch me-5 ms-5">

        <section className="col-md-6">
        <h2 className="fw-bold" >Formulaire de contact</h2>
        <hr className="col-md-12 mx-auto border border-primary border-3 opacity-75" />

        <form className="border p-2 rounded shadow-sm">
        {/* Nom */}
        <div className="">
          <label htmlFor="name" className="form-label">
            
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Votre nom"
            required
          />
        </div>

        {/* Adresse email */}
        <div className="">
          <label htmlFor="email" className="form-label">
            
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Votre adresse mail"
            required
          />
        </div>

        {/* Numéro de téléphone */}
        <div className="-m-3">
          <label htmlFor="phone" className="form-label">
            
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Votre numéro de téléphone"
            required
          />
        </div>

        {/* Sujet */}
        <div className="">
          <label htmlFor="subject" className="form-label">
           
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder=" Sujet"
          />
        </div>

        {/* Message */}
        <div className="mb-3 ">
          <label htmlFor="message" className="form-label">
         
          </label>
          <textarea
            className=" form-control custom-textarea"
            id="message"
            rows="12"
            placeholder=" Votre message"
          ></textarea>
        </div>

        {/* Bouton envoyer */}
        <div className=" text-center ">
        <button type="submit" className=" btn btn-primary btn-sm ">
          Envoyer
        </button>

        </div>
      </form>

        </section>
            
        <section className="col-md-6">
        <h2 className="fw-bold" >Mes coordonnées</h2>
        <hr className="col-md-12 mx-auto border border-primary border-3 opacity-75" />
        <address >
                <p className="fs-5 m-0 ">{address.firstName} {address.lastName}</p>
                
                <i><img className="img-fluid" src={mapDark}alt="icon logo map" />  </i>
                 { address.addr.street}
                <br />
                <i><img className="img-fluid" src={gpsDark}alt="icon logo gps" />  </i>
                {address.addr.code} {address.addr.city}
                <br />
                <i><img className="img-fluid" src={phoneDark}alt="icon logo phone" />  </i>
                {address.phone}
                <br />
                <i><img className="img-fluid" src={mailDark}alt="icon logo mail" />  </i>
                {address.mail}
            </address>

        <GoogleMap />

        </section>

    </div>



</div>


    </main> 
       )
}

export default Contact ;
