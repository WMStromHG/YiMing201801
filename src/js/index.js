Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 500, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 500, complete:function(){
            after.come();
        }});
    })
};
Room.Loader.start = function(){
    $("#Loader .word").hide();
    $("#Loader .btnWord").show();

    $("#Loader .tit").velocity({ translateY:0, opacity:1 }, { duration: 100});
    $("#Loader .btn").velocity({ rotateZ:["-1deg","1deg"] }, { easing:"linear", duration: 100, loop: true});

};
Room.Loader.dom = function(){

    $("#Loader .btn").tap(function(e){
        cc.tap(e);
        Room.Loader.ppt();
    });

    $("#Loader .tit").velocity({ translateY:-600, opacity:0 }, { duration: 0});

};
Room.Loader.going = function(){
    $("#Loader .btn").velocity("stop")
};


Room.Index = {};
Room.Index.dom = function(){

    Dom.ClickT = 0;
    Dom.unClick = true;

    $("#Index .call_btn").tap(function(e){
        cc.tap(e);

        if(!Dom.unClick) return;

        clearTimeout(Hand.dcall);

        $("#Index .call1").show();
        $("#Index .call2").hide();

        setTimeout(function(){
            $("#Index .call1").hide();
            $("#Index .call2").show();
        },100);

        Hand.dcall = setTimeout(function(){
            $("#Index .call1").show();
            $("#Index .call2").hide();
        }, 500);

        $("#ClickT").html(Dom.ClickT++);
    });
};

Room.Index.end = function(){
    if(Dom.ClickT>=40) {
        an_nai.play();
        setTimeout(Room.Index.ppt1, 1000)
    }else Room.Index.ppt2();
};

Room.Index.come_before = function(next){

    $("#Index .girl").velocity({ rotateZ:["-1deg","4deg"] }, { duration: 1000, loop: true});

    $("#Index .call1").velocity({ rotateZ:["-1deg","1deg"] }, { easing:"linear", duration: 100, loop: true});
    $("#Index .point").velocity({ translateX:[-8, 0] }, { duration: 500, loop: true});

    next();
};

Room.Index.come_after = function () {
    var ts = 10;
    // Dom.TimeHand = setInterval(function(){
    //     $("#Time").html(--ts);
    //     if(ts==0){
    //         clearInterval(Dom.TimeHand);
    //         Dom.unClick = false;
    //         Room.Index.end()
    //     }
    // },1000);
};

Room.Index.going = function () {
    $("#Index .call1").velocity("stop");
    $("#Index .point").velocity("stop");
};

Room.Index.ppt1 = function(){
    cc.ppt(["Index", "Tel"] , function(after , callback){
        cc.m["Tel"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 500, complete:function(){
            after.go();
        }});
    })
};

Room.Index.ppt2 = function(){
    cc.ppt(["Index", "Fail"] , function(after , callback){
        cc.m["Fail"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 500, complete:function(){
            after.go();
        }});
    })
};