import React, { useState, useEffect } from 'react';

export default function BookMarks() {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    // Update localStorage whenever favorites change
    //const favorites = localStorage.getItem('favorites', JSON.stringify('favorites'));
    const stored_favorites = JSON.parse(localStorage.getItem('favorites'));
    if(stored_favorites) {
      setFavorites(stored_favorites);
      console.log("fav: ", stored_favorites);
      console.log("favorites: ", favorites.length);
    }
  }, []);

  

  return (
    <div>
      <h2>Bookmarks</h2>
      {console.log(favorites)}
      /* This part of the code is conditionally rendering content based on the length of the
      `favorites` array. Here's what it does: */
      {/* {favorites.length === 0 && <p>No favorites added yet.</p>}
      {favorites.map(favorite => (
        <div key={favorite.id}>
          <h3>{favorite.name}</h3>
          <p>{favorite.description}</p>
        </div>
      ))} */}
    </div>
  )
};
