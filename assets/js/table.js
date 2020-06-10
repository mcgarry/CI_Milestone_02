// https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
	// noZero - 1 for roulette with one Zero, 2 for roulette with two Zero's
let tableObj = {};

//let imgPath = 'assets/img/';
// tableObj.targs[targContName].container

function setTable()
{
	tableObj = {"settings":{"offsetX":0,"offsetY":0,"targWidth":0,"targHeight":0,"noRows":3, "noZero":1}, "targs":{ "targ0":{"x":0, "y":0, "chips":[], "container":0 }, "targ1":{"x":0, "y":0, "chips":[], "container":0 }, "targ2":{"x":0, "y":0, "chips":[], "container":0 }, "targ3":{"x":0, "y":0, "chips":[], "container":0 }, "targ4":{"x":0, "y":0, "chips":[], "container":0 }, "targ5":{"x":0, "y":0, "chips":[], "container":0 }, "targ6":{"x":0, "y":0, "chips":[], "container":0 }, "targ7":{"x":0, "y":0, "chips":[], "container":0 }, "targ8":{"x":0, "y":0, "chips":[], "container":0 }, "targ9":{"x":0, "y":0, "chips":[], "container":0 }, "targ10":{"x":0, "y":0, "chips":[], "container":0 }, "targ11":{"x":0, "y":0, "chips":[], "container":0 }, "targ12":{"x":0, "y":0, "chips":[], "container":0 }, "targ13":{"x":0, "y":0, "chips":[], "container":0 }, "targ14":{"x":0, "y":0, "chips":[], "container":0 }, "targ15":{"x":0, "y":0, "chips":[], "container":0 }, "targ16":{"x":0, "y":0, "chips":[], "container":0 }, "targ17":{"x":0, "y":0, "chips":[], "container":0 }, "targ18":{"x":0, "y":0, "chips":[], "container":0 }, "targ19":{"x":0, "y":0, "chips":[], "container":0 }, "targ20":{"x":0, "y":0, "chips":[], "container":0 }, "targ21":{"x":0, "y":0, "chips":[], "container":0 }, "targ22":{"x":0, "y":0, "chips":[], "container":0 }, "targ23":{"x":0, "y":0, "chips":[], "container":0 }, "targ24":{"x":0, "y":0, "chips":[], "container":0 }, "targ25":{"x":0, "y":0, "chips":[], "container":0 }, "targ26":{"x":0, "y":0, "chips":[], "container":0 }, "targ27":{"x":0, "y":0, "chips":[], "container":0 }, "targ28":{"x":0, "y":0, "chips":[], "container":0 }, "targ29":{"x":0, "y":0, "chips":[], "container":0 }, "targ30":{"x":0, "y":0, "chips":[], "container":0 }, "targ31":{"x":0, "y":0, "chips":[], "container":0 }, "targ32":{"x":0, "y":0, "chips":[], "container":0 }, "targ33":{"x":0, "y":0, "chips":[], "container":0 }, "targ34":{"x":0, "y":0, "chips":[], "container":0 }, "targ35":{"x":0, "y":0, "chips":[], "container":0 }, "targ36":{"x":0, "y":0, "chips":[], "container":0 }}};
	
	// ??? Need to Make Dynamic
	tableObj.settings.targWidth = 60;
	tableObj.settings.targHeight = 40;
	tableObj.settings.offsetX = 20;
	tableObj.settings.offsetY = 20;
	
	let targW = tableObj.settings.targWidth;
	let targH = tableObj.settings.targHeight;
	let targOffX = tableObj.settings.offsetX;
	let targOffY = tableObj.settings.offsetY;

	let loopLimit = tableObj.settings.noRows;
	let loopCount = -Math.abs(tableObj.settings.noZero);
	let row = 0;
	//console.log("loopCount: "+loopCount);
	//let table = new PIXI.Container();
	//app.stage.addChild(table);
	
	let targs = tableObj.targs;
	for (var key in targs) {
	if (targs.hasOwnProperty(key)) {
		  //console.log(key + " -> " + targs[key]);
		  //console.log("loop % loopLimit:"+loopCount % loopLimit);
		  let div = loopCount % loopLimit;
		  loopCount++;
		switch(div) {
			case -2:
				// top - roulette with two Zero's
				break;
			case -1:
				// top - roulette with one Zero
				tableObj.targs[key].y = tableObj.settings.offsetY;
				tableObj.targs[key].x = targW + tableObj.settings.offsetX;
				break;
			case 0:
				// All left hand - new row
				row++;
				tableObj.targs[key].y = (targH * row) + tableObj.settings.offsetY;
				tableObj.targs[key].x = tableObj.settings.offsetX;
				break;
			default:
				// All other Boxes
				tableObj.targs[key].y = (targH * row) + tableObj.settings.offsetY;
				tableObj.targs[key].x = (targW * div) + tableObj.settings.offsetX;
		} 
		
	}
	}
	tableObj.targs = targs;
	
	//let str = JSON.stringify(tableObj, null, 4); // (Optional) beautiful indented output.
	//console.log(str); // Logs output to dev tools console.
	
	targs = tableObj.targs;
	for (var key in targs) 
	{
		tableObj.targs[key].container = app.stage.addChild(makeTarg(key));
		//console.log(">>>> container: "+tableObj.targs[key].container);
	}
	
	// let str = JSON.stringify(app.stage.children, null, 4); // (Optional) beautiful indented output.
	// console.log(str); // Logs output to dev tools console.
}

function redrawTable()
{
	let targs = tableObj.targs;
	for (var key in targs) 
	{
		app.stage.removeChild(tableObj.targs[key].container);
		//console.log(">>>> container: "+tableObj.targs[key].container);
	}
	
	setTable();
}
//function getTargChips(){}

function makeTarg(key)
{

	let targ = new PIXI.Container();
	targ["name"] = key;
	targ.x = tableObj.targs[key].x;
	targ.y = tableObj.targs[key].y;
	targ.width = tableObj.settings.targWidth;
	targ.height = tableObj.settings.targHeight;

	let contBK = PIXI.Sprite.fromImage(`${imgPath}${key}.png`);
	contBK["name"] = key;
	contBK.width = tableObj.settings.targWidth;
	contBK.height = tableObj.settings.targHeight;
	
	targ.addChild(contBK);
	
	return targ;
}






