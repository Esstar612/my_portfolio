// StockWeatherAppDocumentation.js
import React from 'react';
import './Documentation.css';

const StockWeatherAppDocumentation = () => {
    return (
        <div className="documentation">
            <h1>Stock and Weather App Documentation</h1>
            <h2>Overview</h2>
            <p>The Stock and Weather App is a web application designed to fetch and display real-time stock and weather data using external APIs. The app is built using Express.js for the server and MongoDB for storing stock data.</p>

            <h2>Features</h2>
            <ul>
                <li>Fetches stock data from MarketData API with currency conversion options.</li>
                <li>Displays weather data using a custom visualization component.</li>
                <li>Allows saving, editing, and deleting stock data entries in MongoDB.</li>
            </ul>

            <h2>Technologies Used</h2>
            <p><strong>Backend:</strong> Express.js, MongoDB, Node.js</p>
            <p><strong>Frontend:</strong> React, D3.js for data visualization, React Router for navigation</p>

            <h2>Server Routes</h2>
            <ul>
                <li><strong>GET /stock/:id</strong>: Fetches stock data, with optional currency conversion.</li>
                <li><strong>POST /saveData</strong>: Saves stock data to MongoDB.</li>
                <li><strong>PUT /editData</strong>: Edits stock data in MongoDB.</li>
                <li><strong>DELETE /deleteData</strong>: Deletes stock data based on a query parameter.</li>
                <li><strong>GET /history</strong>: Retrieves historical stock data from MongoDB.</li>
            </ul>

            <h2>Data Visualization</h2>
            <p>Uses D3.js to create interactive visualizations for weather and stock data, including a pie chart for weather conditions and bar/line graphs for temperature and humidity.</p>

            <h2>Setting Up</h2>
            <p>To run the application:</p>
            <ol>
                <li>Install dependencies: <code>npm install</code></li>
                <li>Start the MongoDB server and Express app: <code>node server.js</code></li>
                <li>Access the app at <code>http://localhost:3000</code></li>
            </ol>
        </div>
    );
};

export default StockWeatherAppDocumentation;
