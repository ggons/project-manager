import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import DeleteConfirmDialog from 'components/calendar/DeleteConfirmDialog';

const styles = theme => ({
  deleteBtn: {
    marginTop: 10
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});


const RegisterActions = ({ classes, vo, open, onDeleteClick, onDeleteConfirmSelect }) => {
  const deleteBtn = vo && (  
    <Button
      className={classes.deleteBtn}
      type="button"
      fullWidth
      variant="contained"
      color="secondary"
      onClick={onDeleteClick}
    >
      Delete
      <DeleteIcon className={classes.rightIcon} />
    </Button> 
  )

  return (  
    <React.Fragment>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Save
        <SaveIcon className={classes.rightIcon} />
      </Button>
      { deleteBtn }
      <DeleteConfirmDialog 
        open={open}
        onDeleteConfirmSelect={onDeleteConfirmSelect}
      />
    </React.Fragment>
  );
}
 
export default withStyles(styles)(RegisterActions);