import ImageBanner from '../images/banner.jpg';
import crayon from '../images/flaticon/crayon.png'; 
import loupe from '../images/flaticon/loupe.png'; 
import html from '../images/flaticon/html.png'; 

const Services = () => {
    return(
        <div>
            <img  className="img-fluid" src={ImageBanner} alt="Banner" />
            
            <div className="container my-5">
    <div className="text-center">
        <h1 className="mb-2 fw-bold">Mon offre de services</h1>
        <p className="mb-4">Voici les prestations sur lesquelles je peux intervenir</p>
        <hr className="col-md-4 mx-auto border border-primary border-3 opacity-75" />
    </div>
</div>
    
          



            
           
           
            <div className="container">

                <div className="row d-flex align-items-stretch">

                    <div className="col-md-4">
                        <section className="text-center border border-secondary-subtle h-100">
                            <i><img className="mt-3" src={crayon} alt="Logo de mon site" /></i>
                            <h2 className="card-title mb-3">UX Design</h2>
                            <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
                        </section>
                    </div>

                    <div className="col-md-4">
                        <section className="text-center border border-secondary-subtle h-100">
                            <i><img  className="mt-3" src={loupe} alt="Logo de mon site" /></i>
                            <h2 className="card-title mb-3">Développement web</h2>
                            <p> Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)</p>
                        </section>
                    </div>

                    <div className="col-md-4">
                        <section className=" text-center border border-secondary-subtle h-100">
                            <i > <img className="mt-3" src={html} alt="Logo de mon site" /></i>
                            <h2 className="card-title mb-3">Référencement</h2>
                            <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
                        </section>
                    </div>

                </div>

            </div>




        </div>
    )
}

export default Services;