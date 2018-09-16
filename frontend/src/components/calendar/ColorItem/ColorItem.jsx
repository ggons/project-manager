import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  colorDiv: {
    height: 20,
    cursor: 'pointer'
  },
  selectedColorDiv: {
    color: '#fff',
    paddingTop: 2
  }
};

const ColorItem = ({ classes, color, selectedColor, onColorClick }) => {
  return (  
    <Grid 
      item
      xs={1}
      className={classes.colorDiv}
      style={{ backgroundColor: color }}
      onClick={() => onColorClick(color)}
      key={color}
    >
      <Typography 
        variant="body1" 
        align="center"
        className={classes.selectedColorDiv}
      >
        {selectedColor === color ? '√' : null}
      </Typography>
    </Grid> 
  );
}
 
export default withStyles(styles)(ColorItem);