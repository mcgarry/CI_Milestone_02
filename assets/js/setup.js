// JavaScript Document
let app;
let targ;
let imgPath = 'assets/img/';
var betObject;
var displayObj;
let imgLocations = {"stage":[600,800], "chip_1":[1,487,114], "chip_5":[5,487,204], "chip_10":[10,487,294], "chip_25":[25,487,384], "chip_50":[50,487,474], "clear_btn":[487,587], "auto_btn":[487,677]};

var container = {
  init: function() {
    console.log("init");
	  setup();
  }
};

function Location()
{
	
}

function setup() 
{
	app = new PIXI.Application(600, 800, {backgroundColor : 0x1099bb});
	document.body.appendChild(app.view);
	//b = new Bump(PIXI);

	// set background
	console.log("app.renderer.width: "+app.renderer.width);
	let bkImg = PIXI.Sprite.fromImage(`${imgPath}background.jpg`);

	bkImg.width = app.renderer.width;
	bkImg.height = app.renderer.height;
	bkImg.anchor.set(0);
	app.stage.addChild(bkImg);

	// ???
	betObject = new BetObject();

	//console.log("buttonLocations >>"+buttonLocations);
	//console.log("buttonLocations >>"+buttonLocations.chip_1);

	makeChipBtn(imgPath,imgLocations.chip_1[0],imgLocations.chip_1[1],imgLocations.chip_1[2]);
	makeChipBtn(imgPath,imgLocations.chip_5[0],imgLocations.chip_5[1],imgLocations.chip_5[2]);
	makeChipBtn(imgPath,imgLocations.chip_10[0],imgLocations.chip_10[1],imgLocations.chip_10[2]);
	makeChipBtn(imgPath,imgLocations.chip_25[0],imgLocations.chip_25[1],imgLocations.chip_25[2]);
	makeChipBtn(imgPath,imgLocations.chip_50[0],imgLocations.chip_50[1],imgLocations.chip_50[2]);

	// "clear_btn":[487,587], "auto_btn":[487,677]};
	makeClearButton(imgPath,"clear_btn", imgLocations.clear_btn[0], imgLocations.clear_btn[1]);
	makeAutoButton(imgPath,"auto_btn", imgLocations.auto_btn[0], imgLocations.auto_btn[1]);
	// var animateMe = makeChipBtn();
	//testAnimate(animateMe);
	//console.log();
	// alpha
	//makeTable();
	
	setTable();
	//bumpScan(121,481);
	//makeTarget();
	//makeDice();
	
	displayObject = new DisplayObject();
}

function setupReset()
{
			betObject.setDeleteBets();
			// delete chips on cloth
			redrawTable();
			// reset bet totol displayed
			displayObject.setBetTotalText('0');
}