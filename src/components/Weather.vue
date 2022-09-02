<template>
    <div id="weather">
        <p>{{ data }}</p>
    </div>
</template>

<script>
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
let data;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);
        console.log(weather[0]);
        data = weather[0].publishingOffice;
        console.log(data);
    });


export default ({
    data: function () {
        return {
            data:"test"
        }
    },
    
})
</script>
