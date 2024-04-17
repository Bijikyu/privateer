// This is the entry point file for a React application. It imports necessary modules,
// styles, components, and service workers, sets up routing using react-router-dom,
// and renders the main App component inside a Router component to the DOM.

import React from 'react'; // Imports the React library for creating components
import ReactDOM from 'react-dom'; // Imports ReactDOM for DOM-related rendering methods
import './index.css'; // Imports CSS for styling the application
import App from './pages/App/App'; // Imports the main App component from the specified path
import * as serviceWorker from './serviceWorker'; // Imports service worker functions for offline capabilities
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Imports components for routing

// Renders the React application to the DOM
ReactDOM.render(
  <Router> // Provides a routing structure for the application
    <Route component={App} /> // Defines a route that renders the App component
  </Router>,
  document.getElementById('root') // Specifies the root DOM node where the app will be mounted
);

// Service worker setup for offline functionality and caching
serviceWorker.unregister(); // Unregisters the service worker to not use it in its current form