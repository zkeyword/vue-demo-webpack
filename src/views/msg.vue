<template>
    <time-conf :timer.sync="timer"></time-conf>
   {{timer}}
</template>

<script>
export default {
    data(){
        return {
            timer: null
        }
    },
    route: {
        data (transition){
            let self     = this,
                query    = transition.to.query;
                
            self.timer = '21-31-41';
        }
    },
    ready(){
        let self = this;

        //self.timer = '21-31-34354353543543'
    },
    components: {
        'timeConf': require('../components/timeConf.vue')
    }
}
</script>








