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
    this.state = {
      firstName: this.defined(props.userInfo, 'firstName', 'fn'),
      lastName: this.defined(props.userInfo, 'lastName', 'ln'),
      email: this.defined(props.userInfo, 'email', 'who@what.com'),
      phone: this.defined(props.userInfo, 'phone', '800-888-2000'),
      mobile: this.defined(props.userInfo, 'mobile', '800-888-1000'),
      location: this.defined(props.userInfo, 'location', '123 Elm St, Everytown'),
      avatarpath: this.defined(props.userInfo, 'avatarpath', '/avatars/default_person.svg'),
      ideas: this.defined(props.stats[0], 'total', 0),
      views: this.defined(props.stats[1], 'total', 0),
      posts: this.defined(props.stats[2], 'total', 0),
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
      <div className="`Spig-section-container ${classes.root}`">

        <Grid container spacing={16} className="Spig-section-header Spig-section-padding">
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className="Spig-contact-avatar" alt="complex" src={this.state.avatarpath} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <div className="Spig-profile-details" style={{textAlign: 'left'}}>
                  <ul>
                  <li><label>Name: </label>{this.state.firstName} {this.state.lastName}</li>
                  <li><label>Email: </label>{this.state.email}</li>
                  <li><label>Phone: </label>{this.state.phone}</li>
                  <li><label>Mobile: </label>{this.state.mobile}</li>
                  <li><label>Location: </label>{this.state.location}</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div className="Spig-stats-section">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item sm>
              <div className="Spig-stats-total">{this.state.ideas}</div>
              <div className="Spig-stats-label">IDEAS</div>
            </Grid>
            <Grid item sm>
              <div className="Spig-stats-total">{this.state.views}</div>
              <div className="Spig-stats-label">VIEWS</div>
            </Grid>
            <Grid item sm>
              <div className="Spig-stats-total">{this.state.posts}</div>
              <div className="Spig-stats-label">POSTS</div>
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCard);
