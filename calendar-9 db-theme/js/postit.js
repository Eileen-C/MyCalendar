function openMakeNote() {
    let modal = document.getElementById("modal");
    modal.open = true;
    let template = document.getElementById("make-note");
    template.hidden = false;

    if (!newCurrentPostIt) {
        document.getElementById("edit-post-it").value = postIts[currentPostItIndex].note;
    }
    document.getElementById("edit-post-it").focus(); //游標自動focus在輸入方塊中
}

function closeMakeNote() {
    let modal = document.getElementById("modal");
    modal.open = false;
    let template = document.getElementById("make-note");
    template.hidden = true;
}

//elm是element的縮寫，亦可以自訂名稱
function dayClicked(elm) {
    currentPostItID = elm.dataset.uid; //目前的記事ID為所點擊的日期表格上表格上的uid
    currentDayHasNote(currentPostItID); //判斷目前點擊的日期是否有記事資料
    // console.log(elm.dataset.uid)
    openMakeNote();
}

function currentDayHasNote(uid) { //測試特定UID是否已經有記事
    for (let i = 0; i < postIts.length; i++) {
        if (postIts[i].id == uid) { //若比對成功，則代表有找到記事資料
            newCurrentPostIt = false;
            currentPostItIndex = i;
            // document.getElementById("edit-post-it").value = postIts[i].note;
            return;
        }
    }
    newCurrentPostIt = true; //當前面的搜尋記事迴圈沒有找到資料，也就是沒有執行return跳離此函數
}

function submitPostIt() { //按了PostIt按鍵後，所要執行的方法
    const value = document.getElementById("edit-post-it").value;
    let num = getRandom(1, 6); //取得1~6的亂數，用來標示便利貼顏色的檔案代號
    let postIt = {
        id: currentPostItID,
        note_num: num,
        note: value
    }
    if (newCurrentPostIt) { //如果是新記事的話
        postIts.push(postIt); //將新記事postIT物件推入postIts陣列
    } else {
        postIts[currentPostItIndex].note = document.getElementById("edit-post-it").value; //更新現有記事物件的記事資料
    }
    document.getElementById("edit-post-it").value = "";

    // console.log(postIts)
    fillInMonth(thisYear, thisMonth);
    closeMakeNote();
}

function deleteNote() {
    document.getElementById("edit-post-it").value = "";
    let indexToDel; //指向要被刪除資料索引
    if (!newCurrentPostIt) {
        indexToDel = currentPostItIndex;
    }
    if (indexToDel != undefined) {
        postIts.splice(indexToDel, 1);
    }
    fillInMonth(thisYear, thisMonth);
    closeMakeNote();
}

function getRandom(min, max) { //min <= 亂數值 < max
    return Math.floor(Math.random() * (max - min)) + min;
}