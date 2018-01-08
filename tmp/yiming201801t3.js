(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.nai = function() {
	this.initialize(img.nai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,248);// helper functions:

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


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nai();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-124,115,248);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nai();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-124,115,248);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nai();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-124,115.1,248);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nai();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-124,115.1,248);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.nai();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,115,248), null);


// stage content:
(lib.yiming201801t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// 图层 2
	this.instance = new lib.补间8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(550.2,468.1,1,1,-75);
	this.instance._off = true;

	this.instance_1 = new lib.补间9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(438.2,317.6,0.93,0.93,157.3,0,0,-0.1,-0.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(373.5,344,0.914,0.914,75);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(351.5,437.3,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true,regX:-0.1,regY:-0.1,scaleX:0.93,scaleY:0.93,rotation:-202.7,x:438.2,y:317.6},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},4).to({_off:true,regX:0,regY:0,scaleX:0.91,scaleY:0.91,rotation:-285,x:373.5,y:344},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},2).to({_off:true,scaleX:0.9,scaleY:0.9,rotation:-360,x:351.5,y:437.3},2).wait(1));

	// 图层 2
	this.instance_4 = new lib.元件3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(623.2,927.1,1,1,0,0,0,57.5,248);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:124,scaleX:1.03,scaleY:0.97,y:807},0).wait(1).to({scaleX:1.05,scaleY:0.94,y:810.9},0).wait(1).to({scaleX:1.08,scaleY:0.91,y:814.8},0).wait(1).to({scaleX:1.11,scaleY:0.87,y:818.7},0).wait(1).to({scaleX:1.14,scaleY:0.84,y:822.6},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(915.7,1249.1,115,248);
// library properties:
lib.properties = {
	width: 700,
	height: 1140,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/nai.png", id:"nai"}
	],
	preloads: []
};




})(an_lib = an_lib||{}, an_images = an_images||{}, an_createjs = an_createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var an_lib, an_images, an_createjs, ss, AdobeAn;