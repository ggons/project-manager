import { Component } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';

class RegisterContainerMethod extends Component {
  /**
   * 저장 시 validation 체크
   */
  validation = () => {
    const { title, startDate, endDate } = this.props;
    let error = null;
    
    if (title.trim() === '')
      error = '타이틀을 입력하세요.';
    else if (!moment(startDate, 'YYYY-MM-DD').isValid()) 
      error = '시작 날짜 invalid';
    else if (!moment(endDate, 'YYYY-MM-DD').isValid()) 
      error = '종료 날짜 invalid';
    else if (moment(startDate).diff(moment(endDate)) > 0)
      error = '종료 날짜가 시작 날짜보다 빠릅니다.';

    !!error && toast.error(error);

    return !error;
  }

  /**
   * Color 클릭 시
   */
  handleColorClick = (color) => {
    this.setState({ color });
  }

  /**
   * Register Model 닫기
   */
  handleClose = () => {
    this.props.setScheduleModal(false);
  }

  /**
   * props 의 스케쥴 삭제
   */
  deleteSchedule = (vo, schedules) => {
    if (vo) {
      for (let date in schedules) {
        const index = schedules[date].findIndex(schedule => schedule.vo === vo);
        index !== -1 && schedules[date].splice(index, 1);
      }
    }
  }

  /**
   * 삭제 버튼 클릭 시
   */
  handleDeleteClick = () => {
    this.setState({ isOpenDeleteConfirmDialog: true });
  }

  /**
   * 삭제 Cancel / OK 클릭 시
   */
  handleDeleteConfirmSelect = (isDelete) => {
    if (isDelete) {
      const { vo, schedules } = this.props;
      this.deleteSchedule(vo, schedules);
      this.props.setSchedules(schedules);
      this.handleClose();
    }

    this.setState({ isOpenDeleteConfirmDialog: false });
  }

  /**
   * 저장 버튼 클릭 시
   */
  handleSubmit = e => {
    e.preventDefault();

    const isValid = this.validation();
    if (!isValid) {
      return false;
    }

    const { title, startDate, endDate, schedules, vo } = this.props;
    const color = this.state.color;
    let newSchedule = { title, startDate, endDate, color };

    let [sYear, sMonth, sDay] = startDate.split('-');
    sYear = parseInt(sYear, 10); sMonth = parseInt(sMonth, 10); sDay = parseInt(sDay, 10);
    let [eYear, eMonth, eDay] = endDate.split('-');
    eYear = parseInt(eYear, 10); eMonth = parseInt(eMonth, 10); eDay = parseInt(eDay, 10);
    newSchedule.vo = new Date().valueOf();

    this.deleteSchedule(vo, schedules);

    for (let sy = sYear; sy <= eYear; sy++) {
      let sm = sy === sYear ? sMonth : 1;
      let em = sy === eYear ? eMonth : 12;

      for (; sm <= em; sm++) {
        let sd = (sy === sYear && sm === sMonth) ? sDay : 1;
        let ed = (sy === eYear && sm === eMonth) ? eDay : moment([sy, sm - 1]).daysInMonth();

        for (; sd <= ed; sd++) {  
          const dateString = `${sy}-${sm < 10 ? '0' + sm : sm}-${sd < 10 ? '0' + sd : sd}`;
          if (!schedules[dateString])
            schedules[dateString] = [];

          schedules[dateString].push({ ...newSchedule });
        }
      }
    }

    this.props.setSchedules(schedules);
    this.handleClose();
  }
}
 
export default RegisterContainerMethod;