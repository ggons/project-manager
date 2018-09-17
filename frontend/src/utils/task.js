import { green, lightBlue, cyan, brown } from '@material-ui/core/colors';

const status = [
  'New',
  'In Progress',
  'Completed', 
  'On Hold',
  'Cancelled'
];

const statusColor = {
  'New': lightBlue[500],
  'In Progress': cyan[500],
  'Completed': green[300], 
  'On Hold': brown[200],
  'Cancelled': brown[200] 
}

const styles = {
  new: {
    color: lightBlue[500]
  },
  inprogress: {
    color: cyan[500]
  },
  completed: {
    color: green[300]
  },
  onhold: {
    color: brown[200]
  },
  cancelled: {
    color: brown[200]
  }
};

export const getStatusColor = (key) => {
  if (typeof key === 'string')
    return statusColor[key];
  else
    return statusColor[status[key]]
}

export function getStatusStr(index) {
  if (index === undefined) 
    return status;
  else
    return status[index];
}
export function getStatusIdx(str) {
  return status.indexOf(str);
}

export const taskStyles = styles;
