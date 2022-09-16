<template>
    <Clock v-on:send_clock="receive_clock"></Clock>
    <Date v-on:send_month="receive_month"></Date>
    <Date v-on:send_day="receive_day"></Date>
    <Date v-on:send_dayOfWeek="receive_dayOfWeek"></Date>
    <div class="Box">
        <img src = "@/assets/img/default.jpg">
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
    .Box{
        position: relative;
    }
    .Clock{
        position: absolute;
        top: 80px;
        left: 250px;
        font-size: 120px;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: white;
    }
    .Day{
        position: absolute;
        top: 80px;
        left: 280px;
        font-size: 600px;
        opacity: 0.7;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: rgb(243, 228, 140);
    }
    .Month{
        position: absolute;
        top: 550px;
        left: 500px;
        font-size: 100px;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: white;
    }
    .DayOfWeek{
        position: absolute;
        top: 660px;
        left: 300px;
        font-size: 60px;
        transform: rotate(-90deg);
        letter-spacing: 20px;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: white;
    }
    .Text{
        position: absolute;
        top: 700px;
        left: 500px;
        font-size: 40px;
        font-family: "Meiryo UI", "Hiragino Sans", "Yu Gothic UI", "MS PGothic", "Hiragino Kaku Gothic ProN", sans-serif;
        color: white;
    }
</style>