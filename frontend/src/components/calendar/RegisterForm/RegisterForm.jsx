import React from 'react';
import { Input, InputLabel, FormControl, TextField, Grid } from '@material-ui/core';
import ColorList from 'components/calendar/ColorList';
import RegisterActions from 'components/calendar/RegisterActions';

const RegisterForm = ({ 
  title, 
  startDate, 
  endDate, 
  vo,
  colors, 
  open,
  color,
  onChange, 
  onColorClick,
  onDeleteClick,
  onDeleteConfirmSelect,
  onSubmit
}) => {
  return (  
    <form onSubmit={onSubmit}>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input 
          id="title" 
          name="title" 
          autoComplete="title" 
          autoFocus 
          value={title}
          onChange={e => onChange(e.target)}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <Grid container>
          <Grid item xs={5}>
            <TextField
              name="startDate"
              type="date"
              id="startDate"
              value={startDate}
              helperText="startDate"
              fullWidth
              onChange={e => onChange(e.target)}
            />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5}>
            <TextField
              name="endDate"
              type="date"
              id="endDate"
              value={endDate}
              helperText="endDate"
              fullWidth
              onChange={e => onChange(e.target)}
            />
          </Grid>
        </Grid>
      </FormControl>
      <TextField
        id="multiline-static"
        label="Contents"
        multiline
        fullWidth
        rows="5"
        defaultValue=""
        margin="normal"
      />
      <FormControl margin="normal" fullWidth>
        <ColorList
          selectedColor={color}
          onColorClick={onColorClick}
        />
        { colors }
      </FormControl>
      <RegisterActions
        vo={vo} 
        open={open}
        onDeleteClick={onDeleteClick}
        onDeleteConfirmSelect={onDeleteConfirmSelect}
      />
    </form>
  );
}
 
export default RegisterForm;