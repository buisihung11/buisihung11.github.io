
$(document).ready(function(){


    var triggerBtn = $("#trigger-video");
    var iframeWrapper = $("#iframe-wrapper") ;
    console.log(iframeWrapper)
    var tl = new TimelineLite({paused: true});
        tl
            .to(triggerBtn,0.5,{scale: 0,autoAlpha: 0,visibility: 'hidden'})
            .fromTo(iframeWrapper, 0.5,
                {scale: 0,autoAlpha:0.6,visibility: 'hidden'},
                {scale: 1,autoAlpha:1,visibility: 'visible',ease: Bounce.easeOut}
                )
    triggerBtn.click(function(e){
        e.preventDefault();
        //Check to add the ifame 
       
        if (triggerBtn.attr('data-access') == "false") {
            console.log("Start add video")
            $(this).attr('data-access','true');
            
            getYT();
        }

        if (triggerBtn.attr('data-display')== "false"){
            //show
            showVideo();
        }else{
            //close
        }
    })

    function showVideo(){
        tl.play();
    }


    function getYT(){
        
        let key = "AIzaSyCTuwi3tdga_YNLR6yVSAHaFWNCGLJ7A50";
        let playlistMusicId = "PLV3ZzuGXBUAj4uuRzOcI1_vdrFXVEfeeI";
        let playlistFunnyId = "PLtDp75hOzOlbD7m-Gb2t4dZqyYx7dq0iB";
        let random = parseInt(Math.random() * 2);
        let playlistId = random == 0 ? playlistMusicId : playlistFunnyId;

        let urlYT = 'https://www.googleapis.com/youtube/v3/playlistItems';
        let options = {
            part: 'snippet',
            key: key,
            maxResults: 20,
            playlistId: playlistId
        }
        $.ajax({
            url: urlYT,
            data: options,
            success: function (data) {
                //console.log(data);
                let numberOfResult = data.items.length;
                let random = parseInt((Math.random() * numberOfResult));
                let itemId = data.items[random].snippet.resourceId.videoId;
                addVideoFrame(itemId);
            }
        });
    }
    

    function addVideoFrame(id) {
        let musicContainer = $("#iframe-wrapper");
        musicContainer.append(`
               <iframe width="560" height="300"
                src="https://www.youtube.com/embed/${id}/?autoplay=0&controls=1" frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
                </iframe>
            `)
    }







});