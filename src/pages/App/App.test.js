// This file contains a test for the App component using the React Testing Library.

import React from 'react'; // Imports the React library for building user interfaces
import { render } from '@testing-library/react'; // Imports the render function from the React Testing Library
import App from './App'; // Imports the App component from the local file App.js

// Defines a test case with the description 'renders learn react link'
test('renders learn react link', () => {
  const { getByText } = render(<App />); // Renders the App component and destructures the getByText query function
  const linkElement = getByText(/learn react/i); // Finds an element with text that matches the regex /learn react/i
  expect(linkElement).toBeInTheDocument(); // Asserts that the found linkElement is present in the document
});