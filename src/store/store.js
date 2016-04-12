import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        getScrollerTime(selector, type){
            var size = $('html').css('font-size'),
                width,
                height;

            size = size.replace(/[^\d]+$/,"");
            width = parseInt(Number(size) * 3.58, 10);
            height = parseInt(Number(size) * 1.5, 10);

            var theme = {
                defaults: {
                    dateOrder: 'yymmdd',
                    mode: 'mixed',
                    rows: 5,
                    width: width,
                    height: height,
                    showLabel: false,
                    useShortLabels: true,
                    timeFormat: 'HH:ii',
                }
            };

            $.mobiscroll.themes['cncnerp-m'] = theme;
            $.mobiscroll.themes['cncnerp-m light'] = theme;

            var currYear = (new Date()).getFullYear();
            var opt={};
            opt.date = {preset : 'date'};
            opt.datetime = {preset : 'datetime'};
            opt.time = {preset : 'time'};
            opt.default = {
                theme: 'cncnerp-m light', //皮肤样式
                display: 'modal', //显示方式
                mode: 'scroller', //日期选择模式
                lang:'zh',
                startYear:currYear - 10, //开始年份
                endYear:currYear + 10 //结束年份
            };

            if( !type ){
                $(selector).scroller('destroy').scroller($.extend(opt['date'], opt['default']));
            }else{
                $(selector).mobiscroll().time({
                    theme: 'cncnerp-m light',
                    display: 'modal',
                    timeFormat: 'HH:ii',
                    timeWheels: 'HHii'
                });
            }
        }
	},
	actions: {

	}
});
