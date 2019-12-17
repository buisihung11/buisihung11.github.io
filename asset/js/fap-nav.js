$(document).ready(function () {

    let currentSection = window.location.hash;
    if (currentSection == '') {
        currentSection = "#section1";
    }

    let currentTrigger = $(`#fap-nav li a[href="${currentSection}"]`);
    console.log(currentTrigger);
    currentTrigger.click();
    // $(`#fap-nav li a[href="#section1"]`).click();
    var navTrigger = $("#fap-nav li a");

    navTrigger.each(function (__) {
        $(this).click(function (e) {
                e.preventDefault();
                if (!$(this).hasClass("active")) {
                    var index = parseInt($(this).attr('href').replace("#section", ""));

                    // var offSetTop = $(moveTo).offset().top;
                    var height = window.innerHeight;
                    for (let i = 0; i < navTrigger.length; i++) {
                        if ($(navTrigger[i]).hasClass("active")) {
                            $(navTrigger[i]).removeClass("active");
                        }
                    }
                    var bodyWrapper = $(".body-content");
                    bodyWrapper.css(`transform`, `translate(0,-${height * (index - 1)}px`);
                    $(this).addClass("active");

                }
            })
    });

});