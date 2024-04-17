```javascript
// This file contains the code necessary to register, configure, and unregister a service worker in a web application.
// The service worker enables features like offline support and faster subsequent page loads by caching assets.

const isLocalhost = Boolean( // Determines if the app is running on localhost
  window.location.hostname === 'localhost' || // Checks if hostname is 'localhost'
    window.location.hostname === '[::1]' || // Checks if hostname is the IPv6 localhost address
    window.location.hostname.match( // Checks if hostname is a localhost IPv4 address within the 127.0.0.0/8 range
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) { // Exports the register function to allow service worker registration
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) { // Checks if app is in production and service workers are supported
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href); // Creates a URL object with the base URL set to PUBLIC_URL environment variable
    if (publicUrl.origin !== window.location.origin) { // Checks if PUBLIC_URL is from a different origin than the current page
      return; // Exits the function if origins do not match
    }

    window.addEventListener('load', () => { // Adds an event listener that runs when the window is fully loaded
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; // Constructs the service worker URL using PUBLIC_URL

      if (isLocalhost) { // Checks if running on localhost
        checkValidServiceWorker(swUrl, config); // Calls function to check if the service worker can be found

        navigator.serviceWorker.ready.then(() => { // Waits for the service worker to be ready
          console.log( // Logs message to console about service worker caching behavior
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        registerValidSW(swUrl, config); // Registers the service worker if not on localhost
      }
    });
  }
}

function registerValidSW(swUrl, config) { // Function to register a valid service worker
  navigator.serviceWorker
    .register(swUrl) // Registers the service worker with the given URL
    .then(registration => { // Callback after successful registration
      registration.onupdatefound = () => { // Sets up an event listener for when an update to the service worker is found
        const installingWorker = registration.installing; // References the service worker that is installing
        if (installingWorker == null) { // Checks if there is no installing worker
          return; // Exits the function if no installing worker is found
        }
        installingWorker.onstatechange = () => { // Sets up an event listener for state changes in the installing worker
          if (installingWorker.state === 'installed') { // Checks if the installing worker has been installed
            if (navigator.serviceWorker.controller) { // Checks if there is an active service worker controlling the page
              console.log( // Logs message to console about new content availability
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              if (config && config.onUpdate) { // Checks if there is a config object with an onUpdate callback
                config.onUpdate(registration); // Calls the onUpdate callback with the registration
              }
            } else {
              console.log('Content is cached for offline use.'); // Logs message to console about content being cached

              if (config && config.onSuccess) { // Checks if there is a config object with an onSuccess callback
                config.onSuccess(registration); // Calls the onSuccess callback with the registration
              }
            }
          }
        };
      };
    })
    .catch(error => { // Callback for handling registration errors
      console.error('Error during service worker registration:', error); // Logs error to console
    });
}

function checkValidServiceWorker(swUrl, config) { // Function to check if the service worker is valid
  fetch(swUrl, { // Fetches the service worker script
    headers: { 'Service-Worker': 'script' }, // Sets header to indicate that a service worker script is being requested
  })
    .then(response => { // Callback after fetching the script
      const contentType = response.headers.get('content-type'); // Gets the content type from the response headers
      if (
        response.status === 404 || // Checks if the response status is 404 (not found)
        (contentType != null && contentType.indexOf('javascript') === -1) // Checks if the content type is not JavaScript
      ) {
        navigator.serviceWorker.ready.then(registration => { // Waits for the service worker to be ready
          registration.unregister().then(() => { // Unregisters the service worker
            window.location.reload(); // Reloads the page
          });
        });
      } else {
        registerValidSW(swUrl, config); // Calls function to register a valid service worker if one is found
      }
    })
    .catch(() => { // Callback for handling fetch errors
      console.log( // Logs message to console about offline mode
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() { // Exports the unregister function to allow service worker unregistration
  if ('serviceWorker' in navigator) { // Checks if service workers are supported
    navigator.serviceWorker.ready // Waits for the service worker to be ready
      .then(registration => { // Callback after the service worker is ready
        registration.unregister(); // Unregisters the service worker
      })
      .catch(error => { // Callback for handling unregistration errors
        console.error(error.message); // Logs error message to console
      });
  }
}