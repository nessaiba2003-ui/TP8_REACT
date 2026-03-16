import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);        
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      
  
  // --- POINT N°3 : Définition de la fonction loadData ---
  const loadData = () => {
    setLoading(true); // On remet le chargement à true quand on recharge
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  // On appelle loadData une fois au démarrage
  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error} </p>;

  return (
    <div>
      <h2>Utilisateurs chargés avec axios</h2>
      
      {/* --- POINT N°3 : Ajout du bouton --- */}
      <button onClick={loadData} style={{ marginBottom: '19px' }}>
       📥 Mettre à jour la liste
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* --- POINT N°2 : Ajout de la Ville --- */}
            {user.name} – {user.email} -  <strong>🏠 Réside : {user.address.city}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
} // <--- TOUT LE CODE DOIT ÊTRE AVANT CETTE ACCOLADE

export default AxiosData;