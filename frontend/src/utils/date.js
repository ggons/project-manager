const holidayKR = require('holiday-kr');
const moment = require('moment');

function addLeadingZero(value) {
  return (value < 10 ? '0' : '') + value
}

function getDate() {
  const _d = new Date()

  const year = _d.getFullYear()
  const month = _d.getMonth() + 1
  const day = _d.getDate()

  return {
    year,
    month,
    day
  }
}

function getDatetoString() {
  const {
    year,
    month,
    day
  } = getDate()

  return `${year}-${addLeadingZero(month)}-${addLeadingZero(day)}`
}

/*
    일요일
    신정 : 양력 1월 1일
    설날 : 음력 1월 1일 및 전후
    3.1절 : 양력 3월 1일
    석가탄신일 : 음력 4월 8일
    어린이날 : 양력 5월 5일
    현충일 : 양력 6월 6일
    광복절 : 양력 8월 15일
    추석 : 음력 8월 15일 및 전후
    개천절 : 양력 10월 3일
    한글날 : 양력 10월 9일
    성탄절 : 양력 12월 25일
*/
const solar = {
  '1-1': {
    name: '신정'
  },
  '3-1': {
    name: '3.1절'
  },
  '5-5': {
    name: '어린이날'
  },
  '6-6': {
    name: '현충일'
  },
  '8-15': {
    name: '광복절'
  },
  '10-3': {
    name: '개천절'
  },
  '10-9': {
    name: '한글날'
  },
  '12-25': {
    name: '성탄절'
  }
}

const lunar = {
  '12-30': {
    name: '설날'
  },
  '1-1': {
    name: '설날'
  },
  '1-2': {
    name: '설날'
  },
  '4-8': {
    name: '석가탄신일'
  },
  '8-14': {
    name: '추석'
  },
  '8-15': {
    name: '추석'
  },
  '8-16': {
    name: '추석'
  }
}

function getDayInfo({ year, month, date: day }) {
  const isHoliday = holidayKR.isSolarHoliday(year, month, day)
  let name = ''

  if (isHoliday) {
    if (solar[`${month}-${day}`]) {
      name = solar[`${month}-${day}`].name
    } else {
      const lunarInfo = holidayKR.getLunar(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10))
      const lunarKeyStr = `${lunarInfo.month}-${lunarInfo.day}`

      if (lunar[lunarKeyStr]) {
        name = lunar[lunarKeyStr].name
      }
    }
  }

  return {
    year,
    month,
    day,
    name,
    isHoliday
  }
}

function nextMonth(year, month, day) {
  year = month + 1 === 13 ? year + 1 : year;
  month = month + 1 === 13 ? 1 : month + 1;
  day = 1;

  return {
    year,
    month,
    day
  }
}

function prevMonth(year, month, day) {
  year = month - 1 === 0 ? year - 1 : year;
  month = month - 1 === 0 ? 12 : month - 1;
  day = 1;

  return {
    year,
    month,
    day
  }
}

