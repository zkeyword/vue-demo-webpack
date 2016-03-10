"use strict"

exports.sceneCur = function(){
	let id  = arguments[1],
		arr = arguments[2];
		
	return true;
	
	for(let i = 0,len = arr.length; i<len; i++){
		if( id == arr[i] ) {
			console.log(arr[i]);
			return true;
		}
	}
}

exports.getTabStr = (tab, good, top) => {
   
}


