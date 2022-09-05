<template>
    <div id="weather">
        <p>area: {{ area }}</p>
        <p>weather_code: {{ weather_code }}</p>
        <p>weather_img: {{ weather_img }}</p>
        <img :src="require(`@/assets/weather_img/${weather_img}`)"/>
        <p>error: {{error_message}}</p>
    </div>
</template>

<script>
import weather_code_list from '../assets/weather_code.json'
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

export default ({
    data: function () {
        return {
            area: "東京地方",
            weather_code: "100",
            weather_img: "100.svg",
            error_message: "No error has found.",
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
                    this.area = weather[0].timeSeries[0].areas[0].area.name;
                    this.weather_code = weather[0].timeSeries[0].areas[0].weatherCodes[0];
                    this.weather_img = weather_code_list[String(this.weather_code)][1]
                })
                .catch((error) => {
                    console.log(error)
                    this.error_message = error
                });
        }
    }
})
</script>
