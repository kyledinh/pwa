import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class PeopleList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem key={value} dense button>
              <Avatar alt="Remy Sharp" src="/avatars/avatar2.jpg" />
              <ListItemText primary={`Line item ${value + 1}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

PeopleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PeopleList);
