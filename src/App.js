import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8099/name');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div className="App">
        <h1>Posts</h1>
        <ul>
          {data.map(post => (
              <li >{post}</li>
          ))}
        </ul>
      </div>
  );
}

export default App;
