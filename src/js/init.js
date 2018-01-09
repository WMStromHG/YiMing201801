function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();
    an_nai_init();

    Dom.loadWord = $("#Loader .word");

    // Loads.loads("mp3_bg",  "mp3/", "bg.mp3");

    Loads.loads("loadword",  "img/", "loadword.png");
    Loads.loads("loadtit",  "img/", "tit.png");

    Loads.loads("bg",  "img/", "bg.jpg");
    Loads.loads("call1",  "img/", "call1.png");
    Loads.loads("call2",  "img/", "call2.png");
    Loads.loads("point",  "img/", "point.png");
    // Loads.loads("nai",  "img/", "nai.png");

    Loads.loads("girl",  "img/family/", "girl.png");

    Loads.loads("yeye1",  "img/family/", "yeye1.png");
    Loads.loads("yeye2",  "img/family/", "yeye2.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
    };

    Loads.complete = function(){

        $("#Loader .btnWord").html(Loads.get("loadword"));
        $("#Loader .tit").html(Loads.get("loadtit"));

        $("#Index .bg").html(Loads.get("bg"));
        $("#Index .call1").html(Loads.get("call1"));
        $("#Index .call2").html(Loads.get("call2"));
        $("#Index .point").html(Loads.get("point"));

        $("#Index .girl").html(Loads.get("girl"));

        fcavcas();

        // mp3_play("bg", 1);
        setTimeout(Room.Loader.start, 300);
    };
    Loads.loading();
}

var fcav;
function fcavcas(){

    fcav = new CanvasCreate($("#fcanvas"));

    fcav.ccv("f");
    //fcav.drawImg("yeye1","f");
    fcav.drawPhotos("yeye", "f",  "yeye", 2, {
        frames:[0,0,113,168],
        framerate: 1.5,
        mov: {
            ini: [0,1]
        },
        conf:{
            x:324, y:179
        }
    });
    fcav.show("f");

}