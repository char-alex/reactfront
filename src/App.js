import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        // Make API request
        axios.get('http://localhost:5130/api/sample') // Update with your API endpoint
            .then(response => setApiData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Your React App</h1>
            <p>{apiData ? apiData.message : 'Loading...'}</p>
        </div>
    );
}

export default App;