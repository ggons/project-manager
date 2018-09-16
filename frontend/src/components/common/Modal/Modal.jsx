import React from 'react';
import { Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    borderRadius: 20,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  }
});

const SimpleModal = (props) => {
  const { classes, open, style = {}, onClose, children } = props;

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={onClose}
    >
      <div className={classes.paper} style={style}>
        { children }
      </div>
    </Modal>
  )
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;