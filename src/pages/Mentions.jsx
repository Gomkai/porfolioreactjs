import address from '../Address';
import React from 'react';
import mapDark from '../../src/images/flaticon/mapDark.png'; 
import gpsDark from '../../src/images/flaticon/gpsDark.png'; 
import phoneDark from '../../src/images/flaticon/phoneDark.png'; 
import mailDark from '../../src/images/flaticon/mailDark.png'; 
import worldDark from '../../src/images/flaticon/worldDark.png'; 

const Mentions = () => {
    return(
        
        <main className="flex-fill d-flex flex-column min-vh-100">
        <div className="text-center">
         <h1 className='mb-2 fw-bold text-center mt-5'>Mentions légales</h1>
         <hr className="col-md-5 mx-auto border border-primary border-2 opacity-75" />
        </div>


        <div class="accordion" id="accordionExample">

            <div class="accordion-item col-md-8 w-full max-w-2xl mx-auto border border-gray-200 rounded-md mb-2 ">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Éditeur du site
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <address>

                    <p className="fs-5 m-0 ">{address.firstName} {address.lastName}</p>
             

                    <i><img className="img-fluid" src={gpsDark}alt="" /> </i>
                    {address.addr.street}
                    <br />

                    <i><img className="img-fluid" src={mapDark}alt="" /> </i>
                    {address.addr.code}
                    <br />

                    <i><img className="img-fluid" src={phoneDark}alt="" /> </i>
                    {address.phone}
                    <br />

                    <i><img className="img-fluid" src={mailDark}alt="" /> </i>
                    {address.mail}

                </address>
                    </div>
                </div>
            </div>

            <div class="accordion-item col-md-8 w-full max-w-2xl mx-auto border border-gray-200 rounded-md mb-2 ">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hébergeur
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p className="fs-3 m-0 fw-bold ">Alwaysdata</p>
                <address>
                    <address>91 rue du Faubourg Saint-Honoré, 75008 Paris</address>
                </address>
                <i><img className="img-fluid" src={worldDark}alt="" /> </i><a href="https://www.alwaydata.com/" target="_blanck">www.alwaydata.com</a>                    </div>
                </div>
            </div>

            <div class="accordion-item col-md-8 w-full max-w-2xl mx-auto border border-gray-200 rounded-md mb-2 ">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Crédits
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p className="fs-3 m-0 fw-bold ">Crédits</p>
               <p className="" >Ce site a été réalisé par John Doe , étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre europén de formation</a></p>
               <p className="">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
               <p>Le favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/">{address.firstName} {address.lastName} Icons erstelt von Freepix - Flaticon</a></p>
                    </div>
                    </div>
            </div>
        </div>


        
        </main>
    )
}
export default Mentions;