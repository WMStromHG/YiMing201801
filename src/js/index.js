Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};


Room.Index = {};
Room.Index.dom = function(){

    $("#Index .call_btn").tap(function(e){
        cc.tap(e);

        clearTimeout(Hand.dcall);

        $("#Index .call1").show();
        $("#Index .call2").hide();

        setTimeout(function(){
            $("#Index .call1").hide();
            $("#Index .call2").show();
        },100)


        Hand.dcall = setTimeout(function(){
            $("#Index .call1").show();
            $("#Index .call2").hide();
        }, 500);

    });

};

Room.Index.coming = function(){
    $("#Index .call1").velocity({ rotateZ:["-1deg","1deg"] }, { easing:"linear", duration: 100, loop: true});
};

Room.Index.go_after = function () {
    // $("#Index .topWheel").velocity("stop");
    // $("#Index .bottomWheel").velocity("stop");
};

Room.Index.ppt = function(){
    var start = "GameLoad1";
    cc.ppt(["Index", start] , function(after , callback){
        cc.m["Index"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m[start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            after.go();
            GameLoad1();
        }});
    })
};