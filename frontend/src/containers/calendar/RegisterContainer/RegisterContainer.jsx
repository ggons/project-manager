import React from 'react';
import { connect } from 'react-redux';
import { blue } from '@material-ui/core/colors';
import RegisterContainerMethod from './RegisterContainerMethod';
import Modal from 'components/common/Modal';
import RegisterHeader from 'components/calendar/RegisterHeader';
import RegisterForm from 'components/calendar/RegisterForm';
import * as actions from 'actions';

class RegisterContainer extends RegisterContainerMethod {
  state = {
    color: blue[500],
    isOpenDeleteConfirmDialog: false
  }

  render() {
    const { 
      open, 
      title, 
      startDate, 
      endDate, 
      vo,
      changeForm 
    } = this.props;
    const { color } = this.state;

    const { isOpenDeleteConfirmDialog } = this.state;

    return (  
      <Modal
        open={open}
        onClose={this.handleClose}
        style={{ border: `5px solid ${this.state.color}`, outline: 'none'}}
      >
        <RegisterHeader />
        <RegisterForm
          title={title}
          startDate={startDate}
          endDate={endDate}
          vo={vo}
          open={isOpenDeleteConfirmDialog}
          color={color} 
          onChange={changeForm}
          onColorClick={this.handleColorClick}
          onDeleteClick={this.handleDeleteClick}
          onDeleteConfirmSelect={this.handleDeleteConfirmSelect}
          onSubmit={this.handleSubmit}
        />
      </Modal>
    );
  }
}

export default connect(
  state => ({
    title: state.schedule.form.title,
    startDate: state.schedule.form.startDate,
    endDate: state.schedule.form.endDate,
    vo: state.schedule.form.vo,
    open: state.schedule.open,
    schedules: state.schedule.schedules
  }),
  actions
)(RegisterContainer);