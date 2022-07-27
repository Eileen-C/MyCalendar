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