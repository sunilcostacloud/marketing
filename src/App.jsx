import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const theme = createTheme({
  // Add your theme configuration here
});

const customClassName = 'ma-custom'; // Customize the class name prefix here

export default function App() {
  return (
    <div className={customClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
