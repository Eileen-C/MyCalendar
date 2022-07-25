// var data = {
//   current_date: {
//     day: "",
//     date: "",
//     month: "",
//     year: "",
//   },
//   calendar: {
//     month: "",
//     year: ""
//   }
// };

// function updateCurrentDates() {
//   const today = new Date();
//   let date = today.getDate();
//   let day = today.getDay();
//   let month = today.getMonth();
//   let year = today.getFullYear();

//   data.current_date.day = day;
//   data.current_date.month = month;
//   data.current_date.year = year;
//   data.current_date.date = date;
//   data.calendar.month = month;
//   data.calendar.year = year;

//   document.getElementById("cur-year").innerHTML = year;
//   document.getElementById("cur-day").innerHTML = translateToWeekdayName(day);
//   document.getElementById("cur-date").innerHTML = addOrdinalIndicator(date);
//   document.getElementById("cur-month").innerHTML = translateToMonthName(month);
// }

// function updateCalendarDates() {
//   document.getElementById("cal-year").innerHTML = data.calendar.year;
//   document.getElementById("cal-month").innerHTML = translateToMonthName(data.calendar.month);
// }

// function addOrdinalIndicator(date) {
//   switch (date) {
//     case 1:
//     case 21:
//     case 31: return date + "<sup>st</sup>";
//     case 2:
//     case 22: return date + "<sup>nd</sup>";
//     case 3:
//     case 23: return date + "<sup>rd</sup>";
//     default: return date + "<sup>th</sup>";
//   }
// }

// function translateToWeekdayName(day) {
//   switch (day) {
//     case 0: return "Sunday";
//     case 1: return "Monday";
//     case 2: return "Tuesday";
//     case 3: return "Wednesday";
//     case 4: return "Thursday";
//     case 5: return "Friday";
//     case 6: return "Saturday";
//   }
// }

// function translateToMonthName(month) {
//   switch (month) {
//     case 0: return "January";
//     case 1: return "February";
//     case 2: return "March";
//     case 3: return "April";
//     case 4: return "May";
//     case 5: return "June";
//     case 6: return "July";
//     case 7: return "August";
//     case 8: return "September";
//     case 9: return "October";
//     case 10: return "November";
//     case 11: return "December";
//   }
// }

// function updateDates() {
//   updateCurrentDates();
//   updateCalendarDates();

//   let today = new Date();//新增一個Date物件，命名為today
//   document.getElementById("cur-year").innerHTML = today.getFullYear();
//   document.getElementById("cal-year").innerHTML = today.getFullYear();
//   document.getElementById("cur-month").innerHTML = getMonthName(today.getMonth());
//   document.getElementById("cal-month").innerHTML = getMonthName(today.getMonth());
//   document.getElementById("cur-day").innerHTML = getWeekdayName(today.getDay());
//   document.getElementById("cur-date").innerHTML = addDateOrdinal(today.getDate());
// }

// updateDates();//更新日期相關資料

// // //練習：將月曆表格從1填到42
// let days = document.getElementsByTagName("td");//將td標籤放入days物件集合中
// // console.log(days.length);//利用console.log來檢視變數的值
// for (var i = 0; i < days.length; i++) {
//   days[i].innerHTML = i;
// }

// //算出今年金月1日是星期幾；先計算出今年今月
// let thisYear = today.getFullYear();
// let thisMonth = today.getMonth();
// //建立今年今月1日的日期物件
// let firstDayOfMonth = new Date(thisYear, thisMonth, 1);
// let weekDayOfFirstDayOfMonth = firstDayOfMonth.getDay();


/* function getMonthName(month) {
  if (month == 0) return "January";
  if (month == 1) return "February";
  if (month == 2) return "March";
  if (month == 3) return "April";
  if (month == 4) return "May";
  if (month == 5) return "June";
  if (month == 6) return "July";
  if (month == 7) return "August";
  if (month == 8) return "September";
  if (month == 9) return "October";
  if (month == 10) return "November";
  if (month == 11) return "December";
}

function getWeekdayName(day) {
  let WeekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return WeekdayNames[day];
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
function upDate() {
  let today = new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth();
  let firstDayofMonth = new Date(thisYear, thisMonth, 1)
  let weekDayofFirstDayofMonth = firstDayofMonth.getDay();
  document.getElementById("cur-year").innerHTML = today.getFullYear();
  document.getElementById("cal-year").innerHTML = today.getFullYear();
  document.getElementById("cur-month").innerHTML = getMonthName(today.getMonth());
  document.getElementById("cal-month").innerHTML = getMonthName(today.getMonth());
  document.getElementById("cur-day").innerHTML = getWeekdayName(today.getDay());
  document.getElementById("cur-date").innerHTML = addOrdinalIndicator(today.getDate());
} */ 

function getMonthName(month) {
  if (month == 0) return "January";
  if (month == 1) return "February";
  if (month == 2) return "March";
  if (month == 3) return "April";
  if (month == 4) return "May";
  if (month == 5) return "June";
  if (month == 6) return "July";
  if (month == 7) return "August";
  if (month == 8) return "September";
  if (month == 9) return "October";
  if (month == 10) return "November";
  if (month == 11) return "December";
}

function getWeekdayName(day) {
  let WeekdayNames = 
        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday"];
  return WeekdayNames[day];
}

function addDateOrdinal(date) {        

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


function updateDate(){
  let today = new Date();         
  
  document.getElementById("cur-year").innerHTML = today.getFullYear();
  document.getElementById("cal-year").innerHTML = today.getFullYear();
  document.getElementById("back-year").innerHTML = today.getFullYear();
  document.getElementById("cur-month").innerHTML = getMonthName( today.getMonth() );
  document.getElementById("cal-month").innerHTML = getMonthName( today.getMonth() );
  document.getElementById("cur-day").innerHTML = getWeekdayName( today.getDay() );
  document.getElementById("cur-date").innerHTML = addDateOrdinal( today.getDate() ) ;
}
