var n; // grid变量 
var m; // list变量
var a; // 定义长度
var b; // 定义宽度
// 几种预先设置好的结构
var style = [];
style[0] = '<div class="style-1"><div class="box"><canvas class="triangle box"><div class="box"></div></canvas></div></div>';
style[1] = '<div class="style-2"><div class="box"></div><div class="box"><canvas class="triangle box"></canvas></div></div>';
style[2] = '<div class="style-3"><div class="box"><div class="box"></div><canvas class="circle box"></canvas></div></div>';
style[3] = '<div class="style-4"><div class="box"><canvas class="hexagon box"><canvas class="triangle box"></canvas></canvas></div></div>';
// 动态加载时存在时延，采用直接链接
// 加载css文件
// function addCSS(name) {
//     if (!document.getElementById(name)) {
//         var link = document.createElement("link");
//         link.id = name;
//         link.rel = "stylesheet";
//         link.type = "text/css";
//         link.href = name + ".css";
//         $("head")[0].appendChild(link);
//     }
// }

// 划分网格
function gridDivide(x) {
    var x;
    a = 1 / x * ($(".container").width() - 2);
    b = 1 / x * ($(".container").height() - 2);
    $(".container").empty();
    for (var i = 0; i < x * x; i++) {
        var boxstyle = $("<div class='grid-in'></div>").append(getRandomBox());
        $("<div class='grid-one'></div>").append(boxstyle).css({
            "width": a,
            "height": b
        }).appendTo($(".container"));

        // getRandomBox().appendTo($("<div class='grid-in'></div>")).appendTo($("<div class='grid-one'></div>")).css({
        //     "width": a,
        //     "height": b
        // }).appendTo($(".container"));
    }
}
//窗口监听事件下改变长宽
function gridChange(x) {
    var x;
    a = 1 / x * ($(".container").width() - 2);
    b = 1 / x * ($(".container").height() - 2);
    for (var i = 0; i < x * x; i++) {
        $(".grid-one").css({
            "width": a,
            "height": b
        });
    }
}

// 划分列表
function listDivide(y) {
    var y;
    a = 1 / y * ($(".container").width() - 2);
    $(".container").empty();
    for (var j = 0; j < y; j++) {
        var boxstyle = $("<div class='list-in'></div>").append(getRandomBox());
        $("<div class='list-one'></div>").append(boxstyle).css({
            "width": a
        }).appendTo($(".container"));
    }
}
//窗口监听事件下改变长宽
function listChange(y) {
    var y;
    a = 1 / y * ($(".container").width() - 2);
    for (var j = 0; j < y * y; j++) {
        $(".list-one").css({
            "width": a
        });
    }
}

// 取中心部分
function centerDivide() {
    $(".container").empty();
    $("<div class='center'></div>").append(getRandomBox()).appendTo($(".container"));
}

// 划分三部分
function threeDivide() {
    $(".container").empty();
    $("<div class='head'></div>").append(getRandomBox()).appendTo($(".container"));
    $("<div class='left'></div>").append(getRandomBox()).appendTo($(".container"));
    $("<div class='right'></div>").appendTo($(".container"));
}

$(document).ready(function() {
    $(".button-grid").click(function() {
        n = 2;
        gridDivide(n);
        randomAndAnimateBox();
    })
    $(".button-list").click(function() {
        m = 2;
        listDivide(m);
        randomAndAnimateBox();
    })
    $(".button-center").click(function() {
        centerDivide();
        randomAndAnimateBox();
    })
    $(".button-three").click(function() {
        threeDivide();
        randomAndAnimateBox();
    })

    // 减少划分
    $(".less").click(function() {
        if ($(".container").children().hasClass("grid-one") == true) {
            n = n - 1;
            if (n > 0) gridDivide(n);
            else n = 1;
        }
        if ($(".container").children().hasClass("list-one") == true) {
            m = m - 1;
            if (m > 0) listDivide(m);
            else m = 1;
        }
        if ($(".container").children().hasClass("center") == true) {
            if ($(".center").prevAll().length > 0) {
                $(".center:last").remove();
            }          
        }
        if ($(".container").children().hasClass("head") == true) {
            //if ($(".center").prevAll().length > 0)有三个类无法完全查询.head
            var head = document.getElementsByClassName("head");
            if (head.length > 1) {
                $(".head:last").remove();
                $(".left:last").remove();
                $(".right:last").remove();
            }
        }
        randomAndAnimateBox();
    })
    // 增加划分
    $(".more").click(function() {
        if ($(".container").children().hasClass("grid-one") == true) {
            n = n + 1;
            gridDivide(n);
        }
        if ($(".container").children().hasClass("list-one") == true) {
            m = m + 1;
            listDivide(m);
        }
        if ($(".container").children().hasClass("center") == true) {
            $("<div class='center'></div>").append(getRandomBox()).appendTo($(".center:last"));
        }
        if ($(".container").children().hasClass("head") == true) {
            $("<div class='head'></div>").append(getRandomBox()).appendTo($(".right:last"));
            $("<div class='left'></div>").append(getRandomBox()).appendTo($(".right:last"));
            $("<div class='right'></div>").appendTo($(".right:last"));
        }
        randomAndAnimateBox();
    })

    //判断网格还是列表进行窗口监听
    $(window).resize(function() {
        if ($(".container").children().hasClass("grid-one") == true) {
            gridChange(n); 
            animateBox();
        }
        if ($(".container").children().hasClass("list-one") == true) {
            listChange(m);
            animateBox();
        }
    })
})

function getRandomBox() {
    var num = Math.floor(Math.random() * style.length);
    // var box = document.getElementsByClassName("box");
    // for (var i = 0; i < box.length; i++) {
    //     box[i].style.backgroundColor = getRandomColor();
    // }
    // randomSizeAndLocation();
    return style[num];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function randomColor() {
    var box = document.getElementsByClassName("box");
    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = getRandomColor();
    }
}

function getRandomSize() {
    return Math.floor(Math.random() * 50) + "%";
}

function getRandomLocation() {
    return Math.floor(Math.random() * 50) + "%";
}
function randomSizeAndLocation() {
    var box = document.getElementsByClassName("box");
    for (var i = 0; i < box.length; i++) {
        box[i].style.left = getRandomLocation();
        box[i].style.top = getRandomLocation();
        box[i].style.width = getRandomSize();
        box[i].style.height = getRandomSize();
    }
}

function randomAndAnimateBox() {
    drawAllShapes();
    randomColor();
    randomSizeAndLocation();
    animateBox();
}