import React, { Component } from 'react';
import SprintNav from 'components/sprint/SprintNav';

const navList = [
  'List',
  'Board',
  'Gantt Chart',
  'Files',
  'Stream',
  'Timelog',
  'Analytics'
];

class SprintHeaderContainer extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    const url = this.getUrl(value);
    this.props.history.replace(url);
    this.setState({ value });
  }

  render() { 
    const { value } = this.state;
    
    return (  
      <SprintNav
        navList={navList}
        value={value}
        onChange={this.handleChange} 
      />
    );
  }

  getUrl = value => {
    return `${this.props.match.url}/${navList[value].replace(' ', '').toLowerCase()}`;
  }
}
 
export default SprintHeaderContainer;