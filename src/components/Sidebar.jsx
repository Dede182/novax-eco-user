import React, { useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {
  useEffect(() => {
    axios.get('http://hydra-tech.website/api/usersList', {
      headers: {
        "Accept": "application/json",
        // 'Authorization': 'Bearer 24|tgPkLl7N2oSsM0DOqfQX9syr2Hpi9tFrZufr47y4'
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
