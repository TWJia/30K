import React, { useState, useEffect } from 'react';
import "./HomeSearchBar.css";
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';

// Sample data of available services
const availableServices = [
  { id: 1, name: 'Business Registration', description: 'Register your business with ease.' },
  { id: 2, name: 'Tax Consultation', description: 'Get expert advice on tax matters.' },
  { id: 3, name: 'Legal Assistance', description: 'Legal support for your business needs.' },
  // Add more services as needed
];

export default function HomeSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log("Stored: ",  storedFavorites);
    setFavorites(storedFavorites);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const results = availableServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFavAddClick = (serviceId) => {
    const serviceToAdd = availableServices.find(service => service.id === serviceId);
    if (serviceToAdd) {
      const updatedFavorites = [...favorites, serviceToAdd];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    console.log('Favorites: ', favorites);
    console.log(localStorage);
  };

  return (
    <>
      <div className ="mainDashboard">
        <FlagCircleRoundedIcon className="logo" style={{ color: "white", fontSize: 100, marginLeft: "20px" }}/>
        <div className="mainwording">One Stop Hub to gain insights </div>
        <div className="mainwording">for Businesses</div>
        <div className="row">
          <div className="container">
            <input type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleSearch}
              className="search-bar"
            />
          </div>
        </div>   
      </div>
      {searchResults.length > 0 && (
        <div>
          {searchResults.map(service => (
            <div key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button onClick={() => handleFavAddClick(service.id)}>Add to Bookmark</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
