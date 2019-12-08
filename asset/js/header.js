var menuBtn = $(".menuIcon");
var hiddenNav = $(".hiddenNav");
var a = $(".hiddenNav li a")
var li_item = $(".hiddenNav li");
    li_item.mouseover(function(){
        for(let i=0;i<li_item.length;i++){
            $(li_item[i]).css('opacity', '0.3')
        }
        $(this).css('opacity','1')
    })
    li_item.mouseout(function () {
        li_item.css('opacity', '1')
    })
menuBtn.click(function(){
    var ischeck = $(this).attr("data-clicked");
    if(ischeck == "false"){
       menuBtn.attr("data-clicked","true")
        hiddenNav.addClass("openNav")
        menuBtn.addClass("openMenu")
        a.addClass("showUp")
    }else{
       menuBtn.attr("data-clicked", "false")
        a.removeClass("showUp")
        hiddenNav.removeClass("openNav")
        menuBtn.removeClass("openMenu")
        
    }
})