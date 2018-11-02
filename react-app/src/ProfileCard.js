import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    //maxWidth: 800,
    padding: theme.spacing.unit * 2,
    backgroundColor: '#EEEEF0'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ProfileCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/avatars/avatar1465389809397-l.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <div style={{textAlign: 'left'}}>
                <p><label color="textSecondary">Name: </label><text>John Smith</text></p>
                <p><label>Email: </label><text>webadmin@example.com</text></p>
                <p><label>Phone: </label><text>1-800-555-6969</text></p>
                <p><label>Mobile: </label><text>1-800-555-6968</text></p>
                <p><label>Location: </label><text>311 Ray Street</text></p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);
