// This module handles token operations in local storage, including setting, getting, removing tokens, and extracting user information from a token.

export default {
    setToken, // Exports the setToken function
    getToken, // Exports the getToken function
    getUserFromToken, // Exports the getUserFromToken function
    removeToken, // Exports the removeToken function
};

// Function to remove the token from local storage
function removeToken() {
    localStorage.removeItem('token'); // Removes the 'token' item from local storage
}

// Function to get the user from the stored token
function getUserFromToken() {
    const token = getToken(); // Retrieves the token from local storage
    return token ? JSON.parse(atob(token.split('.')[1])).user : null; // Parses the token to extract user information if token exists, else returns null
}

// Function to retrieve the token from local storage and check its expiry
function getToken() {
    let token = localStorage.getItem('token'); // Retrieves the 'token' item from local storage
    if (token) { // Checks if the token exists
      const payload = JSON.parse(atob(token.split('.')[1])); // Decodes the payload part of the token
      if (payload.exp < Date.now() / 1000) { // Checks if the token has expired
        localStorage.removeItem('token'); // Removes the 'token' item from local storage if expired
        token = null; // Sets token to null if expired
      }
    }
    return token; // Returns the token or null if it doesn't exist or is expired
}

// Function to set the token in local storage
function setToken(token) {
    localStorage.setItem('token', token); // Sets the 'token' item in local storage
}