import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = 'dev-xmyal11p4uanogun.us.auth0.com';
const clientId = 'nY6Yq9JH7We2YytchccMaEoZWwqvOgFq';
const redirectUri = window.location.origin;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={redirectUri}
    
    authorizationParams={{
      redirect_uri: redirectUri
    }}
  >
    <App />
  </Auth0Provider>,
    
  </React.StrictMode>,
)
