$(document).ready(function(){
	/**主菜单鼠标移上时背景颜色加深**/
	$(".nav-ul a").mouseover(function () {
		$(this).css("background-color","#EA0000");
	})
	$(".nav-ul a").mouseout(function () {
		$(this).css("background-color","#ff2832");
	})
});