$(document).ready(function(){
    $("#nav li>span").mouseover(function () {
        var index = $("#nav li>span").index(this);
        $("#nav li:eq("+index+") span~p").show();
    }).mouseout(function () {
        var index = $("#nav li>span").index(this);
        $("#nav li:eq("+index+") span~p").hide();
    })
})