function makeWeeksData(currentDate, schedules) {
  const thisMoment = moment(currentDate);
  const thisYear = thisMoment.get('year');
  const thisMonth = thisMoment.get('month') + 1;
  const thisDayOf1Date = moment(currentDate).date(1).get('day');
  const endDateOfThisMonth = thisMoment.daysInMonth();

  const prevMoment = moment(currentDate).subtract(1, 'months');
  const prevYear = prevMoment.get('year');
  const prevMonth = prevMoment.get('month') + 1;
  const endDateOfPrevMonth = prevMoment.daysInMonth();

  const nextMoment = moment(currentDate).add(1, 'months');
  const nextYear = nextMoment.get('year');
  const nextMonth = nextMoment.get('month') + 1;

  const totalWeek = Math.ceil((thisDayOf1Date + endDateOfThisMonth) / 7);

  const monthDate = makeMonthDate();

  const weeksDate = [];
  const weeksSchedule = [];
  const Grid = [];
  let weekDate;
  let weekSchedule;
  let tmpWeekDate;

  for (let i = 0; i < totalWeek; i++) {
    Grid[i] = [];
    for (let j = 0; j < 7; j++)
      Grid[i][j] = [];
  }

  for (let i = 0; i < totalWeek; i++) {
    weekDate = monthDate.splice(0, 7);
    weeksDate.push(weekDate);

    weekSchedule = new Array(7).fill([]);
    weeksSchedule.push(weekSchedule);

    let { year: lastDayYearOfWeek, month: lastDayMonthOfWeek, date: lastDayDateOfWeek } = weekDate[6];
    let lastDayOfWeekStr = `${lastDayYearOfWeek}-${addLeadingZero(lastDayMonthOfWeek)}-${addLeadingZero(lastDayDateOfWeek)}`;
    tmpWeekDate = {};

    let Row = Grid[i];
    for (let j = 0; j < 7; j++) {
      const { year, month, date, str } = weekDate[j];

      if (schedules[str]) {
        let Cell = Row[j];

        // 해당 일자의 스케쥴 리스트
        const scheduleList = schedules[str];
        for (let schedule of scheduleList) {
          const { startDate, endDate, vo } = schedule;

          if (tmpWeekDate[vo]) continue;

          let display = true;
          let width = 1;
          let CellSize = Cell.length;
          let row;

          if (startDate === endDate) {
            for (let k = 0; k < CellSize; k++) {
              if (!Cell[k]) {
                row = k;
                break;
              }
            }

            row = row > -1 ? row : CellSize;
            Cell[row] = true;
          } else {
            let compareEndDate = moment(endDate).isBefore(moment(lastDayOfWeekStr)) ? endDate : lastDayOfWeekStr;
            let diff = moment(compareEndDate).diff(moment([year, month - 1, date]), 'days');
            width = diff + 1;

            // row 값 계산
            let maxCellSize = 0;
            for (let k = j; k <= diff + j; k++) 
              maxCellSize = Row[k].length > maxCellSize ? Row[k].length: maxCellSize;
            
            for (let k = 0; k < maxCellSize; k++) {
              let isEmpty = true;
              for (let l = j; l <= diff + j; l++) {
                if (Row[l][k]) {
                  isEmpty = false;
                  break;
                }
              }

              if (isEmpty) {
                row = k;
                break;
              }
            }

            if (row === undefined) row = maxCellSize;

            // Grid 에 row 값 넣기
            for (let k = j; k <= diff + j; k++) {
              Row[k][row] = true;
            }

            tmpWeekDate[vo] = true;
          }

          schedule.display = display;
          schedule.width = width;
          schedule.row = row;            
        }

        weekSchedule[j] = scheduleList;
      }
    }
  }

  function makeMonthDate() {
    const dateArr = [];
    for (let i = 1; i <= endDateOfThisMonth; i++) {
      const str = `${thisYear}-${addLeadingZero(thisMonth)}-${addLeadingZero(i)}`;
      dateArr.push({ str, year: thisYear, month: thisMonth, date: i});
    }
    
    // 이번 달 1일이 월요일이 아닐 경우 (이전 달 마지막 주 정보 필요)
    if (thisDayOf1Date > 0) {
      for (let i = 0; i < thisDayOf1Date; i++) {
        const str = `${prevYear}-${addLeadingZero(prevMonth)}-${addLeadingZero(endDateOfPrevMonth - i)}`;
        dateArr.unshift({ str, year: prevYear, month: prevMonth, date: endDateOfPrevMonth - i, pm: true });
      }
    }
  
    // 이번 달 마지막이 토요일이 아닐 경우 (다음 달 첫째 주 정보 필요)
    if (dateArr.length % 7 !== 0) {
      const dateArrLen = dateArr.length;
      for (let i = 0; i < 7 - (dateArrLen % 7); i++) {
        const str = `${nextYear}-${addLeadingZero(nextMonth)}-${addLeadingZero(i + 1)}`;
        dateArr.push({ str, year: nextYear, month: nextMonth, date: i + 1, nm: true })
      }
    }
  
    return dateArr;
  }

  return { weeksDate, weeksSchedule }
}

module.exports = {
  addLeadingZero,
  getDate,
  getDatetoString,
  getDayInfo,
  nextMonth,
  prevMonth,
  makeWeeksData
}