<template>
    <Clock v-on:send_clock="receive_clock"></Clock>
    <Date v-on:send_month="receive_month"></Date>
    <Date v-on:send_day="receive_day"></Date>
    <Date v-on:send_dayOfWeek="receive_dayOfWeek"></Date>
    <div class="Box">
        <!-- <img src = "@/assets/img/default.jpg"> -->
        <div class="Clock">{{ clock }}</div>
        <div class="Month">{{ month }}</div>
        <div class="Day">{{ day }}</div>
        <div class="DayOfWeek">{{ dayOfWeek }}</div>
        <div class="Text">{{ text }}</div>
    </div>
</template>

<script>
import Clock from '../components/Clock.vue';
import Date from '../components/Date.vue';

export default {
    data: function () {
        return {
            clock: "00:00",
            month: "January",
            day: "00",
            dayOfWeek: "Sunday",
            text: "test message",
        }
    },
    components: {
        Clock,
        Date
    },
    methods: {
        receive_clock (clock) {
            this.clock = clock;
        },
        receive_month (month) {
            this.month = month;
        },
        receive_day (day) {
            this.day = day;
        },
        receive_dayOfWeek (dayOfWeek) {
            this.dayOfWeek = dayOfWeek;
        }
    }
}
</script>

<style>
    .Clock{
        position: absolute;
        top: -5em;
        left: 2em;
        font-size: 5em;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: #F2F1DF;;
    }
    .Day{
        position: absolute;
        top: -1em;
        left: 0.5em;
        font-size: 25em;
        letter-spacing: 0em;
        opacity: 0.8;
        /* 参考：https://marie-web.design/blog/text-gradation/ */
        background: linear-gradient(180deg, #F2D399 50%, rgba(217, 217, 217, 0) 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: #F2D399;
    }
    .Month{
        z-index: 1;
        position: absolute;
        top: -0.5em;
        left: 5em;
        font-size: 4em;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: #F2F1DF;;
    }
    .DayOfWeek{
        position: absolute;
        top: 1em;
        left: 1.5em;
        font-size: 4em;
        transform: rotate(-90deg);
        letter-spacing: 20px;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: #F2F1DF;;
    }
    .Text{
        position: absolute;
        top: 700px;
        left: 500px;
        font-size: 40px;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: #F2F1DF;;
    }
</style>