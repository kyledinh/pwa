import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleList from './PeopleList';
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
import Grid from '@material-ui/core/Grid';

let localData = require('./data.json');

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
  paddingTop6: {
    marginTop: '6px'
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">

          <AppBar position="static">
            <Toolbar>
              <Grid justify="space-between" container spacing={24}>
                <Grid item>
                  <IconButton color="inherit" aria-label="NavigateBefore">
                    <NavigateBefore />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="inherit" style={styles.paddingTop6}>
                    My Profile
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <ProfileCard userInfo={localData.data.userInfo} stats={localData.data.stats}/>
          <PeopleList people={localData.data.followings}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
