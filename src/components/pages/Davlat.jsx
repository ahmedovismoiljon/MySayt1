import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';

function Davlat() {
  const [davlatlar, setDavlatlar] = useState([]);


  const malumotniOlibKel = () => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,continents,borders,flags,languages,population,region")
      .then((javob) => javob.json())
      .then((data) => {
        setDavlatlar(data); // Kelgan ma'lumotni savatchaga solamiz
      })
      .catch((xato) => console.log("Xatolik yuz berdi:", xato));
  };


  useEffect(() => {
    malumotniOlibKel();
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '20px', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      {davlatlar.map((item, index) => (
        <div 
          key={index} 
          style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '12px',
            width: '200px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          {/* Bayroq rasmi */}
          <img 
            src={item.flags.png} 
            alt={item.name.common} 
            style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px' }} 
          />
          
          {/* Davlat nomi */}
          <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.name.common}</h3>
          
          {/* Region */}
          <p style={{ color: 'gray', fontSize: '14px' }}>Region: {item.region}</p>
        </div>
      ))}
    </div>
  );
}

export default Davlat;
