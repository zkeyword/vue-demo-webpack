"use strict"

exports.sceneCur = (obj, arr) => {
    let sceneId = obj.scene_id
	for(let i = 0,len = arr.length; i<len; i++){
		if( sceneId == arr[i] ) {
			return true;
		}
	}
}

exports.timerCur = (item, subItem, arr) => {
    let timer = subItem +''+ (item+1);
    if( !arr ) return;
    for(let i = 0,len = arr.length; i<len; i++){
		if( timer == arr[i] ) {
			return true;
		}
	}
}

exports.welfaresCur = (obj, arr) => {
	let welfareId = obj.welfares_id
	for(let i = 0,len = arr.length; i<len; i++){
		if( welfareId == arr[i] ) {
			return true;
		}
	}
}

