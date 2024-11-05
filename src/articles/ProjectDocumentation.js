// src/articles/projectDocumentation.js

const projectDocumentation = {
    stockWeatherApp: (
        <>
            <h2>Overview</h2>
            <p>The Stock and Weather App is a web application designed to fetch and display real-time stock and weather data using external APIs. The app is built using Express.js for the server and MongoDB for storing stock data.</p>

            <h2>Technologies Used</h2>
            <p><strong>Backend:</strong> Express.js, MongoDB, Node.js</p>
            <p><strong>Frontend:</strong> React, D3.js for data visualization, React Router for navigation</p>

            <h2>Features</h2>
            <ul>
                <li>Fetches stock data from MarketData API with currency conversion options.</li>
                <li>Displays weather data using a custom visualization component.</li>
                <li>Allows saving, editing, and deleting stock data entries in MongoDB.</li>
            </ul>

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
            <ol>
                <li>Install dependencies: <code>npm install</code></li>
                <li>Start the MongoDB server and Express app: <code>node server.js</code></li>
                {/*<li>Access the app at <code>http://localhost:3000</code></li>*/}
            </ol>
        </>
    ),
    boredWebApp: (
        <>
            <h2>Overview</h2>
            <p>The Bored Web Application helps users find activities based on their personal interests. Users can select from various interest categories, and the app recommends activities and places that match their preferences.</p>

            <h2>Technologies Used</h2>
            <p><strong>Frontend:</strong> React, Material UI, Axios</p>
            <p><strong>Backend:</strong> Express.js, MongoDB, Spotify API, Foursquare API, Google Distance Matrix API</p>

            <h2>Features</h2>
            <ul>
                <li>Users can select multiple interests, such as "Outdoors," "Cooking," "Travel," and more.</li>
                <li>Provides activity suggestions from the Bored API, trivia questions, movie recommendations, and more.</li>
                <li>Recommends local places to visit based on the user's location and interests.</li>
                <li>Spotify integration for music recommendations, song saving, and playback control.</li>
            </ul>

            <h2>API Endpoints</h2>
            <ul>
                <li><strong>GET /indoor/movies/:movie_id</strong>: Fetches recommended movies.</li>
                <li><strong>GET /indoor/trivia</strong>: Fetches trivia questions.</li>
                <li><strong>GET /outdoor/get</strong>: Fetches recommended outdoor places.</li>
                <li><strong>GET /spotify/recommendations</strong>: Fetches song recommendations.</li>
            </ul>

            <h2>Setting Up</h2>
            <ol>
                <li>Install dependencies: <code>npm install</code></li>
                <li>Run the app: <code>npm start</code></li>
                {/*<li>Access the app at <code>http://localhost:8080</code></li>*/}
            </ol>
        </>
    ),
    travercityWebApp: (
        <>
            <h2>Overview</h2>
            <p>The Travercity Web Application is a comprehensive platform designed to help users plan their travel experiences. It consolidates travel resources and information into one convenient site, allowing users to explore destinations, find local activities, and learn about cultural norms and laws for various countries.</p>

            <h2>Technologies Used</h2>
            <p><strong>Frontend:</strong> HTML, CSS, JavaScript, jQuery</p>
            <p><strong>Backend:</strong> PHP, MySQL, Google Maps API, NewsData API, Yelp API</p>

            <h2>Features</h2>
            <ul>
                <li><strong>Centralized Travel Information:</strong> Provides users with essential details about travel destinations, including popular activities, dining options, and safety tips.</li>
                <li><strong>User Account Management:</strong> Allows users to create accounts, update personal details such as display names, pronouns, and home country, and keep a travel log.</li>
                <li><strong>Country-Specific Information:</strong> Users can explore different countries and find categorized information for each location, including options for diving, dining, health and wellness, nature and adventure, and accommodation.</li>
                <li><strong>News and Updates:</strong> Includes a news feed with categories such as entertainment, health, science, sports, and technology for staying updated on current events in selected regions.</li>
                <li><strong>Business Directory:</strong> Offers a directory of local businesses and attractions using integrated APIs, allowing users to discover points of interest in each travel destination.</li>
            </ul>

            <h2>Notable Components</h2>
            <ul>
                <li><strong>Search and Navigation:</strong> Users can search for specific countries and filter information by categories, making it easy to find relevant travel details.</li>
                <li><strong>Country-Specific Banners:</strong> Displays visually engaging banners for each country, along with categorized information such as diving, nature and adventure, and safety.</li>
                <li><strong>Activity Recommendations:</strong> Displays curated activities and attractions for each country, including links to detailed information where users can explore further.</li>
            </ul>

            <h2>Setting Up</h2>
            <ol>
                <li>Install dependencies and configure the backend, ensuring access to MySQL and required APIs (e.g., Google Maps API, NewsData API, Yelp API).</li>
                <li>Run the application on a local server using PHP, ensuring access to the database.</li>
                <li>Navigate to the homepage and explore travel resources, user account options, and location-based recommendations.</li>
            </ol>
        </>
    )
};

export default projectDocumentation;
