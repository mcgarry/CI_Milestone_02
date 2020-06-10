// JavaScript Document
// https://developer.mozilla.org/en-US/Add-ons/Code_snippets/On_page_load
// https://pixijs.github.io/examples/#/basics/basic.js
// https://github.com/kittykatattack/bump


// ???? - WIP 
// delete chips in container
// €100 chip not woking

// ??? Have to make dynamic
let chipStackYOffset = 3;
// scale of chips on targets
let targChipScale = .3;

//let imgPath = 'assets/img/';

function onRtnChip(rtnChip,rtnX,rtnY)
{
	TweenLite.to(rtnChip.position, .5, {x:rtnX , y:rtnY, onComplete:onRtnChipCB, onCompleteParams:[rtnChip]});
}
function onRtnChipCB(rtnChip)
{
	app.stage.removeChild(rtnChip);
	/*console.log("onRtnChipCB rtnChip.x:"+rtnChip.x);
	for (var i = 0; i < rtnChip.length; i++) {
		console.log(rtnChip[i]);
	}*/
}

/*function addChipsOnContainer(container, chipArray)
{		
	let contCentreX = container.x + (container.width/2);
	let contCentreY = container.y + (container.height/2);
	let contCentreYOffset = (chipStackYOffset * chipArray.length)/2;
	for (let k = 0; k < chipArray.length; k++){
		let value = chipArray[k];
		let img = `img/chip-${value}.png`; 
		//'img/chip-' + value + '.png';
		let displayChip = PIXI.Sprite.fromImage(img);
		let chipEvent;
		displayChip.x = contCentreX;
		displayChip.y = (contCentreY - contCentreYOffset) + (chipStackYOffset * k);
		displayChip.interactive = false;
		displayChip.buttonMode = false;
		displayChip.anchor.set(0.5);
		displayChip.scale.x = displayChip.scale.y = .5;
		//
		container.addChild(displayChip);
	}
}
*/

	

//function makeTarg(key)
//{
	/*let x = tableObj.targs[key].x;
	let y = tableObj.targs[key].y;
	let h = tableObj.targs[key].h;
	let w = tableObj.targs[key].w;
	
	const targ = new PIXI.Sprite();
	targ.hitArea = new PIXI.Rectangle(x,y,h,w);
	targ["name"] = key;
	return targ;*/
//}

//function makeTarget()
//{
	/*targ = PIXI.Sprite.fromImage('img/targ.png');
	targ["name"] = "targ01";
	app.stage.addChild(targ);*/
	/*let container = new PIXI.Container();
	container.width = 60;
	container.height = 40;
	container.position.x = 0;
	container.position.y = 0;
	container["name"] = "targ01";
	app.stage.addChild(container);*/
//}

function makeChipBtn(imgPath,value,posX,posY)
{
	var btn = PIXI.Sprite.fromImage(`${imgPath}chip-${value}.png`);
	btn.scale.x = btn.scale.y = .5;
	btn.interactive = true;
	btn.buttonMode = true;
	btn.anchor.set(0.5);
	/*btn.x = app.renderer.width - (app.renderer.width *.1);
	btn.y = app.renderer.height - (app.renderer.height *.1);*/
	btn.x = posX
	btn.y = posY;
	
	btn.on('pointerdown',(event)=>{
		console.log("yahoo");
		btn.data = event.data;
		//console.log(app.stage.getMousePosition());
		const newPosition = btn.data.getLocalPosition(btn.parent);
		console.log(">>>"+newPosition.x);
		makeDragChip(imgPath, value, newPosition.x, newPosition.y, btn.parent);
	});
	
	app.stage.addChild(btn);
}

