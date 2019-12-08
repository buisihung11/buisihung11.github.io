$(document).ready(function () {
    var navTrigger = $("#fap-nav li a");
    var navTrigger2 = document.querySelectorAll("#fap-nav li a");
    console.log(navTrigger2);
    
    navTrigger.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass("active")) {
            var index = parseInt($(this).attr('href').replace("#section",""));
            console.log(index)
            // var offSetTop = $(moveTo).offset().top;
            var height = window.innerHeight;
            console.log(moveTo)
            for (let i = 0; i < navTrigger.length; i++) {
                if ($(navTrigger[i]).hasClass("active")) {
                    $(navTrigger[i]).removeClass("active");
                }
            }
            var bodyWrapper = $(".body-content");
            bodyWrapper.css(`transform`, `translate(0,-${height*(index-1)}px`);
            $(this).addClass("active");
            
        }
    });

});