import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tableCell: {
    textAlign: 'center',
    padding: 5,
    width: '10%'
  }
}

const days = ['일', '월', '화', '수', '목', '금', '토'];
export default withStyles(styles)(({ classes }) => {
  const cells = days.map(day => (
    <TableCell 
      className={classes.tableCell}
      key={day}
    >{day}</TableCell>
  ));

  return (
    <TableHead>
      <TableRow>
        { cells }
      </TableRow>
    </TableHead>
  )
})