function makeDragChip(imgPath, value, chipStartX, chipStartY, parent)
{
	let dragChipParent = parent;
	let img = `${imgPath}chip-${value}.png`; //'img/chip-' + value + '.png';
	let dragChip = PIXI.Sprite.fromImage(img);
	let chipEvent;
	
	dragChip.interactive = true;
	dragChip.buttonMode = true;
	dragChip.anchor.set(0.5);
	dragChip["value"] = value;
	
	dragChip.x = chipStartX;
	dragChip.y = chipStartY;
	
	dragChip.scale.x = dragChip.scale.y = .5;
	
	const onDragStart = event => {
		dragChip.data = event.data;
		dragChip.dragging = true;
	};
	
	const onDragEnd = event => {
		
		
		dragChip.data = event.data
		const newPosition = dragChip.data.getLocalPosition(dragChipParent);
		
		let hitContNo = bumpScan(newPosition.x,newPosition.y);
		console.log("hitContNo: "+hitContNo);
		
		if(hitContNo != -1)
		{ // hit
			let targContName = 'targ'+hitContNo;
			let targContainer = tableObj.targs[targContName].container;
		
			//console.log('targ name: '+targContName);
			//console.log('dragChip value: '+dragChip.value);
			let chipArray = betObject.setBet(targContName, dragChip.value);
				
			//console.log("chipArray >>>> : "+chipArray);
			//console.log("total >>>>>>>> : "+betObject.getBetTotal());
				
			// ???
			if ( chipArray != [] ){
				// Delete old Chips
		 		clearChipsOnTarg(targContainer);
				setChipsOnTarg(imgPath, targContainer, chipArray);
			}else{
				console.error("chip not added to bet");
				onRtnChip(dragChip, chipStartX, chipStartY);
			}
			
				app.stage.removeChild(dragChip);
		}else{ // return Chip
			console.log('no hit');
			onRtnChip(dragChip, chipStartX, chipStartY);
		}
		
		dragChip.dragging = false;
		
		
	};
	
	// ???
	
	// ???
	
	function clearChipsOnTarg(targ)
{
	// http://www.html5gamedevs.com/topic/840-remove-all-children-from-a-stage/
	console.log("targ >> : "+targ);
	console.log("targ >>: "+targ.children.length);
	// ???? - WIP 
	
	/*While(targ.children[0])
	{
		targ.removeChild(targ.children[0]);
		console.log("remove >>");
	}*/
	/*for (var key in p) {
		if (p.hasOwnProperty(key)) {
			console.log(key + " -> " + p[key]);
		}
	}*/
	let contLength = targ.children.length;
	// to keep background
	// remove = and set targ.children[1]
	for (var i = contLength; i >= 0; i--) {
		console.log("remove >> "+i);
		targ.removeChild(targ.children[0]);
	}
}
	
	function setChipsOnTarg(imgPath, targ, chipArray){
		
		 // make new chips
		// let targCentreX = targ.x + (targ.width/2);
		// let targCentreY = targ.y + (targ.height/2);
		//let targCentreX = targ.width/2;
		//let targCentreY = targ.height/2;
		let targCentreX = tableObj.settings.targWidth/2;
		let targCentreY = tableObj.settings.targHeight/2;
		
		let targCentreYOffset = (chipStackYOffset * chipArray.length)/2;
		// for(var i = array.length; i--;)
		// for (var i=arr.length-1; i>=0; i--) {
		let k = chipArray.length; //or 10
		
		chipArray.reverse();
		
		while(k--)
		{
		  //...
		//}
		//for (let k = 0; k < chipArray.length; k++){
			let value = chipArray[k];
			let img = `${imgPath}chip-${value}.png`;
			//'img/chip-' + value + '.png';
			let displayChip = PIXI.Sprite.fromImage(img);
			let chipEvent;
			displayChip.x = targCentreX;
			displayChip.y = (targCentreY - targCentreYOffset) + (chipStackYOffset * k);
			displayChip.interactive = false;
			displayChip.buttonMode = false;
			displayChip.anchor.set(0.5);
			displayChip.scale.x = displayChip.scale.y = targChipScale;
			targ.addChild(displayChip);
		}
		
		// ???? ><00><
		
		/*for (var key in betObject) {
		  if (betObject.hasOwnProperty(key)) {
			console.log(key + " -> " + betObject[key]);
		  }
		}
		*/
		
		console.log("dip1:"+betObject.getTargBetTotal("targ2"));
		
		console.log("dip2:"+betObject.getBetTotal());
		
		displayObject.setBetTotalText(betObject.getBetTotal());
		//console.log(betTotalText.setText(betObject.getBetCurrency()+' 456.00'););
	}
	
	
	const onDragMove = event => {
		dragChip.data = event.data
		// let obj = dragChip.data.getLocalPosition(dragChip.parent);
		// console.log("trigger:"+obj.x);
		
		if(dragChip.dragging === true)
		{
			const newPosition = dragChip.data.getLocalPosition(dragChipParent);
			dragChip.x = newPosition.x;
			dragChip.y = newPosition.y;
		}
	};
		
		
	dragChip.on('pointerup', onDragEnd)
			.on('pointerupoutside', onDragEnd)
			.on('pointermove', onDragMove)
			{

			}
	chipEvent = app.stage.addChild(dragChip);
	dragChip.dragging === true;
	onDragStart(chipEvent);
}