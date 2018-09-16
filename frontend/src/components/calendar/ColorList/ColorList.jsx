import React from 'react';
import { Grid } from '@material-ui/core';
import { 
  red, 
  pink,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  amber,
  deepOrange,
  brown,
} from '@material-ui/core/colors';
import ColorItem from 'components/calendar/ColorItem';

const colorList = [ 
  red[500], 
  pink[500],
  deepPurple[500],
  indigo[500],
  blue[500],
  cyan[500],
  teal[500],
  green[500],
  lime[500],
  amber[500],
  deepOrange[500],
  brown[500],
];

const ColorList = ({ selectedColor, onColorClick }) => {
  const colors = colorList.map(color => (
    <ColorItem 
      color={color}
      selectedColor={selectedColor}
      onColorClick={onColorClick}
      key={color}  
    />
  ));

  return (  
    <Grid container>
      { colors }
    </Grid>
  );
}
 
export default ColorList;