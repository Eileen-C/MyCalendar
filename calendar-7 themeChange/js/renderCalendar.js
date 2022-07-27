function fillInMonth(thisYear, thisMonth) {
    //更新月曆表格標題的年份與月份
    document.getElementById("cal-year").innerHTML = thisYear;
    document.getElementById("cal-month").innerHTML = translateToMonthName(thisMonth);

    // 判斷目前月曆表格是否有一個td物件包含'id="today"'，找到後清除該物件裡的id屬性
    if (document.getElementById("today")) {
        document.getElementById("today").removeAttribute("id")
    }

    let firstDateOfThisMonthYear = new Date(thisYear, thisMonth, 1);
    let startIndex = firstDateOfThisMonthYear.getDay();

    let dates = document.getElementsByTagName("td")
    //加上今日的id屬性today，只有今年今月才做
    if (today.getFullYear() == thisYear && today.getMonth() == thisMonth) {
        dates[startIndex + today.getDate() - 1].setAttribute("id", "today")
    }

    //每個月的天數
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //閏年
    if ((thisYear % 4 == 0 && thisYear % 100 != 0) || (thisYear % 400 == 0)) monthDays[1] = 29;

    //今月
    for (let i = 1; i <= monthDays[thisMonth]; i++, startIndex++) {
        dates[startIndex].innerHTML = i;
        dates[startIndex].classList.remove("todayColor")
    }

    //下月
    for (i = 1; startIndex < 42; i++, startIndex++) {
        dates[startIndex].innerHTML = i;
        dates[startIndex].classList.add("todayColor");
    }

    //上月
    startIndex = firstDateOfThisMonthYear.getDay() - 1;
    let lastMonth = thisMonth - 1;
    if (lastMonth == -1) lastMonth = 11;
    i = monthDays[lastMonth];
    for (; startIndex >= 0; startIndex--, i--) {
        dates[startIndex].innerHTML = i;
        dates[startIndex].classList.add("todayColor");
    }
}

let today = new Date();
updateDates();//更新月曆中的日期資料 (年、月、日、週幾)

let thisYear = today.getFullYear();
let thisMonth = today.getMonth();
fillInMonth(thisYear, thisMonth);

function previousMonth(){
    thisMonth--;
    if (thisMonth == -1){
        thisMonth = 11;
        thisYear--;
    }
    fillInMonth(thisYear, thisMonth);
}

function nextMonth(){
    thisMonth++;
    if (thisMonth == 12){
        thisMonth = 0;
        thisYear++;
    }
    fillInMonth(thisYear,thisMonth);
}

//
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: previousMonth(); break;
        case 39: nextMonth(); break;
    }
};