function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();
    an_nai_init();

    Dom.loadWord = $("#Loader .word");

    // Loads.loads("mp3_bg",  "mp3/", "bg.mp3");

    Loads.loads("loadword",  "img/", "loadword.png");
    Loads.loads("bg",  "img/", "bg.jpg");
    Loads.loads("call1",  "img/", "call1.png");
    Loads.loads("call2",  "img/", "call2.png");
    Loads.loads("point",  "img/", "point.png");
    // Loads.loads("nai",  "img/", "nai.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
    };

    Loads.complete = function(){

        $("#Loader .btnWord").html(Loads.get("loadword"));

        $("#Index .bg").html(Loads.get("bg"));
        $("#Index .call1").html(Loads.get("call1"));
        $("#Index .call2").html(Loads.get("call2"));
        $("#Index .point").html(Loads.get("point"));
        $("#Index .nai").html(Loads.get("nai"));

        // mp3_play("bg", 1);
        setTimeout(Room.Loader.start, 300);
    };
    Loads.loading();
}
