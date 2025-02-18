import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/reset.css'
import './assets/css/index.css'
import App from './App.jsx'
import Header from './components/Header';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
