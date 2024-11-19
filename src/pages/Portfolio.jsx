import ImageBanner from '../images/banner.jpg';

import ImagePortfolioCoder from '../images/portfolio/coder.jpg';
import ImagePortfolioEspace from '../images/portfolio/espace-bien-etre.jpg';
import ImagePortfolioFresh from '../images/portfolio/fresh-food.jpg';
import ImagePortfolioRestaurant from '../images/portfolio/restaurant-japonais.jpg';
import ImagePortfolioScreens from '../images/portfolio/screens.jpg';
import ImagePortfolioSeo from '../images/portfolio/seo.jpg';

import Liens from '../Liens';
// Importing the `Liens` object which likely contains URLs for each portfolio project


const Portfolio = () => {
    return(
        <main>
             <img className="img-fluid" src={ImageBanner}  alt="Banner flash blue"/>
            <div className="text-center">
            <h1 className="mb-2 fw-bold"> Portfolio </h1>
            <p className=" fw-bold">Voici Quelques-unes de mes réalisations.</p>
            </div>
           
            <div className="text-center p-4 ">
            <div class="row justify-content-center me-5 ms-5">
 {/* portfolio items */}
                <section className="col-md-6 col-lg-4 mb-5 ">
                    <div className=" card border border-secondary-subtle rounded-top  rounded-bottom">    
                        <img src="" alt="" />
                        <img className="img-fluid border rounded-top"  src={ImagePortfolioFresh} alt='basket of various vegetables'/>
                        <h4 className='fw-bold'>Fresh Food</h4>
                        <p>site de vente de produits frais en ligne</p>
                        <a href={Liens.fresh} class="btn btn-primary btn-sm  mb-2 " target="_blank" rel="noopener noreferrer">Voir le site</a>
                        <div className='bg-secondary-subtle'>
                        <p className=' border border-secondary-subtle m-0'>Site réalisé avec word PHP et MySQL</p>
                        </div>
                    </div>  
                </section>

                <section className="col-md-6 col-lg-4 mb-5 ">
                    <div className=" card border border-secondary-subtle rounded-top  rounded-bottom">
                        <img className="img-fluid border "  src={ImagePortfolioRestaurant} alt='nigiri sashimi sushi platter'/>
                        <h4 className='fw-bold' >Restaurant Akira</h4>
                        <p>site de vente de produits bien</p>
                        <a href={Liens.akira} class="btn btn-primary btn-sm mb-2 " target="_blank" rel="noopener noreferrer">Voir le site</a>
                        <div className='bg-secondary-subtle'>
                            <p className=' border border-secondary-subtle m-0'> Site réalisé avec WordPress</p>
                        </div>
                    </div>
                </section>

                <section className="col-md-6 col-lg-4 mb-5 ">
                    
                    <div className=" card border border-secondary-subtle rounded-top  rounded-bottom">
                        <img className="img-fluid border "  src={ImagePortfolioEspace} alt='Buddha head with stones and a setting sun' />
                        <h4 className='fw-bold'>Espace bien-etre</h4>
                        <p>site de vente de produits bien-etre</p>
                        <a href={Liens.bienEtre} class="btn btn-primary btn-sm mb-2" target="_blank" rel="noopener noreferrer">Voir le site</a>

                        <div className='bg-secondary-subtle'>
                            <p className=' border border-secondary-subtle m-0'>Site réalisé avec LARAVEL</p>
                        </div>

                    </div>

                </section >

                <section className="col-md-6 col-lg-4 mb-5 ">
                    <div className=" card border border-secondary-subtle rounded-top  rounded-bottom">
                        <img className="img-fluid border"  src={ImagePortfolioSeo} alt='Words arranged both horizontally and vertically, forming a whole around the central word SEO, all in a style evoking the world of development' />
                        <h4 className='fw-bold'>SEO</h4>
                        <p>Amélioriation du réf d'un site e-commerce</p>
                        <a href={Liens.seo} class="btn btn-primary btn-sm mb-2" target="_blank" rel="noopener noreferrer">Voir le site</a>
                        <div className='bg-secondary-subtle'>
                        <p className=' border border-secondary-subtle m-0'>Utilisation des outils SEO</p>
                        </div>
                    </div>
                </section>

                <section className="col-md-6 col-lg-4 mb-5 ">
                    <div className=" card border border-secondary-subtle rounded-top  rounded-bottom">
                        <img className="img-fluid border rounded-top"  src={ImagePortfolioCoder} alt='lines of code'/>
                        <h4 className='fw-bold'>Création d'une API</h4>
                        <p>Création d'une API RESTRFULL publique</p>
                        <a href={Liens.api} class="btn btn-primary btn-sm mb-2" target="_blank" rel="noopener noreferrer">Voir le site</a>
                        <div className='bg-secondary-subtle'>
                        <p className=' border border-secondary-subtle m-0'>PHP - SYMFONY</p>
                        </div>
                    </div>
                </section>

                <section className="col-md-6 col-lg-4 mb-5 ">
                <div className=" card border border-secondary-subtle rounded-top  rounded-bottom">
                    <img className="img-fluid border rounded-top"  src={ImagePortfolioScreens} alt='a tablet, a laptop and a computer on a table' />
                    <h4 className='fw-bold'>Maquette d'un site web</h4>
                    <p>Création du prototype d'un site</p>
                    <a href={Liens.figma} class="btn btn-primary btn-sm mb-2" target="_blank" rel="noopener noreferrer">Voir le site</a>
                    <div className='bg-secondary-subtle'>
                    <p className=' border border-secondary-subtle m-0'>Réalisé avec FIGMA</p>
                    </div>
                    </div>
                </section>
                </div>
            </div>

                
        </main>
    )
}

export default Portfolio;
// Export the Portfolio component so it can be used in other parts of the app