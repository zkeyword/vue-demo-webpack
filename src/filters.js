"use strict"

exports.sceneCur = function(obj, arr){
    let sceneId = obj.scene_id
	for(let i = 0,len = arr.length; i<len; i++){
		if( sceneId == arr[i] ) {
			return true;
		}
	}
}

exports.timerCur = function(item, subItem, arr){
    let timer = subItem +''+ (item+1);
    for(let i = 0,len = arr.length; i<len; i++){
		if( timer == arr[i] ) {
			return true;
		}
	}
}

exports.getTabStr = (tab, good, top) => {
   
}




