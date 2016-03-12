'use strict'

export default {
    checkEmail(val){
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(val)) {
            return true;
        } else {
            return false;
        }
    },
    checkPhone(val){
        var filter = /^1\d{10}$/;

        if (filter.test(val)) {
            return true;
        } else {
            return false;
        }
    },
    fmtDate(date, fmt){
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    millisecondToDate(){
        var time = parseFloat(msd) / 1000;
        var str ="";
        if (null != time && "" != time) {

            if (time > 60 && time < 3600) {
                str = parseInt(time / 60.0) + " 分钟前";
            }
            else if (time >= 3600 && time < 86400) {
                str = parseInt(time / 3600.0) + " 小时前" ;
            }
            else if (time >= 86400 && time < 86400*30) {
                str = parseInt(time / 86400.0) + " 天前" ;
            }
            else if (time >= 86400*30 && time < 86400*365) {
                str = parseInt(time / (86400.0*30)) + " 个月前" ;
            } 
            else if(time >= 86400*365){
                str = parseInt(time / (86400.0*365)) + " 年前" ;
            }
            else {
                str = parseInt(time) + " 秒前";
            }
        }
        return str;
    },
    remove(arr, val){
        var index = this.indexOf(arr, val);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    },
    indexOf(arr, val){
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) return i;
        }
        return -1;
    },
    unique(arr){
        let re = null
        arr.sort();
        re = [arr[0]];
        for(var i = 1; i < arr.length; i++){
            if( arr[i] !== re[re.length-1]){
                re.push(arr[i]);
            }
        }
        return re;
    }
}