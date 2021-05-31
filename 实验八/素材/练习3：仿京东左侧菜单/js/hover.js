$(document).ready(function(){
    $(".nav-top li>a").hover(function () {
        var index = $(".nav-top li").index(this);
        $(".nav-top li:eq("+index+") a img").show();
    })
});