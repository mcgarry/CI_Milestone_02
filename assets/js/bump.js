

function bumpScan(cx,cy)
{
	let cArray = bumpScanWide(cx,cy);
	return bumpScanNarrow(cArray,cx,cy);
}

function bumpScanNarrow(sectArray,cx,cy)
{
	let foundSector = -1;
	let i = sectArray[0];
	
	//let str = JSON.stringify(tableObj, null, 4); // (Optional) beautiful indented output.
	//console.log(str); // Logs output to dev tools console.
	let k = sectArray[1];
	for( i; i<=k ; i++)
	{
		console.log(">>>> i: "+i);
		// find Y sector;
		//19,27
		let targ = "targ"+i;
		let topX = tableObj.targs[targ].x;
		let topY = tableObj.targs[targ].y;
		let botX = tableObj.targs[targ].x + tableObj.settings.targWidth;
		let botY = tableObj.targs[targ].y + tableObj.settings.targHeight;
		
		/*console.log("topX:"+topX+" topY:"+topY);
		console.log("cy:"+cy+" cx:"+cx);
		console.log("botX:"+botX+" botY:"+botY);*/
		
		// check y axis
		//console.log("cy:"+cy+" topY:"+topY);
		if (cy > topY && cy < botY && cx > topX && cx < botX )
		{
			foundSector = i;
			break;
			/*console.log("topX:"+topX+" topY:"+topY);
			console.log("cy:"+cy+" cx:"+cx);
			console.log("botX:"+botX+" botY:"+botY);*/
		}
	}
	
	return foundSector;
}

function bumpScanWide(cx,cy)
{
	//let str = JSON.stringify(tableObj, null, 4); // (Optional) beautiful indented output.
	//console.log(str); // Logs output to dev tools console.
	
	console.log("tableObj.targs.targ18.y: "+tableObj.targs.targ18.y);
	
	let sectArray;
	// which half
	if(tableObj.targs.targ19.y > cy)
		{ //console.log("top half");
			if(tableObj.targs.targ10.y > cy)
				{ //console.log("above 9");
					//console.log(">>>>>>>> 0 trigger ");
					sectArray = [0,9];
				}else{ //console.log("between 10 and 18");
					sectArray = [10,18];
				}
		}else{ //console.log("bottom half");
			if(tableObj.targs.targ28.y > cy)
				{ //console.log("between 18 and 27");
					sectArray = [19,27];
				}else{ //console.log("between 28 and 36");
					sectArray = [28,36];
				}
		}
	
	return sectArray;
	
	/*tableObj.targs.targ18.y > cy;
	console.log("isTopHalf: "+isTopHalf);
	let sectorArrayOne = [[13,18],[19,24],[7,12],[25,30],[31,36],[0,6],[0,0]];
	let sectorArray = [[13,18],[19,24],[7,12],[25,30],[31,36],[0,6],[0,0]];
	let isInSector = false;
	let detectedSector = [];
	let i = 0;
	for(i; i<sectorArray.length ; i++)
	{
		isInSector = getSector(sectorArray[i][0],sectorArray[i][1],cy);
		if (isInSector)
		{
			break;
		}
	}*/
}

/*function getSector(targMin,targMax)
{
	let isInSector = false;
	console.log("targMin: "+targMin+" targMax: "+targMax);
	
	//tableObj.targs  ":{"targ0":{"x":0, "y":0, 
	//let targs = tableObj.targs; 
	
	// >>>>>>>????? - WIP
	// need click Y location
	let str = JSON.stringify(tableObj.targs, null, 4); // (Optional) beautiful indented output.
	//console.log(str); // Logs output to dev tools console.
	
	// "x":0, "y":0, 
	let targMinName = "targ"+targMin;
	let targMaxName = "targ"+targMax;
	//targs[targName]
	//let topX = tableObj.targs[targMinName].x;
	let topY = tableObj.targs[targMinName].y;
	//let botX = tableObj.targs[targMaxName].x + tableObj.settings.targWidth;
	let botY = tableObj.targs[targMaxName].y + tableObj.settings.targHeight;
	
	// <<<<<<< ????? 
	
//if(targMin == 19)
//		{
//			isInSector = true;
//		}
//	return isInSector;
}*/

