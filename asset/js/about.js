$(document).ready(function(){
    //make skill bar base on the percent
    var percent = $("p.skill-per");
    var percent2 = document.querySelectorAll("p.skill-per");
    
    percent2.forEach(element => {
        let value = $(element).html();
        let skill_bar = $(element).closest('.skill-detail').find('span.skill-bar');
        skill_bar.css('width',value);
    });
    //end
    
})
window.onscroll = function () {
    console.log(window.scrollY)
}

$(window).scroll(function(){
    var st = $(this).scrollTop();
    console.log(st);
    var headerHeight = $("header").css("height").replace("px","");
    var bodyOffset = parseInt($("section.body").offset().top);
    console.log(bodyOffset)
    if (st > (parseInt(headerHeight) + bodyOffset-100)){
        let header = $("header").addClass("blurbg");
    }else{
        let header = $("header").removeClass("blurbg");
    }
    if(st > $(".skill-wrapper").offset().top -($(window).height() / 1.2)){
        $(".skill-bar").addClass("skill_bar_active")
    }
    var imgHeader = $("img.hero_img");
    imgHeader.css('transform',`scale(${1.15 - st/9000})`)


})
var img = $(".parrallax img")
$(".parrallax").mousemove(function (event) {
    console.log("Hover");
    var mousex = event.pageX - img.offset().left;
    var mousey = event.pageY - img.offset().top;
    
     var imgx = (mousex - 300) / 40;
     var imgy = (mousey - 200) / 40;
    img.css(
        "transform", "translate(" + imgx + "px," + imgy + "px)" + " scale(1.1)"
    );
})

$(".parrallax").mouseout(function () {
    img.css("transform", "translate(0px,0px)" + " scale(1)");
});

// var lastScrollTop = 0;
// $(window).scroll(function (event) {
    
//     var st = $(this).scrollTop();
//     console.log(" lastscroll "+ lastScrollTop + " scrollTop " + st)
//     let header = $("header");
//     if ((st - lastScrollTop) >= 200 && !header.hasClass('hide')) {
//         console.log("Down")
//         header.toggleClass("hide");
//         lastScrollTop = st;
//     } else if ((st - lastScrollTop) < 0 && header.hasClass('hide')) {
//         //console.log("Up");
//         header.toggleClass('hide');
//         lastScrollTop = st;
//     }
//     if (header.hasClass('hide')){
//         lastScrollTop = st;
//     }
// });

// var lastScrollTop = 0;
// $(window).scroll(function (event) {
//     var st = $(this).scrollTop();
//     let header = $("header");
//     if (st > lastScrollTop) {
//         // downscroll code
//         header.toggleClass("hide");
//     } else if (st - lastScrollTop < -200) {
//         // upscroll code
//         header.toggleClass('hide');
//     }
//     lastScrollTop = st;
// });