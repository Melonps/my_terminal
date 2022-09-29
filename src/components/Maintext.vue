<template>
    <Clock v-on:send_clock="receive_clock"></Clock>
    <Date v-on:send_month="receive_month"></Date>
    <Date v-on:send_day="receive_day"></Date>
    <Date v-on:send_dayOfWeek="receive_dayOfWeek"></Date>
    <div class="Box">
        <div class="Clock">{{ clock }}</div>
        <div class="Month">{{ month }}</div>
        <div class="Day">{{ day }}</div>
        <div class="DayOfWeek">{{ dayOfWeek }}</div>
        <div class="Text">Actual Weather in {{ location }}<br/>is cloudy, and 20°<br/> 
        with humidity 74% and wind speed 2m/s<br/>
        Good morning, {{ username }}<br/>
        I hope you slept well<br/>
        </div>
    </div>
</template>

<script>
import Clock from '../components/Clock.vue';
import Date from '../components/Date.vue';
import store from '../store';

export default {
    data: function () {
        return {
            clock: "00:00",
            month: "January",
            day: "00",
            dayOfWeek: "Sunday",
            username: "Username",
            location: "Osaka",
        }
    },
    created() {
        this.get_user()
    },
    components: {
        Clock,
        Date,
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
        },
        get_user: function () {
            this.username = store.getters.get_username;
            this.location = store.getters.get_location;
        }
    }
}
</script>

<style>
    .Clock{
        user-select: none;
        position: absolute;
        top: -22rem;
        left: 2em;
        font-size: 5em;
        font-family: "BEBAS_reg";
        color: #F2F1DF;;
    }
    .Day{
        user-select: none;
        position: absolute;
        top: -0.89em;
        left: 14.5rem;
        font-size: 24rem;
        letter-spacing: -0.005em;
        text-align: center;
        /* 参考：https://marie-web.design/blog/text-gradation/ */
        background: linear-gradient(180deg, #F2D399 40%, rgba(217, 217, 217, 0) 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "BEBAS_reg";
        color: #F2D399;
    }
    .Month{
        user-select: none;
        z-index: 1;
        position: absolute;
        top: -0.5em;
        left: 19rem;
        text-align: center;
        font-size: 2.5rem;
        font-family: "BEBAS_bld";
        letter-spacing: 0.225em;
        color: #F2F1DF;
    }
    .DayOfWeek{
        user-select: none;
        position: absolute;
        top: 0.5em;
        left: 8rem;
        font-size: 2.5rem;
        transform: rotate(-90deg);
        letter-spacing: 20px;
        font-family: "BEBAS_bld";
        color: #F2F1DF;
    }
    .Text{
        user-select: none;
        position: absolute;
        top: 3rem;
        left: 19rem;
        font-size: 1.2rem;
        text-align: left;
        font-family: "Moon";
        color:#F2F1DF;
    }
</style>