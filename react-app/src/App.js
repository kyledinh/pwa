import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleList from './PeopleList';
import ProfileStats from './ProfileStats';
import ProfileCard from './ProfileCard';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

let data = require('./data.json');

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#603A87',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }
  }
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarRight: {
    marginLeft: 'auto',
  },
};


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">

          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="NavigateBefore">
                <NavigateBefore />
              </IconButton>

              <Typography variant="h6" color="inherit">
                My Profile
              </Typography>
              <div styles={styles.toolbarRight}>
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>

          <ProfileCard/>
          <ProfileStats/>
          <PeopleList/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
