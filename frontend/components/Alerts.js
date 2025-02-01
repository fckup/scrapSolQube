import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Alerts.css';

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/alerts');
        setAlerts(response.data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Recent Alerts</h2>
      <div className="alert-list">
        {alerts.length === 0 ? (
          <div className="alert alert-secondary">
            No alerts available at this time
          </div>
        ) : (
          alerts.map((alert, index) => (
            <div key={index} className="alert alert-warning">
              {alert.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Alerts;
