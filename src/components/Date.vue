<template>
    <div id="date">
        <Maintext :month="month" :day="day" :dayOfWeek="dayOfWeek"></Maintext>
    </div>
</template>

<script>
import Maintext from '../components/Maintext.vue';

export default {
    components: {
        Maintext  
    },
    data: function () {
        return {
            month: "January",
            day: "00",
            dayOfWeek:"Sunday",
        }
    },
    created() {
        this.set_day();
    },
    methods: {
        set_day: function() {
            // dataオプションで定義したcuontにアクセス
            const date = new Date();  // Dateオブジェクトを作る
            const month = date.getMonth();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month]
            const day = date.getDate();
            const dayOfWeek = date.getDay();
            const dayOfWeek_Str = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ][dayOfWeek] ;
            this.day = day;  // 日付
            this.month = months;
            this.dayOfWeek = dayOfWeek_Str;
        } 
    }
}
</script>


