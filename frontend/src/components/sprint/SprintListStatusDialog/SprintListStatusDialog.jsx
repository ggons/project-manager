import React from 'react';
import { Dialog, Radio, FormControlLabel, RadioGroup, DialogContent } from '@material-ui/core';
import { getStatusStr } from 'utils/task';

const statusStr = getStatusStr();
const SprintListStatusDialog = ({ value, onStatusChange, ...other }) => {
  return (  
    <Dialog
      aria-labelledby="status-dialog"
      { ...other }
    >
      <DialogContent>
        <RadioGroup
          aria-label="Status"
          name="ringtone"
          value={value}
          onChange={onStatusChange}
        >
          {statusStr.map(status => (
            <FormControlLabel value={status} key={status} control={<Radio />} label={status} />
          ))}
        </RadioGroup>
      </DialogContent>
    </Dialog>
  );
}
 
export default SprintListStatusDialog;