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
};
Room.Loader.dom = function(){
    $("#Loader .btn").tap(function(e){
        cc.tap(e);
        Room.Loader.ppt();
    });
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

Room.Index.nai = function(){
    an_nai.play();
};

Room.Index.coming = function(){
    $("#Index .call1").velocity({ rotateZ:["-1deg","1deg"] }, { easing:"linear", duration: 100, loop: true});
    $("#Index .point").velocity({ translateX:[-8, 0] }, { duration: 500, loop: true});
};

Room.Index.come_after = function () {
    var ts = 10;
    Dom.TimeHand = setInterval(function(){
        $("#Time").html(--ts);
        if(ts==0){
            clearInterval(Dom.TimeHand);
            Dom.unClick = false;
            Room.Index.nai();
        }
    },1000);
};

Room.Index.go_after = function () {
    // $("#Index .topWheel").velocity("stop");
    // $("#Index .bottomWheel").velocity("stop");
};

// Room.Index.ppt = function(){
//     var start = "GameLoad1";
//     cc.ppt(["Index", start] , function(after , callback){
//         cc.m["Index"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
//         cc.m[start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
//             after.go();
//             GameLoad1();
//         }});
//     })
// };