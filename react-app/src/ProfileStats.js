import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    //maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
});

class ProfileStat extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item sm>
            <h5>IDEAS</h5>
          </Grid>
          <Grid item sm>
            <h5>VIEWS</h5>
          </Grid>
          <Grid item sm>
            <h5>POSTS</h5>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProfileStat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileStat);
