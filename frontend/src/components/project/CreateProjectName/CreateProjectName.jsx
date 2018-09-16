import React from 'react';
import { TextField } from '@material-ui/core';

const CreateProjectName = ({ newname, onChange }) => {
  return (  
    <div>
      <TextField
        required
        name="newname"
        value={newname}
        label="Project Name"
        margin="normal"
        onChange={onChange}
      />
    </div>
  );
}
 
export default CreateProjectName;