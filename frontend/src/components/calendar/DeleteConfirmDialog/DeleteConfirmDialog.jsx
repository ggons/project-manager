import React from 'react';
import { Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

const DeleteConfirmDialog = ({ open, onDeleteConfirmSelect }) => {
  return (  
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
    >
      <DialogTitle id="confirmation-dialog-title">정말 삭제하시겠습니까?</DialogTitle>
        <DialogActions>
          <Button onClick={() => onDeleteConfirmSelect(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => onDeleteConfirmSelect(true)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
  );
}
 
export default DeleteConfirmDialog;