function RanNum()
{
	return Math.floor(Math.random()*37);
}

function BetObject()
{
    let lock = false;
	let chipVals = [1,5,10,25,100];
	let _this = this;
	let betLimit = 400;
	let betCurrency = "€";
	var betTable = { "targ0":0, "targ1":0, "targ2":0, "targ3":0, "targ4":0, "targ5":0, "targ6":0, "targ7":0, "targ8":0, "targ9":0, "targ10":0, "targ11":0, "targ12":0, "targ13":0, "targ14":0, "targ15":0, "targ16":0, "targ17":0, "targ18":0, "targ19":0, "targ20":0, "targ21":0, "targ22":0, "targ23":0, "targ24":0, "targ25":0, "targ26":0, "targ27":0, "targ28":0, "targ29":0, "targ30":0, "targ31":0, "targ32":0, "targ33":0, "targ34":0, "targ35":0, "targ36":0 };
	
	//console.log("dip:"+BetObject.getTargBetTotal());//["targ2"]);
	
	// Internal
    var getTargChips = function(tempTotBet)
    {
        // input bet total, returns chips used to make up number
			let disChips = [];
			//for (let k = 0; k < chipVals.length; k++)
			let k = chipVals.length;
			while(k--)
			{
				// round down DIV to find number of loops
				//var div:int = int(tempTotBet/chipVals[k]);
				let div = Math.floor(tempTotBet/chipVals[k]);
				
				//trace("TotBet =>"+tempTotBet+" div:"+div+" with chip"+chipVals[k]);

				// insert chips to disChips
				for (var m = 0; m<div; m++)
				{
					// reduce tempTotBet
					tempTotBet -=  chipVals[k];
					// push the chip
					disChips.push(chipVals[k]);
				}
			}
			console.log("disChips: "+disChips);
			return disChips;
    }
	
	// External
	this.setLock = function(boo)
	{
		if (boo){
			lock = true;
		}else{
			lock = false;
		}
	}
	
	var clearBet = function(targ)
	{
    	if(!lock){
			betTable[targ] = 0;
		}
		
	}
	
	this.getBetCurrency = function()
	{ return betCurrency; }
		
	this.setDeleteBets = function()
	{
    	if(!lock){
			console.log("call >>>>");
			for (var key in betTable) {
				//console.log(key + " -> " + betTable[key]);
				if (betTable.hasOwnProperty(key)) {
					//clearBet(key);
					clearBet(key);
				}
			}
			return true;
		}else{
			return false;
		}
	}
	
	this.setBet = function(targ,val)
    {
		if(!lock){
			console.log(val +":"+ targ );
			//console.log("setBet: "+betTable["targ0"]);
			betTable[targ] += val;

			//console.log("setBet2: "+betTable[targ]);
			//betTable[targ].push(val);
			//console.log(getTargChips(_this.getBetTotal()));
			//reDrawTable();
			console.log("setBet val:"+val+" targ:"+betTable[targ]);
			return getTargChips(betTable[targ]);
			
		}
    }
	
	this.getTargBetTotal = function(targ)
    {
		return betTable[targ];
	}
	
	this.getBetTotal = function()
    {
		let betTotal = 0;
		for (var key in betTable) {
			if (betTable.hasOwnProperty(key)) {
				betTotal += betTable[key];
				//betTotal += _this.getTargBetTotal(key);
				//console.log("key:"+key+" :"+key);
			}
		}
		return betTotal;
	}
	
	this.getLock = function()
    {
		console.log("inside:"+lock);
		return lock;
	}
}
/*function bet35(val){
	if (betObject.setBet(5,"targ35")){
		console.log("Accepted");
	}else{
		console.log("Rejceted");
	}
}*/

