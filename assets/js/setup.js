// JavaScript Document
let app;
let targ;
let imgPath = 'assets/img/';
var betObject;
var displayObj;
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
	app = new PIXI.Application(400, 800, {backgroundColor : 0x1099bb});
	document.body.appendChild(app.view);
	//b = new Bump(PIXI);


	betObject = new BetObject();

	console.log(imgPath);
	makeChipBtn(imgPath,1,250,50);
	makeChipBtn(imgPath,5,250,100);
	makeChipBtn(imgPath,10,250,150);
	makeChipBtn(imgPath,25,250,200);
	makeChipBtn(imgPath,100,250,250);
	makeClearButton(imgPath,"clear_btn",250,300);
	makeAutoButton(imgPath,"auto_btn",250,350);
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