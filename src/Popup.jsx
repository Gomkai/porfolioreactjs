import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Indicateur de chargement

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      setIsLoading(true); // Afficher le spinner de chargement
      fetch("https://api.github.com/users/Gomkai")
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setIsLoading(false); // Cacher le spinner de chargement
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données :", error);
          setIsLoading(false); // Cacher le spinner de chargement
        });
    }
  }, [showModal]);

  return (
    <div>

      <button className="btn btn-danger" onClick={toggleModal}>
        Ouvrir le Popup
      </button>

      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Informations de l'utilisateur</h5>
              <button
                type="button"
                className="btn-close"
                onClick={toggleModal}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {isLoading ? (
                <div className="text-center">Chargement...</div>
              ) : userData ? (
                <div className="row flex-row align-items-center">
                  <div className="col-md-8">
                    {/* Contenu textuel */}
                    <p><strong>Nom :</strong> {userData.name || "Inconnu"}</p>
                    {/* Autres informations... */}
                  </div>
                  <div className="col-md-4">
                    <img
                      src={userData.avatar_url}
                      alt={`Avatar de ${userData.name}`}
                      className="img-fluid rounded-circle" // Image circulaire et responsive
                    />
                  </div>
                </div>
              ) : (
                <p>Une erreur s'est produite lors du chargement des données.</p>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;