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

class ProfileCard extends React.Component {

  constructor(props) {
    super(props);
    console.log('====', props);
    this.state = {
      firstName: this.defined(props.userInfo, 'firstName', 'fn'),
      lastName: this.defined(props.userInfo, 'lastName', 'ln'),
      email: this.defined(props.userInfo, 'email', 'who@what.com'),
      avatarpath: this.defined(props.userInfo, 'avatarpath', '/avatars/default_person.svg'),
    };
  }

  defined(obj, field, deflt) {
    if ((obj == undefined) || !(field in obj)) {
      return deflt;
    } else {
      return obj[field];
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={this.state.avatarpath} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <div style={{textAlign: 'left'}}>
                  <ul className="profile-details">
                  <li><label color="textSecondary">Name: </label>{this.state.firstName} {this.state.lastName}</li>
                  <li><label>Email: </label>webadmin@example.com</li>
                  <li><label>Phone: </label>1-800-555-6969</li>
                  <li><label>Mobile: </label>1-800-555-6968</li>
                  <li><label>Location: </label>311 Ray Street</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCard);
