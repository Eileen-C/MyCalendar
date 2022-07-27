function openFavColor() {
    let modal = document.getElementById("modal");
    modal.open = true;
    let template = document.getElementById("fav-color");
    template.hidden = false;
}

function closeFavColor() {
    let modal = document.getElementById("modal");
    modal.open = false;
    let template = document.getElementById("fav-color");
    template.hidden = true;
}

function addCheckMark(color_name) {        
    //清除/移除類別有"checkmark"的元素，也就是清除掉勾選的顯示
    var checkmarks = document.getElementsByClassName("checkmark");
    for (let i = 0; i < checkmarks.length; i++) {
        checkmarks[i].parentNode.removeChild(checkmarks[i]);
    }
    //加上勾選的顯示
    var colorPreviews = document.getElementsByClassName("color-preview");
    for (let i = 0; i < colorPreviews.length; i++) {
        if (colorPreviews[i].id == color_name) {
            console.log(colorPreviews[i].id + "," + color_name)
            colorPreviews[i].innerHTML = "<i class='fas fa-check checkmark'></i>";
        }
    }
}


