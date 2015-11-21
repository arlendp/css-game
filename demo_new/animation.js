//监听窗口大小改变
window.onresize = function() {
    animateBox();
};

window.onload = function() {
    randomAndAnimateBox();
};
//给块加上动画效果
function animateBox() {
    var box = document.querySelectorAll(".box");
    for (var i = 0; i < box.length; i++) {
        var height = box[i].parentElement.clientHeight / 2 - box[i].clientHeight / 2;
        var width = box[i].parentElement.clientWidth / 2 - box[i].clientWidth / 2;
        box[i].style.left = width + "px";
        box[i].style.top = height + "px";
    }
}
//通过canvas画一个三角形
function drawTriangle() {
    var triangle = document.getElementsByClassName("triangle");
    for (var i = 0; i < triangle.length; i++) {
        triangle[i].width = triangle[i].clientWidth;
        triangle[i].height = triangle[i].clientHeight;
        var width = triangle[i].width;
        var height = triangle[i].height;
        if (triangle[i].getContext) {
            var canvas = triangle[i].getContext("2d");
            canvas.fillStyle = getRandomColor();
            canvas.beginPath();
            canvas.moveTo(width / 2, 0);
            canvas.lineTo(0, height);
            canvas.lineTo(width, height);
            canvas.closePath();
            canvas.fill();
        }
    }

}
//通过canvas画一个圆形
function drawCircle() {
    var circle = document.getElementsByClassName("circle");
    for (var i = 0; i < circle.length; i++) {
        circle[i].width = circle[i].clientWidth;
        circle[i].height = circle[i].clientHeight;
        var width = circle[i].width;
        var height = circle[i].height;
        if (circle[i].getContext) {
            var canvas = circle[i].getContext("2d");
            canvas.fillStyle = getRandomColor();
            canvas.beginPath();
            canvas.arc(width / 2, height / 2, (width > height ? height / 2 : width / 2), 0, 2 * Math.PI);
            canvas.closePath();
            canvas.fill();
        }
    }
}
//通过canvas画一个六边形
function drawHexagon() {
    var hexagon = document.getElementsByClassName("hexagon");
    for (var i = 0; i < hexagon.length; i++) {
        hexagon[i].width = hexagon[i].clientWidth;
        hexagon[i].height = hexagon[i].clientHeight;
        var width = hexagon[i].width;
        var height = hexagon[i].height;
        if (hexagon[i].getContext) {
            var canvas = hexagon[i].getContext("2d");
            canvas.fillStyle = getRandomColor();
            canvas.beginPath();
            canvas.moveTo(width / 3, 0);
            canvas.lineTo(width * 2 / 3, 0);
            canvas.lineTo(width, height / 2);
            canvas.lineTo(width * 2 / 3, height);
            canvas.lineTo(width / 3, height);
            canvas.lineTo(0, height / 2);
            canvas.closePath();
            canvas.fill();
        }
    }
}

function drawAllShapes() {
    drawTriangle();
    drawCircle();
    drawHexagon();
}
