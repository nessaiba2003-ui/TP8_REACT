import { useState, useEffect } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then((data) => {
        // SOLUTION POINT N°1 : On garde les 10 premiers ici
        setPosts(data.slice(0, 10)); 
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); 

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h2>Articles chargés avec fetch()</h2>
      <ul>
  {posts.slice(0, 10).map((post, index) => (
    <li key={post.id}>
      <strong>Article n°{index + 1} :</strong> Titre personnalisé de mon blog
    </li>
  ))}
</ul>
    </div>
  );
} // <--- La fonction se ferme ICI, après le return

export default FetchData;