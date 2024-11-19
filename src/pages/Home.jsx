import React from "react";
import ImageHeroBG from '../images/hero-bg.jpg';
import ImageJohn from '../images/john-doe-about.jpg';
import address from '../Address';
import GithubProfileModal from '../GitApi.jsx'

const Home = () => {
    
  
    
  
    return (
      <main>

    <section className="position-relative text-center">
        <img src={ImageHeroBG} alt="Hero" className="img-fluid"/>
        <div className="position-absolute top-50 start-50 translate-middle text-white">
            <h1 className="fw-bold " >BONJOUR, je suis {address.firstName} {address.lastName} </h1>
            <h2 className="fw-bold ">Développeur web full stack</h2>

            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
             En savoir plus
            </button>
    
        </div>
    </section>






<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-light" id="exampleModalLabel">Mon profil Github</h5>
        <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <GithubProfileModal />


      <div class="modal-footer bg-dark">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>







<br />
    
    <div className="container ">
      <div className="row justify-content-center">
        {/* Section 1 */}
        <section className="col-md-4 ms-2 border border-end-0 ">
          <h3 className="border-bottom border-4 border-primary">A propos</h3>
          <img className="img-fluid" src={ImageJohn} alt="Hero" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptatem sint quam repellat, et corporis quisquam aliquam tempora
            ratione perspiciatis?
          </p>
        </section>

        {/* Section 2 */}
        <section className="col-md-4 me-2 border border-start-0 ">
            <h3 className="border-bottom border-4 border-primary">Mes compétences</h3>
            <div className="row">
              <section className="col-md-12">
                <p>HTML5 90%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar"
                    style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p>CSS3 80%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-info" role="progressbar"
                    style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p>JAVASCRIPT 70%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" role="progressbar"
                    style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p>PHP 60%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-success" role="progressbar"
                    style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p>PHP 50%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-primary" role="progressbar"
                    style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </section>
            </div>
        </section>
      </div>
    </div>


  <br />
  
</main>







    )
}



export default Home;


