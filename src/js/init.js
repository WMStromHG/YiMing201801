function loader() {

    libs.create();
    libs.setTicker(25);
    libs.iniDom();
    an_init();

    Dom.loadWord = $("#Loader .word");

    //

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

    Loads.loads("dog1",  "img/family/", "dog1.png");
    Loads.loads("dog2",  "img/family/", "dog2.png");
    Loads.loads("dog3",  "img/family/", "dog3.png");

    Loads.loads("end_tit",  "img/end/", "end.png");
    Loads.loads("end_back",  "img/end/", "back.png");
    Loads.loads("end_fail",  "img/end/", "fail.png");
    Loads.loads("end_tel",  "img/end/", "tel.png");
    Loads.loads("end_c1",  "img/end/", "c1.png");
    Loads.loads("end_c2",  "img/end/", "c2.png");
    Loads.loads("end_cls",  "img/end/", "cls.png");
    Loads.loads("end_code",  "img/end/", "codex.png");

    Loads.loads("mp3_bg",  "mp3/", "bg.mp3");
    Loads.loads("mp3_ling",  "mp3/", "ling.mp3");
    Loads.loads("mp3_ring",  "mp3/", "ring.mp3");
    Loads.loads("mp3_yes",  "mp3/", "yes.mp3");
    Loads.loads("mp3_no",  "mp3/", "no.mp3");
    Loads.loads("mp3_jump",  "mp3/", "jump.mp3");


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

        $("#Fail .end").html(Loads.get("end_tit"));
        $("#Fail .fail").html(Loads.get("end_fail"));
        $("#Fail ._back").html(Loads.get("end_back"));

        $("#Tel .tel").html(Loads.get("end_tel"));
        $("#Tel .c1").html(Loads.get("end_c1"));
        $("#Tel .c2").html(Loads.get("end_c2"));

        $("#Codes .bg").html(Loads.get("end_code"));
        $("#HasFail .cls").html(Loads.get("end_cls"));

        Loads.copy("end_tit", "end_tit_copy");
        Loads.copy("end_fail", "end_fail_copy");
        Loads.copy_run(function(){
            $("#Tel .end").css("background-image", "url("+Loads.copy_img["end_tit_copy"]+")");
            $("#HasFail .fail").css("background-image", "url("+Loads.copy_img["end_fail_copy"]+")");

            setTimeout(Room.Loader.start, 300);
        });

        fcavcas();

    };
    Loads.loading();
}

var fcav;
function fcavcas(){

    fcav = new CanvasCreate($("#fcanvas"));

    fcav.ccv("f");
    fcav.drawPhotos("yeye", "f",  "yeye", 2, {
        frames:[0,0,113,168],
        framerate: 1.5,
        mov: {
            ini: [0],
            run:[0,1]
        },
        conf:{
            x:324, y:179
        }
    });

    fcav.drawPhotos("dog", "f",  "dog", 3, {
        frames:[0,0,77,113],
        framerate: 5,
        mov: {
            ini: [0],
            run: [0,2]
        },
        conf:{
            x:144, y:795
        }
    });

    fcav.show("f");

}