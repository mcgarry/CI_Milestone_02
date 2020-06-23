

function DisplayObject()
{
	// display total
	let betTotalTextInst = new PIXI.Text('Total Bet:');
	betTotalTextInst.x = 20;
	betTotalTextInst.y = 550;
	app.stage.addChild(betTotalTextInst);

	let betTotalText = new PIXI.Text(betObject.getBetCurrency()+' 0.00');
	betTotalText.x = 140;
	betTotalText.y = 550;


	app.stage.addChild(betTotalText);
	
	this.setBetTotalText = function(totalText)
	{
		let totalTextStr = betObject.getBetCurrency()+' '+totalText+'.00'
		betTotalText.setText(totalTextStr);
		return true;
	}
}

function makeClearButton(imgPath,img,posX,posY)
{
	var btn = PIXI.Sprite.fromImage(`${imgPath}${img}.png`);
	btn.scale.x = btn.scale.y = .5;
	btn.interactive = true;
	btn.buttonMode = true;
	btn.anchor.set(0);
	/*btn.x = app.renderer.width - (app.renderer.width *.1);
	btn.y = app.renderer.height - (app.renderer.height *.1);*/
	btn.x = posX
	btn.y = posY;
	
	btn.on('pointerdown',(event)=>{
		console.log(img+" clicked");
		
		console.log("betObject.lock: "+betObject.getLock());
		// if bet NOT locked
		if(!betObject.getLock())
		{
			// confirm trigger on console
			console.log("delete allowed");
			// delete bets on bet object
			setupReset();
		}
		
		console.log("betObject.getBetTotal: "+betObject.getBetTotal());
	});
	
	app.stage.addChild(btn);
}

function makeAutoButton(imgPath,img,posX,posY)
{
	var btn = PIXI.Sprite.fromImage(`${imgPath}${img}.png`);
	btn.scale.x = btn.scale.y = .5;
	btn.interactive = true;
	btn.buttonMode = true;
	btn.anchor.set(0);
	/*btn.x = app.renderer.width - (app.renderer.width *.1);
	btn.y = app.renderer.height - (app.renderer.height *.1);*/
	btn.x = posX
	btn.y = posY;
	
	btn.on('pointerdown',(event)=>{
		console.log(img+" clicked");
		
		console.log("betObject.lock: "+betObject.getLock());
		// if bet NOT locked
		if(!betObject.getLock())
		{
			// confirm trigger on console
			console.log("auto allowed");
			
		}
		
		console.log("betObject.getBetTotal: "+betObject.getBetTotal());
	});
	
	app.stage.addChild(btn);
}



