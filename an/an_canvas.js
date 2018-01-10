(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"an_canvas_atlas_", frames: [[0,0,115,243],[117,0,115,243],[336,0,100,256],[234,0,100,261],[0,245,115,43]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.k1 = function() {
	this.spriteSheet = ss["an_canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.k2 = function() {
	this.spriteSheet = ss["an_canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.n1 = function() {
	this.spriteSheet = ss["an_canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.n2 = function() {
	this.spriteSheet = ss["an_canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.s = function() {
	this.spriteSheet = ss["an_canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yj2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.n2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.493,0.493);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yj2, new cjs.Rectangle(0,0,49.3,128.7), null);


(lib.yj1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.n1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yj1, new cjs.Rectangle(0,0,53.9,137.9), null);


(lib.KKK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// KKK
	this.instance = new lib.k1();
	this.instance.parent = this;

	this.instance_1 = new lib.k2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,243);


// stage content:
(lib.an_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 播放影片剪辑
		播放舞台上指定的影片剪辑。
		
		说明:
		1. 将此代码用于当前停止的影片剪辑。
		*/
		
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// n2
	this.instance = new lib.yj2();
	this.instance.parent = this;
	this.instance.setTransform(-24.6,595.3,1,1,0,0,0,24.7,64.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({regX:24.6,rotation:-40,x:-1,y:526.6},0).wait(1).to({rotation:-80,x:27.9,y:459.9},0).wait(1).to({rotation:-120,x:65.4,y:397.7},0).wait(1).to({rotation:-160,x:123.2,y:356.8},0).wait(1).to({rotation:-200,x:161,y:362},0).wait(1).to({rotation:-240,x:194.8,y:379.9},0).wait(1).to({rotation:-280,x:224.1,y:404.9},0).wait(1).to({rotation:-320,x:249.5,y:433.7},0).wait(1).to({rotation:-360,x:271.6,y:465.3},0).wait(1));

	// n1
	this.instance_1 = new lib.yj1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(726.9,898.2,1,1,0,0,0,26.9,68.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({rotation:-40,x:714,y:811.5},0).wait(1).to({rotation:-80,x:696.7,y:725.6},0).wait(1).to({rotation:-120,x:672.2,y:641.4},0).wait(1).to({rotation:-160,x:622.9,y:572.2},0).wait(1).to({rotation:-200,x:588.4,y:576.7},0).wait(1).to({rotation:-240,x:559.2,y:596.8},0).wait(1).to({rotation:-280,x:535,y:622.7},0).wait(1).to({rotation:-320,x:514.1,y:651.4},0).wait(1).to({rotation:-360,x:495.9,y:681.9},0).wait(1));

	// kkk
	this.instance_2 = new lib.KKK();
	this.instance_2.parent = this;
	this.instance_2.setTransform(629.6,757.9,1,1,0,0,0,57.5,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:243,y:879.4},0).wait(1).to({regY:121.5,scaleX:1.05,scaleY:0.93,y:767},0).wait(1).to({scaleX:1.09,scaleY:0.85,y:776.2},0).wait(1).to({scaleX:1.14,scaleY:0.77,y:785.3},0).wait(1).to({scaleX:1,scaleY:1,y:757.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-36,x:618.4,y:655.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-72,x:603.3,y:554.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-108,x:582.8,y:453.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-144,x:552.7,y:355.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-180,x:491.5,y:276.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-216,x:444.4,y:288.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-252,x:408.7,y:322.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-288,x:382.7,y:364.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-324,x:362.8,y:409.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-360,x:347.6,y:457.2},0).wait(10));

	// s
	this.instance_3 = new lib.s();
	this.instance_3.parent = this;
	this.instance_3.setTransform(584,858,0.829,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:true},4).wait(10).to({_off:false,scaleX:0.79,scaleY:0.79,x:306,y:531},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(922.1,1206.4,115,252.3);
// library properties:
lib.properties = {
	width: 700,
	height: 1140,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/an_canvas_atlas_.png", id:"an_canvas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;