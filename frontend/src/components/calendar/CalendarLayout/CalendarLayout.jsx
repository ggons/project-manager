import React from 'react';
import Table from 'components/calendar/Table';
import HeaderContainer from 'containers/calendar/HeaderContainer';

const CalendarLayout = () => {
  return (  
    <React.Fragment>
      <br />
      <HeaderContainer />
      <br />
      <Table />
    </React.Fragment>
  );
}
 
export default CalendarLayout;