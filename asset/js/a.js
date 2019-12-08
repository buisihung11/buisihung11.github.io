define([], function () {

    var timeout = null;
    var complete = null;
    var tm = null;

    var _stars = function (t, c, img) {
        var cls = t ? "transparent" : "";
        complete = c != undefined ? c : true;

        var bgImg = img != undefined ? img : "";

        var holder = $('<div id="stars-container" />');
        holder.append('<img class="' + cls + '" id="bg" src="' + bgImg + '" />');
        if (complete) holder.append('<img class="' + cls + '" id="cloud" src="' + $.getImage("background/cloud.png") + '" />');

        holder.append('<div id="stars-tiny" />')
            .append('<div id="stars-mid" />')
            .append('<div id="stars-big" />');

        return holder;
    }

    function addEvent(holder) {

        var tinyHolder = holder.find("#stars-tiny");
        var midHolder = holder.find("#stars-mid");
        var bigHolder = holder.find("#stars-big");
        var bgHolder = holder.find("#bg");
        var cloudHolder = holder.find("#cloud");

        var offsetBg = $.global['BG_OFFSET'],
            offsetTiny = $.global['TINY_STARS_OFFSET'],
            offsetMid = $.global['MID_STARS_OFFSET'],
            offsetBig = $.global['BIG_STARS_OFFSET'],
            offsetCloud = $.global['CLOUD_OFFSET'];

        if (!$.getDevice()) {
            TweenMax.to(bgHolder, 2, {
                opacity: 1,
                ease: Expo.easeOut
            });
            if (complete) TweenMax.to(cloudHolder, 2, {
                delay: 1,
                opacity: 1,
                ease: Expo.easeOut
            });

            $("html").unbind(_Event.mousemove);
            $("html").bind(_Event.mousemove, function (e) {

                var x = e.clientX,
                    y = e.clientY;
                var middleX = $.getHalfWidth(),
                    middleY = $.getHalfHeight();

                if (x < middleX) x = -(middleX - x);
                else x = x - middleX;

                if (y < middleY) y = -(middleY - y);
                else y = y - middleY;

                var tinyX = -(parseInt((x / middleX) * offsetTiny)),
                    tinyY = -(parseInt((y / middleY) * offsetTiny));
                var midX = -(parseInt((x / middleX) * offsetMid)),
                    midY = -(parseInt((y / middleY) * offsetMid));
                var bigX = -(parseInt((x / middleX) * offsetBig)),
                    bigY = -(parseInt((y / middleY) * offsetBig));
                if (complete) var bgX = -(parseInt((x / middleX) * offsetBg)),
                    bgY = -(parseInt((y / middleY) * offsetBg));
                if (complete) var cloudX = -(parseInt((x / middleX) * offsetCloud)),
                    cloudY = -(parseInt((y / middleY) * offsetCloud));

                if (complete) {
                    bgX = -800 + bgX;
                    cloudX = -130 + cloudX;
                    cloudY = 170 + cloudY;
                }


                TweenMax.killTweensOf(tinyHolder);
                TweenMax.killTweensOf(midHolder);
                TweenMax.killTweensOf(bigHolder);

                TweenMax.to(tinyHolder, 1, {
                    left: tinyX,
                    top: tinyY,
                    ease: Expo.easeOut
                });
                TweenMax.to(midHolder, 1, {
                    left: midX,
                    top: midY,
                    ease: Expo.easeOut
                });
                TweenMax.to(bigHolder, 1, {
                    left: bigX,
                    top: bigY,
                    ease: Expo.easeOut
                });
                if (complete) TweenMax.to(bgHolder, 1, {
                    marginLeft: bgX,
                    top: bgY,
                    ease: Expo.easeOut
                });
                if (complete) TweenMax.to(cloudHolder, 1, {
                    marginLeft: cloudX,
                    top: cloudY,
                    ease: Expo.easeOut
                });


            })
        }


    }

    function randomize(n, img, holder, type, t, mainHolder) {
        var cls = t ? "transparent" : "";
        cls = $.getDevice() ? "" : cls;

        var w = $.getWidth(),
            h = $.getHeight();

        if ($.getDevice()) {
            w = $("#wrap").width();
            h = $("#wrap").height();
        }

        var offset = -300;
        for (var i = 0; i < n; i++) {
            //var starW = parseInt(Math.random() * w);
            //var starH = parseInt(Math.random() * h);

            var starW = Math.floor(Math.random() * ((w + (-offset)) - (offset) + 1)) + offset;
            var starH = Math.floor(Math.random() * ((h + (-offset)) - (offset) + 1)) + offset;

            var star = holder.find(".star").eq(i);
            star = star.length ? star : $('<img id="type_' + type + '_' + i + '" class="star ' + cls + '" src="' + img + '" />').appendTo(holder);
            star.css({
                left: starW,
                top: starH
            });

            if (!$.getDevice())
                new TweenLite.to(star, 1.2, {
                    overwrite: "preexisting",
                    opacity: 1,
                    ease: Expo.easeIn,
                    delay: (.5) + i * .05
                });


        }

    }

    function rebuild(holder, t) {

        if (holder.length) {


            holder.find(".star").each(function (i) {
                TweenLite.killTweensOf($(this));
                $(this).css({
                    opacity: 0
                });
            })


            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(function () {
                var tinyHolder = holder.find("#stars-tiny");
                var midHolder = holder.find("#stars-mid");
                var bigHolder = holder.find("#stars-big");

                var bigN = $.global['BIG_STARS_N'],
                    midN = $.global['MID_STARS_N'],
                    tinyN = $.global['TINY_STARS_N'];
                randomize(tinyN, $.getImage('background/star_tiny.png'), tinyHolder, 0, t, holder);
                randomize(midN, $.getImage('background/star_mid.png'), midHolder, 1, t, holder);
                randomize(bigN, $.getImage('background/star_big.png'), bigHolder, 2, t, holder);

            }, 100);


        }
    }


    function addMouseMoveEvent(holder) {
        addEvent(holder);
    }

    function createMotion(star, starW, starH, rMax, rMin, i, holder) {

        var radiusW = Math.floor(Math.random() * ((rMax - rMin) + 1)) + rMin;
        var radiusH = Math.floor(Math.random() * ((rMax - rMin) + 1)) + rMin;

        var maxR = radiusW > radiusH ? radiusW : radiusH;
        var randomTime = maxR / 5;

        var direction = Math.floor(Math.random() * ((1 - (0)) + 1)) + (0);
        direction = (direction == 0) ? -1 : 1;


        //TweenLite.to(star,1,{opacity:1,ease:Expo.easeIn,delay: (i *.1)});

        /*
        var motion = {angle: 0}
        var tm = new TimelineMax({repeat:-1});
        tm.insert(new TweenMax(motion,randomTime,{angle: 359, ease:Linear.easeNone, onUpdate:function(obj,m,l,t,rw,rh,d)
                            {
                                m.angle = d * ((m.angle/180) * 3.14);
                                obj.css({left:l + Math.cos(m.angle) * rw, top:t + Math.sin(m.angle) * rh})
                                
                            }, onUpdateParams:[star,motion,starW,starH,radiusW,radiusH,direction]}));*/

    }


    function create(t, c, img) {
        return new _stars(t, c, img);
    }

    return {
        create: create,
        rebuild: rebuild,
        addMouseMoveEvent: addMouseMoveEvent
    }

})