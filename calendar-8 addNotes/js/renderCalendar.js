function getUID(month, year, day) {
    if (month == -1) { //上個月減1，進到去年份
        month = 11;
        year--;
    }
    if (month == 12) { //下個月加1，進到下年份
        month = 0;
        year++;
    }
    // console.log(month.toString() + year.toString() + day.toString())
    return month.toString() + year.toString() + day.toString();
}


//記事圖示與ToolTip處理
function appendSpriteToCellAndTooltip(uid, elem) {
    for (let i = 0; i < postIts.length; i++) { //走訪一遍記事資料集合
        if (uid == postIts[i].id) {//在記事集合裏找到與目前的td物件相符的uid，表示目前的td是有記事的…
            elem.innerHTML += `<img src='images/note${postIts[i].note_num}.png' alt='A post-it note'>`;
            elem.classList.add("tooltip");
            elem.innerHTML += `<span>${postIts[i].note}</span>`;
            break;//中斷走訪後面的記事資料
        }
    }
}

function fillInMonth(thisYear, thisMonth) {

    //更新月曆表格標題的年份與月份
    document.getElementById("cal-year").innerHTML = thisYear;
    document.getElementById("cal-month").innerHTML = translateToMonthName(thisMonth);

    // 判斷目前月曆表格是否有一個td物件包含'id="today"'，找到後清除該物件裡的id屬性
    if (document.getElementById("today")) {
        document.getElementById("today").removeAttribute("id");
    }

    let firstDateOfThisMonthYear = new Date(thisYear, thisMonth, 1);
    let startIndex = firstDateOfThisMonthYear.getDay();

    let dates = document.getElementsByTagName("td");

    //處理上個月最後一天的css格式，右邊線是灰色
    if (startIndex >= 1) {
        for (let i = startIndex - 1; i >= 0; i--) dates[i].classList.remove("prev-month-last-day");
        dates[startIndex - 1].classList.add("prev-month-last-day");
    }

    //加上今日的id屬性today，只有今年今月才做
    if (today.getFullYear() == thisYear && today.getMonth() == thisMonth) {
        dates[startIndex + today.getDate() - 1].setAttribute("id", "today");
    }

    //清除td裏的class的tooltip
    let tooltips = document.getElementsByClassName("tooltip");
    if (tooltips.length > 0) {
        for (i = 0; i < tooltips.length; i++) tooltips[i].classList.remove("tooltip");
    }

    //每個月的天數
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //閏年
    if ((thisYear % 4 == 0 && thisYear % 100 != 0) || (thisYear % 400 == 0)) monthDays[1] = 29;

    //今月
    for (let i = 1; i <= monthDays[thisMonth]; i++, startIndex++) {
        dates[startIndex].innerHTML = i;
        dates[startIndex].classList.remove("todayColor");
        dates[startIndex].style = null;

        let uid = getUID(thisMonth, thisYear, i);
        dates[startIndex].setAttribute("data-uid", uid);
        appendSpriteToCellAndTooltip(uid, dates[startIndex]);
    }

    //下月
    for (i = 1; startIndex < 42; i++, startIndex++) {
        dates[startIndex].innerHTML = i;
        dates[startIndex].classList.add("todayColor");

        let uid = getUID(thisMonth+1, thisYear, i);
        dates[startIndex].setAttribute("data-uid", uid);
        appendSpriteToCellAndTooltip(uid, dates[startIndex]);
    }

    //上月
    startIndex = firstDateOfThisMonthYear.getDay() - 1;
    let lastMonth = thisMonth - 1;
    if (lastMonth == -1) lastMonth = 11;
    i = monthDays[lastMonth];
    for (; startIndex >= 0; startIndex--, i--) {
        dates[startIndex].innerHTML = i;
        dates[startIndex].classList.add("todayColor");

        let uid = getUID(thisMonth-1, thisYear, i);
        dates[startIndex].setAttribute("data-uid", uid);
        appendSpriteToCellAndTooltip(uid, dates[startIndex]);
    }

}

function previousMonth() {
    thisMonth--;
    if (thisMonth == -1) {
        thisMonth = 11;
        thisYear--;
    }
    fillInMonth(thisYear, thisMonth);
    changeColor();
}

function nextMonth() {
    thisMonth++;
    if (thisMonth == 12) {
        thisMonth = 0;
        thisYear++;
    }
    fillInMonth(thisYear, thisMonth);
    changeColor();

}

//
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37: previousMonth(); break;
        case 39: nextMonth(); break;
    }
};