import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Bookmarks</h2>
      {favorites && favorites.length === 0 && <p>No favorites added yet.</p>}
      {favorites && favorites.map(favorite => (
        <div key={favorite.id}>
          <h3>{favorite.name}</h3>
          <p>{favorite.description}</p>
          <button onClick={() => removeFromFavorites(favorite.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;

