let currentColor = { name: "Blue", color: "#1B19CD", off_color: "#7c7EFB" };
let color_data = [
    {
        name: 'Blue',
        todayColor_code: '#1B19CD',
        off_color_code: '#7c7EFB'
    }, {
        name: 'Red',
        todayColor_code: '#FF0000',
        off_color_code: '#ffbbbb'
    }, {
        name: 'LimeGreen',
        todayColor_code: '#32CD32',
        off_color_code: '#9fe89f'
    }, {
        name: 'Cyan',
        todayColor_code: '#00FFFF',
        off_color_code: '#97ffff'
    }, {
        name: 'Turquoise',
        todayColor_code: '#40E0D0',
        off_color_code: '#b3f2ec'
    }, {
        name: 'SkyBlue',
        todayColor_code: '#87CEEB',
        off_color_code: '#bfe4f4'
    }, {
        name: 'LightSkyBlue',
        todayColor_code: '#87CEFA',
        off_color_code: '#c1e7fd'
    }, {
        name: 'DeepSkyBlue',
        todayColor_code: '#00BFFF',
        off_color_code: '#77ddff'
    }, {
        name: 'DodgerBlue',
        todayColor_code: '#1E90FF',
        off_color_code: '#80bfff'
    }, {
        name: 'Tan',
        todayColor_code: '#D2B48C',
        off_color_code: '#f0e7d9'
    }, {
        name: 'MediumAquamarine',
        todayColor_code: '#66CDAA',
        off_color_code: '#bdeada'
    }, {
        name: 'tomato',
        todayColor_code: '#FF6347',
        off_color_code: '#ffc6bb'
    }
];

function changeColor() {
    //走訪陣列，每走訪一個陣列元素，帶出的元素以arr_data變數呈現 (arr_data自取的名稱)
    color_data.forEach(
        function (arr_data) {
            //找到color_data陣列中符合的色彩  
            if (currentColor.name == arr_data.name) {
                currentColor.todayColor = arr_data.todayColor_code;
                currentColor.off_color = arr_data.off_color_code;
            }
        });
    //改變目前的色彩配置
    let elements;
    elements = document.getElementsByClassName("todayColor");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = currentColor.todayColor;
    }
    elements = document.getElementsByClassName("border-color");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.borderColor = currentColor.todayColor;
    }
    elements = document.getElementsByClassName("off-color");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = currentColor.off_color;
    };

    closeFavColor();
}

function addCheckMark(todayColor_name) {
    currentColor.name = todayColor_name;
    //清除類別有"checkmark"的元素，也就是清除掉勾選的顯示
    var checkmark = document.getElementsByClassName("checkmark");
    for (let i = 0; i < checkmark.length; i++) {
        checkmark[i].parentNode.removeChild(checkmark[i]);
    }
    //加上勾選的顯示
    var colorPreviews = document.getElementsByClassName("color-preview");
    for (let i = 0; i < colorPreviews.length; i++) {
        if (colorPreviews[i].id == todayColor_name) {
            console.log(colorPreviews[i].id + "," + todayColor_name)
            colorPreviews[i].innerHTML = "<i class='fas fa-check checkmark'></i>";
        }
    }
}

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






