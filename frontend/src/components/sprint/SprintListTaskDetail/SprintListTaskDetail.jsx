import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Divider, TextField } from '@material-ui/core';
import { grey, lightBlue } from '@material-ui/core/colors';
import DownArrowIcon from '@material-ui/icons/ArrowDropDown';
import DateIcon from '@material-ui/icons/DateRangeOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SprintListStatusDialog from 'components/sprint/SprintListStatusDialog';
import { getStatusColor, getStatusStr } from 'utils/task';

const statusStr = getStatusStr();
const styles = theme => ({
  container: {
    padding: `0 ${theme.spacing.unit * 4}px`
  },
  name: {
    padding: theme.spacing.unit * 2,
    fontWeight: 700,
    background: grey[100]
  },
  statusRow: {
    
  },
  addButton: {
    margin: theme.spacing.unit,
    fontWeight: 'normal'
  },
  statusButton: {
    fontSize: 12,
    padding: '4px 0px 4px 8px'
  },
  leftIcon: {
    marginRight: theme.spacing.unit / 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  middleRow: {
    padding: `${theme.spacing.unit}px 0`
  },
  middleIcon: {
    width: '0.7em',
    height: '0.7em',
  },
  middleButton: {
    fontWeight: 400,
    fontSize: 10,
    '&:hover': {
      color: lightBlue[700],
      background: 'none'
    }
  },
});

const SprintListTaskDetail = ({ 
  classes, 
  task = {}, 
  isOpenStatusDialog, 
  onStatusChange, 
  onOpenStatusDialog,
  onDescriptionChange,
  onDescriptionBlur
}) => {
  if (task.status === undefined) return null;
  return (  
    <React.Fragment>
      <Typography color="primary" variant="subheading" className={classes.name}>{task.name}</Typography>
      <Grid container direction="column" className={classes.container}>
        <Grid item className={classes.statusRow}>
          <Button 
            className={classes.statusButton}
            onClick={() => onOpenStatusDialog(true)}
            style={{ color: getStatusColor(task.status), border: `2px solid ${getStatusColor(task.status)}` }}
          >
            {statusStr[task.status]}
            <DownArrowIcon />
          </Button>
          <Button size="small" className={classes.addButton}>
            + Add aggignee
          </Button>
        </Grid>
        <Divider />
        <Grid item className={classes.middleRow}>
          <Button size="small" className={classes.middleButton}>
            <DateIcon className={classNames(classes.leftIcon, classes.middleIcon)} />
            Set Date
          </Button>
          <Button size="small" className={classes.middleButton}>
            <AttachFileIcon className={classNames(classes.leftIcon, classes.middleIcon)} />
            Attach files
          </Button>
        </Grid>
        <Divider />
        <Grid item>
          <TextField
            id="description"
            label="description"
            name="description"
            multiline
            rows="5"
            fullWidth
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={task.description}
            onChange={onDescriptionChange}
            onBlur={onDescriptionBlur}
          />
        </Grid>
        <SprintListStatusDialog
          value={statusStr[task.status]}
          open={isOpenStatusDialog}
          onStatusChange={onStatusChange}
          onClose={() => onOpenStatusDialog(false)}
        />
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(SprintListTaskDetail);