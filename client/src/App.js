import AboutPage from '././components/Pages/AboutPage/AboutPage.js';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import CodeCat from './Assets/images/code_cat_hq.mp4';
import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Components
import { AppHeader } from './components/AppHeader'

function App () {
  return (
    <Router>
      <CssBaseline />
      <video autoPlay loop muted
        style={{
          position: 'fixed',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
        }}
      >
        <source src={CodeCat} type='video/mp4' />
      </video>
      <AppHeader />
      <Container
        sx={{
          flexGrow: 1,
          minHeight: '100%',
          width: '100vw'
        }}
      >
        <Routes>
          <Route exact path='/' element={<AboutPage />} />
          {/* <Route exact path='/about' element={<AboutPage />} /> */}
          <Route exact path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
