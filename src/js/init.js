function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();

    Dom.loadWord = $("#Loader .word");

    // Loads.loads("mp3_bg",  "mp3/", "bg.mp3");

    Loads.loads("bg",  "img/", "bg.jpg");
    Loads.loads("call1",  "img/", "call1.png");
    Loads.loads("call2",  "img/", "call2.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
    };

    Loads.complete = function(){

        $("#Index .bg").html(Loads.get("bg"));
        $("#Index .call1").html(Loads.get("call1"));
        $("#Index .call2").html(Loads.get("call2"));

        // mp3_play("bg", 1);
        setTimeout(Room.Loader.ppt, 300);
    };
    Loads.loading();
}
