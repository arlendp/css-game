var n;  //grid变量
var m;  //list变量
var a;
var b;

//加载css文件
function addCSS(name) {
	var name;
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = name + ".css";
	$("head")[0].appendChild(link);
}

//划分网格
function gridDivide(x) {
	var x;
	a = 1/x*($(".container").width()-2);
	b = 1/x*($(".container").height()-2);
	$(".container").empty();
	for (var i = 0; i < x*x; i++) {
		$("<div class='grid-one'><div class='grid-in'></div></div>").css({
			"width": a,
			"height": b
		}).appendTo($(".container"));
	}
}

//划分列表
function listDivide(y) {
	var y;
	a = 1/y*($(".container").width()-2);
	$(".container").empty();
	for (var j = 0; j < y; j++) {
		$("<div class='list-one'><div class='list-in'></div></div>").css({
			"width": a
		}).appendTo($(".container"));
	}
}

//取中心部分
function centerDivide() {
	$(".container").empty();
	$("<div class='center'></div>").appendTo($(".container"));
}

//划分三部分
function threeDivide() {
	$(".container").empty();
	$("<div class='head'></div>").appendTo($(".container"));
	$("<div class='left'></div>").appendTo($(".container"));
	$("<div class='right'></div>").appendTo($(".container"));
}

$(document).ready(function() {
	$(".button-grid").click(function() {		
		addCSS("grid");
		n = 2;
		gridDivide(n);			
	})
	$(".button-list").click(function() {
		addCSS("list");
		m = 2;
		listDivide(m);
	})
	$(".button-center").click(function() {
		addCSS("center");
		centerDivide();
	})
	$(".button-three").click(function() {
		addCSS("three");
		threeDivide();
	})

	//减少划分
	$(".less").click(function() {
		if ($(".container").children().hasClass("grid-one") == true) {
			n = n-1;
			if (n > 0) gridDivide(n);
		}
		if ($(".container").children().hasClass("list-one") == true) {
			m = m-1;
			if (m > 0) listDivide(m);
		}
		if ($(".container").children().hasClass("center") == true) {
			$(".center:last").remove();
		}
		if ($(".container").children().hasClass("head") == true) {
			$(".head:last").remove();
			$(".left:last").remove();
			$(".right:last").remove();
		}		
	})
	//增加划分
	$(".more").click(function() {
		if ($(".container").children().hasClass("grid-one") == true) {
			n = n+1;
			gridDivide(n);
		}
		if ($(".container").children().hasClass("list-one") == true) {
			m = m+1;
			listDivide(m);
		}
		if ($(".container").children().hasClass("center") == true) {
			$("<div class='center'></div>").appendTo($(".center:last"));
		}
		if ($(".container").children().hasClass("head") == true) {
			$("<div class='head'></div>").appendTo($(".right:last"));
			$("<div class='left'></div>").appendTo($(".right:last"));
			$("<div class='right'></div>").appendTo($(".right:last"));	
		}
	})

	//判断网格还是列表进行窗口监听
	$(window).resize(function() {
		if ($(".container").children().hasClass("grid-one") == true) {
			gridDivide(n);
		}
		if ($(".container").children().hasClass("list-one") == true) {
			listDivide(m);
		}
	})
})

