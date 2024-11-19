import React, { useState, useEffect } from 'react';
import address from './Address';
import userWhite from '../src/images/flaticon/userWhite.png'; 
import cubeWhite from '../src/images/flaticon/cubeWhite.png'; 


const GithubProfileModal = () => {
  // State variables to store profile data, loading status, and errors
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch GitHub profile data when the component mounts
  useEffect(() => {
    const fetchGithubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Gomkai');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du profil GitHub');
        }
        const data = await response.json();
        setProfile(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGithubProfile();
  }, []);
// Display loading spinner while the profile is being fetched
  if (loading) return <p>Chargement...</p>;
  // Display error message if there's an issue fetching the profile
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="modal-body bg-dark">{profile && (
      // Display profile data when it's fetched successfully
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                <img 
                    src={profile.avatar_url} 
                    alt="Avatar GitHub" 
                    className="img-fluid rounded-circle"
                />
                </div>

                <div className="col-md-8 ">
                    <a href={profile.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-3 text-decoration-none text-light" >
                    <strong>{address.firstName} {address.lastName}</strong>
                    </a>

                   
{/* Profile stats such as repositories, followers, and following */}
                    <div className="d-flex flex-column mt-3">

                        <div className="text-light mt-2 border-bottom border-secondary">
                        <i><img className="" src={cubeWhite}alt="" /></i>
                        <strong > Repos:</strong> {profile.public_repos}
                        </div>

                        <div className="text-light  border-bottom border-secondary">
                        <i><img className="" src={userWhite}alt="" /></i>
                        <strong> Followers:</strong> {profile.followers}
                        </div>
        
                        <div className="text-light mt-2 border-bottom border-secondary">
                        <i><img className="" src={userWhite}alt="" /></i>
                        <strong> Following:</strong> {profile.followers}
                        </div>
    
                    </div>


                </div>
            
          
          
            </div>

        </div>
      )}
    </div>
  );
};

export default GithubProfileModal;