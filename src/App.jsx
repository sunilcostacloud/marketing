import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const theme = createTheme({
  // Add your theme configuration here
});

const customClassName = 'ma-custom'; // Customize the class name prefix here

export default function App({ history }) {
  // console.log("history", history)
  return (
    <div className={customClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
