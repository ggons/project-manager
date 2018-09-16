import { deepOrange, cyan } from '@material-ui/core/colors';

export default {
  tableCell: {
    height: 100,
    padding: 5,
    paddingRight: '5px !important',
    verticalAlign: 'top',
    position: 'relative',
    cursor: 'pointer'
  },
  p: {
    position: 'relative'
  },
  holidayName: {
    right: 0,
    position: 'absolute'
  },
  exday: {
    opacity: .3
  },
  holiday: {
    color: deepOrange[500]
  },
  schedule: {
    position: 'absolute',
    backgroundColor: cyan['A400'],
    borderRadius: 3,
    color: '#fff',
    padding: '0 5px',
    height: 22,
    lineHeight: '22px',
    zIndex: 1
  }
}