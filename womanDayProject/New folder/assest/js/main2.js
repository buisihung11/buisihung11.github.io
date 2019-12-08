$(document).ready(function () {

    var quoteList = [
        "Chúc bạn một ngày 20/10 thật là ý nghĩa, vui tươi, ngập tràn hạnh phúc.",
        "Chúc bạn mãi xinh đẹp, luôn là bông hoa thơm trong vườn hoa ngát hương. Và trên con đường kiếm tìm hạnh phúc sẽ tìm được một tình yêu ngọt ngào, phù hợp với chính mình!",
        "All best wishes on VietNamese Women's Day. Keep shining and smilling always!",
        "Happy VietNammese Women's Day! You deserve to be happy today so enjoy your day to the fullest.",
        "A woman like you is precious and hard to find. Wishing you a day as beautiful as you are!",
        "You are a special woman and I want you to know how very important you are. Have a wonderful day!",
        "Don't walk into a room full of people and wonder if they like you. Look around and wonder if YOU like them!",
        "Without you the world is incomplete <br>Without you the heart feels empty<br>Let the world blossom with your smile<br>The way you have always done!<br>Happy women’ s Day",
        `There is no other friend like you.<br>
        You are so thoughtful and caring and <br>
        I wanted to thank you
        for making my life to become even brighter. <br>
        May you have a Happy Women’ s Day!! <br>`,
        `Wish you a very happy Women's Day.....<br>
        It’ s you who 's making the difference in so many lives....<br>
        And I am one of them.... <br>
        Have a wonderful day!! <br>`,
        `Every day I find you more and more beautiful,<br>
        It’ s the way you care, adds to your beauty, <br>
        Today, on your special day, <br>
        I promise that I will never ever look at the moon to get its warmth, <br>
        Because I have found my moon <br>
        Happy woman’ s Day <br>`
    ]





    var specialPerson =

    {
        
            "vu ngoc kieu": {
                'wish' : "Nhân ngày 20/10 chúc bạn có một ngày vui vẻ và đầy ý nghĩa. Có thể bạn không phải là môt người hoàn hảo dù trên đời không ai hoàn hảo cả nhưng bạn là một cô gái, xinh đẹp và đầy nghị lực nhất tôi từng biết.Khi có những lúc khó khăn vất vả trong cuộc sống dù có chật vật nhưng bạn đã mạnh mẽ vươt qua nó bằng chính sức mạnh của mình. Hãy luôn tươi cười để Trái Đất luôn ấm áp nhé. Hope you like this video. :) "
                ,"videoId": "8O_qHlmzzhk"
            }
        ,
        "to thuy an": {
            "wish": 'Chúc bạn An không đá luôn hot và luôn thành công trong mọi việc. <br> Keep your smile and hope you like this video :)',
            "videoId": "wKyMIrBClYw"
        },

        "nguyen xuan anh": {
            "wish": 'Chúc bạn Xuân Anh ngày càng "to lớn" và always hạnh phúc, luôn có năng lượng dồi dào. Happy Womans Day',
            "videoId": "I3dezFzsNss"
        },

        "nguyen pham khanh doan": {
            "wish": "Chúc bạn Đoan có một ngày thật vui vẻ, luôn design được mọi thứ đẹp like you :)",
            "videoId": ""
        },

        "nguyen thuong phuong dung": {
            "wish": "Chúc bạn Dung luôn xinh đẹp và thành công trong cuộc sống, ngày càng paint đẹp hơn :)",
            "videoId": ""
        },

        "pham manh duyen": {
            "wish": "Chúc bạn Duyên có một ngày vui vẻ và luôn xinh đẹp :) :)",
            "videoId": ""
        },

        "truong ai linh": {
            "wish": "Chúc bạn Linh luôn xinh đẹp,tự tin và thành công trong cuộc sống, sớm gặp được bạch mã hoàng tử  :)",
            "videoId": ""
        },

        "khuu gia linh": {
            "wish": "Chúc bạn Linh có một ngày thật ý nghĩa và hạnh phúc, ngày càng học giỏi :)",
            "videoId": ""
        },

        "tran nguyen gia nghi": {
            "wish": "Chúc bạn Nghi mãi xinh đẹp, luôn là bông hoa thơm trong vườn hoa ngát hương. Và trên con đường kiếm tìm hạnh phúc sẽ tìm được một tình yêu ngọt ngào, phù hợp với chính mình! <br> Hope you like this video:)",
            "videoId": "Mq0yEI_xpb8"
        },

        "hoang ba phuc nguyen": {
            "wish": "Chúc bạn Nguyên một ngày 20/10 thật là ý nghĩa, vui tươi, ngập tràn hạnh phúc:)",
            "videoId": "Mq0yEI_xpb8"
        },

        "phan diem phuong": {
            "wish": "Chúc bạn Phương luôn xinh đẹp, tươi cười, dù thế nào thì bạn đã là một bông hoa và mãi là như vậy :)",
            "videoId": "VeHKaEibEgo"
        },

        "phan thi kieu tien": {
            "wish": "Chúc bạn Tiên một ngày 20/10 thật là ý nghĩa, vui tươi, ngập tràn hạnh phúc. Sớm trở thành một nữ doanh nhân thành đạt :)",
            "videoId": ""
        },

        "nguyen le vi": {
            "wish": "Chúc bạn Vi một ngày 20/10 thật là ý nghĩa, vui tươi, ngập tràn hạnh phúc. :)",
            "videoId": ""
        },

        "nguyen ngoc khanh vy": {
            "wish": "Chúc bạn Vy luôn mạnh khỏe , thành công trong cuộc sống nhé :)",
            "videoId": ""
        },

        "tran vu van trang": {
            "wish": "Chúc m luôn mạnh khỏe , thành công trong cuộc sống, sớm có thể đi khắp thế giới. :)",
            "videoId": "HXkh7EOqcQ4"
        },"nguyen le thuy vy": {
            "wish": "Chúc bạn Vy có một ngày vui vẻ, mau trờ thành triệu phú và có bồ nhé . :)",
            "videoId": ""
        },"tran ngoc thao uyen": {
            "wish": "Chúc nhóc Uyên một ngày vui vẻ luôn thành công, ngày càng cao lớn xinh đẹp, sớm gặp được bạch mã hoàng tử nữa. :)",
            "videoId": "CX99l0r9La0"
        },"truong pham phuong khanh": {
            "wish": "Chúc m ngày càng xinh đẹp, khỏe mạnh và luôn thành công trong cuốc sống nhé. :)",
            "videoId": "Mq0yEI_xpb8"
        }
    }


    var tl = new TimelineLite({paused:true});
    var revealLayer1 = $(".reveal__layer1");
    var revealLayer2 = $(".reveal__layer2");
    var imgContainer = $("#img-container");
    var displayPage = $("#display-page");
    var form = $("#form-container form");
    var backBtn = $("#back");
    var triggerBtn = $("#trigger-video");
    var iframeWrapper = $("#iframe-wrapper");
    
    var tl2 = new TimelineLite({paused: true});
        tl2
            .to(triggerBtn,0.5,{scale: 0,autoAlpha: 0,visibility: 'hidden'})
            .fromTo(iframeWrapper, 0.5,
                {x: 0,y:0,scale: 0,autoAlpha:0.6,visibility: 'hidden'},
                {x: 0,y:0,scale: 1,autoAlpha:1,visibility: 'visible',ease: Bounce.easeOut}
                )


    var activeBtn = $("#trigger-btn");
       

    activeBtn.click(function (event) {

        
        var usrName = $("input#email").val();
        if(usrName.length!=0){
                event.preventDefault();
            
            getPexelData();
            // Check the user name
            let result = false;
            let countWord = usrName.split(" ").length;
                
                if (countWord >= 2) {
                //check for her
                $.each(specialPerson, function (key, value) {
                    if (key.indexOf(xoa_dau(usrName).toLowerCase()) >= 0) {
                        
                        result = true;
                        postData(usrName, value.wish);
                        

                    }
                })
            }

            if (result == false) {

                
                let randomQuote = parseInt(Math.random() * quoteList.length)
                postData(usrName, quoteList[randomQuote]);

            }

            startAnimation();

        
        }
    })        

    triggerBtn.click(function (e) {
         e.preventDefault();
         //Check to add the ifame 
         var usrName = $("input#email").val();
         if (triggerBtn.attr('data-access') == "false") {
             console.log("Start add video")
             // Check the user name
             let result = false;
             let countWord = usrName.split(" ").length;

             if (countWord >= 2) {
                 //check for her
                 $.each(specialPerson, function (key, value) {
                     if (key.indexOf(xoa_dau(usrName).toLowerCase()) >= 0) {

                         
                         
                         if (value.videoId.length > 0) {
                             result = true;
                             addVideoFrame(value.videoId);
                         }

                     }
                 })
             }
             if(result == false){
                 getYTID();
             }
         }

         if (triggerBtn.attr('data-display') == "false") {
             //show
             tl2.play();
         } else {
             //close
         }
     })

    backBtn.click(function(){
        $("input#email").val(null);
        tl2.reverse();
        tl.reverse();
         removeVideoFrame();
    })

    tl.
        add('revealLayer1')
        .to(revealLayer1, 0.25, {
            xPercent: -100,
            autoAlpha: 1,
            ease: Circ.easeOut
        })
        .to(imgContainer,0.25,{
            
            scale: 0.8,
            autoAlpha:0,
            display:'none'
        },'revealLayer1')
        .fromTo(form,0.25,
            {
                
                autoAlpha: 1,
                display: 'block',
                ease: Bounce.easeOut
            },
            {
            
            
            autoAlpha: 0,
            display: 'none',
            ease: Bounce.easeOut
        },'revealLayer1')
        .to(revealLayer2, 0.25, {
            xPercent: -100,
            autoAlpha: 1,
            // ease: Circ.easeOut
        }, "-=.25")
        .add('revealLayer2')
        .to(revealLayer2, 0.25, {
            xPercent: -200,
            autoAlpha: 1,
            display: 'none'
            // ease: Circ.easeOut
        }, "+=0.75")
        .to(revealLayer1, 0.25, {
            xPercent: -200,
            autoAlpha: 1,
            display: 'none'
            // // ease: Circ.easeOut
        }, 'intro+=0.25')
        .fromTo(displayPage, 0.5, {
            y: 20,
            scale: 0.8,
            autoAlpha: 0,
            ease: Power1.easeOut,
            
        },{
            y: 0,
            scale: 1,
            autoAlpha: 1,
            ease: Power1.easeOut,
            display:'block'
        } ,'intro+=0.25')








    function xoa_dau(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }

    function getPexelData() {
        //Get the input
        var usrName = $("input#email").val();
        var usrWant = $('input#password').val();
        let countWord = usrName.split(" ").length;
        
        var randomPage = parseInt(Math.random() * 3 + 1);
        var apiPexelKey = "563492ad6f917000010000010ea0e668e09f408695ddae946dc1dbdf";
        var url;
        if("vu ngoc kieu".indexOf(xoa_dau(usrName))>=0 && countWord >=2 ){
            url = `https://api.pexels.com/v1/search?query=lavender&per_page=15&page=1`;
        }
        else{
            url = `https://api.pexels.com/v1/search?query=${ usrWant.length > 0 ? usrWant : 'bouquet' }&per_page=15&page=${randomPage}`
        }
         
        //${randomPage}
        //console.log(url);
        $.ajax({
            headers: {
                "Authorization": apiPexelKey
            },
            type: 'GET',
            url: url,
            success: function (data1, status, XHR) {
                console.log(data1);
                changBgImg(data1);
            }
        });
        $('input#password').val(null)
        
    }

    function changBgImg(data) {

        var displayPageBg = $("#display-page");
        let numberOfResult = data.photos.length;
        let random = parseInt((Math.random() * numberOfResult));

        var imgUrl = data.photos[random].src.original;
        if (imgUrl !== undefined) {
            displayPageBg.css({
                'background-image': 'url(' + imgUrl + ')'
            });
        }

    }

    function addVideoFrame(id) {
        triggerBtn.attr('data-access', 'true');
        var musicContainer = $("#iframe-wrapper");
        musicContainer.append(`
               <iframe width="500" height="300" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            `)
    }
    function removeVideoFrame(){
        triggerBtn.attr('data-access','false');
        var musicContainer = $("#iframe-wrapper");
        musicContainer.empty();
    }
    function getYTID() {
        
        //script for the youtube api
        var key = "AIzaSyCTuwi3tdga_YNLR6yVSAHaFWNCGLJ7A50";
        var playlistMusicId = "PLV3ZzuGXBUAj4uuRzOcI1_vdrFXVEfeeI";
        var playlistFunnyId = "PLtDp75hOzOlbD7m-Gb2t4dZqyYx7dq0iB";
        let random = parseInt(Math.random() * 2);
        var playlistId = random == 0 ? playlistMusicId : playlistFunnyId;
        
        var urlYT = 'https://www.googleapis.com/youtube/v3/playlistItems';
        var options = {
            part: 'snippet',
            key: key,
            maxResults: 20,
            playlistId: playlistId
        }
        $.ajax({
            url: urlYT,
            data: options,
            success: function (data) {
                console.log(data);
                let numberOfResult = data.items.length;
                let random = parseInt((Math.random() * numberOfResult));
                let itemId = data.items[random].snippet.resourceId.videoId;
                addVideoFrame(itemId);
            }
        });
    }

    function postData(name, quote) {
        let usrName = $(".welcome p");
        usrName.html('Hello ' + name);
        let wishes = $(".wishes p");
        wishes.html(quote);
    }

    function startAnimation() {
             
            
            tl.play();
    }

    function specialPerson() {

    }
});