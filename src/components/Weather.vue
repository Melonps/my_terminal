<template>
    <div id="weather">
        <p>{{ data }}</p>
        <p>{{ area }}</p>
        <p>{{ code }}</p>
        <p>{{ weather_code }}</p>
        <img :src="require(`@/assets/weather_img/${weather_code}`)"/>
    </div>
</template>

<script>
import weather_code from '../assets/weather_code.json'
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

export default ({
    data: function () {
        return {
            data: "",
            area: "",
            code: "",
            weather_code: weather_code,
        }
    },
    created() {
        this.weather_api()
    },
    methods: {
        weather_api: function () {
            fetch(url) 
                .then((response) =>{
                    return response.json();
                })
                .then((weather) => {
                    // this.data = weather[0];
                    this.area = weather[0].timeSeries[0].areas[0].area.name;
                    this.code = weather[0].timeSeries[0].areas[0].weatherCodes[0];
                    this.weather_code = weather_code[String(this.code)][1]
                });
        }
    }
})
</script>
