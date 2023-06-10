import React, { useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {
  useEffect(() => {
    axios.get('https://novaxtechno.tech/api/v1/products?pag=30', {
      headers: {
        "Accept": "application/json",
        'Authorization': 'Bearer 19|RoT9FAelYeYj7pFzUecTzBE5dIYssZGFxM5v0rE3'
      }
    })
      .then(response => {
        // Handle the successful response
        console.log(response);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>Sidebar</div>
  );
};

export default Sidebar;
