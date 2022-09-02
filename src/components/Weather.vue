<template>
    <div id="weather">
        <p>{{ data }}</p>
    </div>
</template>

<script>
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

export default ({
    data: function () {
        return {
            data:"",
        }
    },
    created() {
        this.weather_api()
    },
    methods: {
        weather_api: function () {
            fetch(url) 
                .then(function(response) {
                    return response.json();
                })
                .then(function(weather) {
                    console.log(weather);
                    console.log(weather[0]);
                    this.data = weather[0].timeSeries[0];
                });
        }
    }
    
})
</script>
