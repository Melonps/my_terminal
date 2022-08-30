<template>
    <div id="date">
        <p>{{ day }}</p>
        <p>{{month}}</p>
        <p>{{dayOfWeek}}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            day: "00",
            month: "00",
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
            const day = date.getDate();
            const dayOfWeek = date.getDay();
            const dayOfWeek_Str = [ "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATERDAY" ][dayOfWeek] ;
            this.day = day;  // 日付
            this.month = month+1;
            this.dayOfWeek = dayOfWeek_Str;

        } 
    }
}
</script>


