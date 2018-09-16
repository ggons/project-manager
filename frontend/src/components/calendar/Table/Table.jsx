import React from 'react';
import { Paper, Table } from '@material-ui/core';
import TableHead from 'components/calendar/TableHead';
import TableBodyContainer from 'containers/calendar/TableBodyContainer';

export default () => {
  return (  
    <Paper>
      <Table>
        <TableHead />
        <TableBodyContainer />
      </Table>
    </Paper>
  );
}