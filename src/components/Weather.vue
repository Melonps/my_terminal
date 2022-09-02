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
            data:"test",
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
                    this.data = weather[0];
                });
        }
    }
    
})
</script>
