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
        <div class="Text">Actual Weather in {{ location }}<br/>is 
        <img :src="require(`@/assets/weather_img/${weather_img}`)"/><br/>
        , and low is {{ temps_min }}°, high is {{temps_max}}°<br/> 
        <!-- with humidity 74% and wind speed 2m/s<br/> -->
        Good morning, <span class="h_light">{{ username }}</span><br/>
        I hope you slept well<br/>
        </div>
    </div>
</template>

<script>
import Clock from '../components/Clock.vue';
import Date from '../components/Date.vue';
import weather_code_list from '../assets/weather_code.json'

export default {
    data: function () {
        return {
            clock: "00:00",
            month: "January",
            day: "00",
            dayOfWeek: "Sunday",
            // 参照：https://zenn.dev/inoue2002/articles/2e07da8d0ca9ca
            area_code: { 
                "北海道": "011000",
                "青森県": "020000",
                "岩手県": "030000",
                "宮城県": "040000",
                "秋田県": "050000",
                "山形県": "060000",
                "福島県": "070000",
                "茨城県": "080000",
                "栃木県": "090000",
                "群馬県": "100000",
                "埼玉県": "110000",
                "千葉県": "120000",
                "東京都": "130000",
                "神奈川県": "140000",
                "新潟県": "150000",
                "富山県": "160000",
                "石川県": "170000",
                "福井県": "180000",
                "山梨県": "190000",
                "長野県": "200000",
                "岐阜県": "210000",
                "静岡県": "220000",
                "愛知県": "230000",
                "三重県": "240000",
                "滋賀県": "250000",
                "京都府": "260000",
                "大阪府": "270000",
                "兵庫県": "280000",
                "奈良県": "290000",
                "和歌山県": "300000",
                "鳥取県": "310000",
                "島根県": "320000",
                "岡山県": "330000",
                "広島県": "340000",
                "山口県": "350000",
                "徳島県": "360000",
                "香川県": "370000",
                "愛媛県": "380000",
                "高知県": "390000",
                "福岡県": "400000",
                "佐賀県": "410000",
                "長崎県": "420000",
                "熊本県": "430000",
                "大分県": "440000",
                "宮崎県": "450000",
                "鹿児島県": "460000",
                "沖縄県": "471000", 
            },
            url: "https://www.jma.go.jp/bosai/forecast/data/forecast/undefined.json",
            weather_code: "100",
            weather_img: "100.svg",
            temps_min: "0",
            temps_max: "0",
        }
    },
    computed: {
        location: function(){
            return this.$store.getters.get_location
        },
        username: function () {
            return this.$store.getters.get_username
        }
    },
    watch: {
        location: function (newVal, oldVal) {
            this.url = this.url.replace(String(this.area_code[String(oldVal)]), String(this.area_code[String(newVal)]))
        },
        url: function () {
            this.weather_api()
        }
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
        weather_api: function () {
            fetch(this.url) 
                .then((response) =>{
                    return response.json();
                })
                .then((weather) => {
                    this.weather_code = weather[0].timeSeries[0].areas[0].weatherCodes[1];
                    this.weather_img = weather_code_list[String(this.weather_code)][0]
                    this.temps_min = weather[0].timeSeries[2].areas[0].temps[0]
                    this.temps_max = weather[0].timeSeries[2].areas[0].temps[1]
                })
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
    .h_light {
        color:#F2D399
    }
</style>