<template>
  <div>
    <h2>Get location</h2>
    <button type="submit" class="btn btn-primary" v-on:click="getLocation">
      Get current location
    </button>
    <p>latitidue: {{latitude}}, longitude: {{longitude}}</p>
    <p>prefecture: {{prefecture}}</p>
    <p>city: {{city}}</p>
  </div>
</template>

<script>
  // 参考: https://note.com/tana_d/n/nce5ce09e55bd

  export default {
    data() {
      return {
        latitude: 0,//34.3617377,
        longitude: 0,//132.3696928,
        prefecture: '',
        city: '',
      }
    },
    methods: {
      getLocation: function() {
        if (!navigator.geolocation) {
          alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
          return
        }

        const options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0
        }

        let getCurrentPosition = (options) => {
          return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(resolve, this.error, options);
          })
        }

        getCurrentPosition(options)
          .then((position) => {
            console.log("HELLO")
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
          })
          .then(() => {
            // 現在地の都道府県・市区を取得
            fetch(`http://geoapi.heartrails.com/api/json?method=searchByGeoLocation&x=${this.longitude}&y=${this.latitude}`)
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                this.prefecture = data.response.location[0].prefecture
                this.city = data.response.location[0].city
              }) 
              .catch((error) => {
                console.log(error)
              })
          })
      },

      success (position) {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
      },

      error (error) {
        switch (error.code) {
          case 1: //PERMISSION_DENIED
            alert('位置情報の利用が許可されていません')
          break
        case 2: //POSITION_UNAVAILABLE
          alert('現在位置が取得できませんでした')
          break
        case 3: //TIMEOUT
          alert('タイムアウトになりました')
          break
        default:
          alert('現在位置が取得できませんでした')
          break
        }
      },
    },
  };
</script>