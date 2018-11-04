import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import NavigateNext from '@material-ui/icons/NavigateNext';

const styles = theme => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class PeopleList extends React.Component {

  dfltEmptyArray(obj) {
    if (Array.isArray(obj)) {
      return obj;
    } else {
      return [];
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="section-container Spig-section-padding">

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
      <Grid item sm>
      </Grid>
        <Grid item sm>
          <h5 className="Spig-following-active">FOLLOWING</h5>
        </Grid>
        <Grid item sm>
          <h5>FOLLOWERS</h5>
        </Grid>
        <Grid item sm>
        </Grid>
      </Grid>

      <div style={{textAlign: 'left', paddingLeft: 20}}>People I'm following</div>
        <List>
          {this.dfltEmptyArray(this.props.people).map(p => (
            <ListItem key={p.followee.userId} dense button>
              <Avatar alt="Remy Sharp" src={p.followee.avatar} />
              <ListItemText primary={`${p.followee.userDisplayName}`} />
            </ListItem>
          ))}
          <div style={{textAlign: 'right', padding: 20}}>SEE ALL
          <IconButton color="inherit" aria-label="NavigateBefore">
            <NavigateNext />
          </IconButton>
          </div>
        </List>

      </div>
    );
  }
}

PeopleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PeopleList);
