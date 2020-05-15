import dateFormat from './format';

class DatePicker {
  constructor(options) {
    this.options = options || {};

    const { startDate } = this.options;
    const baseDate = startDate ? new Date(startDate) : new Date();

    this.today = {
      year: baseDate.getFullYear(),
      month: baseDate.getMonth(),
      date: baseDate.getDate(),
      day: baseDate.getDay(),
      hour: baseDate.getHours(),
      minute: baseDate.getMinutes(),
    };
    this.calendar = this.dateCompute(baseDate);
  }

  dateCompute(baseDate) {
    const calendar = [[], [], [], [], [], []];
    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();

    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0);
    const endOfPrevMonth = new Date(year, month, 0);

    const startDate = startOfMonth.getDate();
    const startDay = startOfMonth.getDay();
    const endDate = endOfMonth.getDate();
    const prevMonthEndDate = endOfPrevMonth.getDate();
    const startDateOfPrevMonth = prevMonthEndDate - startDay;

    const weekCount = 7;

    for (let i = startDate; i <= endDate; i += 1) {
      const date = i;
      const day = (startDay - 1 + i) % weekCount;
      const week = Math.ceil((startDay + i) / weekCount) - 1;

      calendar[week][day] = {
        year,
        month,
        date,
        day,
        week,
      };
    }

    for (let i = 0; i < startDay; i += 1) {
      const date = startDateOfPrevMonth + i + 1;
      const prevMonth = month - 1;

      calendar[0][i] = {
        year: prevMonth < 0 ? year - 1 : year,
        month: prevMonth < 0 ? 11 : prevMonth,
        date,
        day: i,
        week: 0,
      };
    }

    let startOfNextMonth = 1;

    calendar.forEach((week, weekIndex) => {
      const { length } = week;

      if (length < weekCount) {
        for (let i = length; i < weekCount; i += 1) {
          week[i] = {
            year,
            month: month + 1,
            date: startOfNextMonth,
            day: i,
            week: weekIndex,
          };

          startOfNextMonth += 1;
        }
      }
    });

    return calendar.reduce((acc, week) => acc.concat(week), []);
  }

  build(target, update) {
    const exist = document.querySelector('#calendar');

    if (exist) {
      exist.remove();

      if (!update) {
        return;
      }
    }

    const parent = target.parentNode.parentNode;
    const wrap = document.createElement('div');
    const dateChanger = document.createElement('div');
    const arrowLeft = document.createElement('i');
    const arrowRight = document.createElement('i');
    const yearAndMonth = document.createElement('span');
    const calendar = document.createElement('div');
    const time = document.createElement('div');
    const timeLabel = document.createElement('span');
    const hour = document.createElement('div');
    const hourValue = document.createElement('input');
    const hourSelector = document.createElement('ul');
    const minute = document.createElement('div');
    const minuteValue = document.createElement('input');
    const minuteSelector = document.createElement('ul');
    const timeSeparator = document.createElement('span');

    this.calendar.forEach(d => {
      const box = document.createElement('div');
      const value = document.createElement('span');
      const active = d.month === this.today.month ? 'active' : '';
      const sun = d.day === 0 ? 'sun' : '';
      const today = d.date === this.today.date ? 'today' : '';
      const className = `date ${active} ${sun} ${today}`;

      value.innerText = d.date;
      value.className = 'value';

      box.appendChild(value);
      box.className = className
        .split(' ')
        .filter(v => v)
        .join(' ')
        .trim();

      this.dateSelectListener(box, d);

      if (today) {
        const event = new Event('click');
        box.dispatchEvent(event);
      }

      calendar.appendChild(box);
    });

    arrowLeft.className = 'icon left chevron';
    arrowRight.className = 'icon right chevron';

    yearAndMonth.innerText = `${this.today.year}년 ${this.today.month + 1}월`;

    dateChanger.className = 'year-month opener';
    dateChanger.appendChild(arrowLeft);
    dateChanger.appendChild(arrowRight);
    dateChanger.appendChild(yearAndMonth);

    timeLabel.className = 'time-label';
    timeLabel.innerText = '시간';

    hour.className = 'hour';
    minute.className = 'minute';
    timeSeparator.className = 'time-separator';
    timeSeparator.innerText = ':';

    this.setTime(hour, hourValue, hourSelector, 24);
    this.setTime(minute, minuteValue, minuteSelector, 59);

    time.className = 'time';
    time.appendChild(timeLabel);
    time.appendChild(hour);
    time.appendChild(timeSeparator);
    time.appendChild(minute);

    wrap.id = 'calendar';
    wrap.className = this.options.type;
    wrap.appendChild(dateChanger);
    wrap.appendChild(calendar);
    wrap.appendChild(time);

    parent.appendChild(wrap);
  }

  setTime(parent, input, selector, end) {
    const zeroPadded = d => (d < 10 ? `0${d}` : d);
    const rmOpenClass = () => parent.className.replace(/open/gi, '').trim();
    const name = parent.className;

    input.defaultValue = zeroPadded(this.today[name]);
    input.setAttribute('type', 'number');
    input.setAttribute('readonly', 'readonly');
    input.addEventListener('click', () => {
      if (parent.className.match(/open/gi)) {
        parent.className = rmOpenClass();
      } else {
        parent.className += ' open';
      }
    });
    input.addEventListener('change', () => {});

    selector.className = 'time-selector';

    for (let i = 0; i <= end; i += 1) {
      const item = document.createElement('li');
      const val = zeroPadded(i);

      item.className = 'time-item';
      item.innerText = val;
      item.addEventListener('click', () => {
        const changeEvent = new Event('change');
        // const clickEvent = new Event('click');

        this.today[name] = val;
        input.value = val;
        input.dispatchEvent(changeEvent);
        parent.className = rmOpenClass();

        const method = name === 'hour' ? 'setHours' : 'setMinutes';
        const selectedDate = this.options.target.getAttribute('data-origin');
        const parseDate = new Date(selectedDate);
        const changeDate = new Date(parseDate[method](val));

        this.setDateValue(changeDate);
      });

      selector.appendChild(item);
    }

    parent.appendChild(input);
    parent.appendChild(selector);
  }

  setDateValue(date) {
    const event = new Event('change');

    this.options.target.setAttribute('data-origin', date);
    this.options.target.value = dateFormat(date, '%Y.%m.%d. %D. %H:%M');
    this.options.target.dispatchEvent(event);
  }

  dateSelectListener(box, d) {
    box.addEventListener('click', () => {
      const all = document.querySelectorAll('.date');
      const selectedDate = new Date(
        d.year,
        d.month,
        d.date,
        this.today.hour,
        this.today.minute,
      );

      all.forEach(date => {
        date.className = date.className.replace(/selected/gi, '');
      });

      box.className += ' selected';

      this.setDateValue(selectedDate);
    });
  }
}

export default DatePicker;
