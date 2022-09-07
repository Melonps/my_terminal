<template>
  <div>
    <button type="submit" class="btn btn-primary" v-on:click="getLocation">
      Get current location
    </button>
    <p>latitidue: {{latitude}}, longitude: {{longitude}}</p>
  </div>
</template>

<script>
  // 参考: https://note.com/tana_d/n/nce5ce09e55bd

  export default {
    data() {
      return {
        latitude: 0,
        longitude: 0
      }
    },
    methods: {
      getLocation() {
        if (!navigator.geolocation) {
          alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
          return
        }

        const options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0
        }

        navigator.geolocation.getCurrentPosition(this.success, this.error, options)
      },

      success(position) {
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
      }
    },
  };
</script>