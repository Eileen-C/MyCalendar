var data = {
  current_date: {
    day: "",
    date: "",
    month: "",
    year: "",
  },
  calendar: {
    month: "",
    year: ""
  }
};
let today = new Date();

function updateCurrentDates() {

  let date = today.getDate();
  let day = today.getDay();
  let month = today.getMonth();
  let year = today.getFullYear();

  data.current_date.day = day;
  data.current_date.month = month;
  data.current_date.year = year;
  data.current_date.date = date;

  data.calendar.month = month;
  data.calendar.year = year;

  document.getElementById("cur-year").innerHTML = year;
  document.getElementById("cur-day").innerHTML = translateToWeekdayName(day);
  document.getElementById("cur-date").innerHTML = addOrdinalIndicator(date);
  document.getElementById("cur-month").innerHTML = translateToMonthName(month);

  changeColor();
}

function updateCalendarDates() {
  document.getElementById("cal-year").innerHTML = data.calendar.year;
  document.getElementById("cal-month").innerHTML = translateToMonthName(data.calendar.month);
}

function addOrdinalIndicator(date) {
  switch (date) {
    case 1:
    case 21:
    case 31: return date + "<sup>st</sup>";
    case 2:
    case 22: return date + "<sup>nd</sup>";
    case 3:
    case 23: return date + "<sup>rd</sup>";
    default: return date + "<sup>th</sup>";
  }
}

function translateToWeekdayName(day) {
  switch (day) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
  }
}

function translateToMonthName(month) {
  switch (month) {
    case 0: return "January";
    case 1: return "February";
    case 2: return "March";
    case 3: return "April";
    case 4: return "May";
    case 5: return "June";
    case 6: return "July";
    case 7: return "August";
    case 8: return "September";
    case 9: return "October";
    case 10: return "November";
    case 11: return "December";
  }
}

function updateDates() {
  updateCurrentDates();
  updateCalendarDates();
  changeColor();
  
}
