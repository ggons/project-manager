import React from 'react';
import classNames from 'classnames';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { getDayInfo, addLeadingZero } from 'utils/date';
import styles from './styles';

const columnWidth = 95;
const oneScheduleHeight = 25;

const TableBodyCell = ({ 
  classes, 
  day, 
  scheduleList, 
  onDateClick, 
  onScheduleClick, 
}) => {
  const { isHoliday, name: holidayName } = getDayInfo(day);
  let maxRow = 2;
  
  const schedules = scheduleList.map((schedule, i) => {
    const { title, display, row, width, color } = schedule;
    if (!display) return null;
    if (row > maxRow) maxRow = row;

    return (
      <div 
        className={classes.schedule}
        style={{
          width: (columnWidth + (100 * (width - 1))) + '%',
          top: oneScheduleHeight + (row * oneScheduleHeight),
          background: color
        }}
        onClick={e => onScheduleClick(e, schedule)}
        key={i}
      >
        {title}
      </div>
    )
  });

  const tdHeight = (50 + oneScheduleHeight * maxRow) + 'px';
  return (  
    <TableCell 
      className={classes.tableCell}
      style={{ height: tdHeight }}
      onClick={() => onDateClick(day) }
    >
      <p className={classNames(classes.p, { [classes.exday]: isExday(day) }, { [classes.holiday]: isHoliday })}>
        { holidayName && <span className={classes.holidayName}>{holidayName}</span>}
        <span>{addLeadingZero(day.date)}</span>
      </p>
      { schedules }
    </TableCell>
  );
}

function isExday(day) {
  return day.nm || day.pm;
}
 
export default withStyles(styles)(TableBodyCell);