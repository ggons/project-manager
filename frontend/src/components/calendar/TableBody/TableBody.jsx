import React from 'react';
import { TableBody } from '@material-ui/core';
import TableBodyRow from 'components/calendar/TableBodyRow';

function renderWeeks(weeksDate, weeksSchedule, rest) {
  return weeksDate.map((weekDate, i) => (
    <TableBodyRow weekDate={weekDate} weekSchedule={weeksSchedule[i]} key={i} { ...rest } />
  ));
}

export default ({ weeksDate, weeksSchedule, ...rest }) => {
  return (  
    <TableBody>
      { renderWeeks(weeksDate, weeksSchedule, rest) }
    </TableBody>
  );
}