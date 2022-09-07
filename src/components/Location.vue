<template>
  <div>
    <h2>Get location</h2>
    <button type="submit" class="btn btn-primary" v-on:click="getLocation">
      Get current location
    </button>
    <p>latitidue: {{latitude}}, longitude: {{longitude}}</p>
    <p>prefecture: {{prefecture}}</p>
    <p>city: {{city}}</p>

    <h2>Select location</h2>
    <select id="pref" class="form-select-sm" aria-label=".form-select-sm example" v-model="selected_location">
      <option selected>都道府県を選択</option>
      <option v-for="pref in prefs" v-bind:key="pref.id">{{pref.name}}</option>
    </select>
    <p>{{selected_location}}</p>
  </div>
</template>

<script>
  // 参考: https://note.com/tana_d/n/nce5ce09e55bd

  const  prefs= [
    { id: "1", name: "北海道" },
    { id: "2", name: "青森県" },
    { id: "3", name: "岩手県" },
    { id: "4", name: "宮城県" },
    { id: "5", name: "秋田県" },
    { id: "6", name: "山形県" },
    { id: "7", name: "福島県" },
    { id: "8", name: "茨城県" },
    { id: "9", name: "栃木県" },
    { id: "10", name: "群馬県" },
    { id: "11", name: "埼玉県" },
    { id: "12", name: "千葉県" },
    { id: "13", name: "東京都" },
    { id: "14", name: "神奈川県" },
    { id: "15", name: "新潟県" },
    { id: "16", name: "富山県" },
    { id: "17", name: "石川県" },
    { id: "18", name: "福井県" },
    { id: "19", name: "山梨県" },
    { id: "20", name: "長野県" },
    { id: "21", name: "岐阜県" },
    { id: "22", name: "静岡県" },
    { id: "23", name: "愛知県" },
    { id: "24", name: "三重県" },
    { id: "25", name: "滋賀県" },
    { id: "26", name: "京都府" },
    { id: "27", name: "大阪府" },
    { id: "28", name: "兵庫県" },
    { id: "29", name: "奈良県" },
    { id: "30", name: "和歌山県" },
    { id: "31", name: "鳥取県" },
    { id: "32", name: "島根県" },
    { id: "33", name: "岡山県" },
    { id: "34", name: "広島県" },
    { id: "35", name: "山口県" },
    { id: "36", name: "徳島県" },
    { id: "37", name: "香川県" },
    { id: "38", name: "愛媛県" },
    { id: "39", name: "高知県" },
    { id: "40", name: "福岡県" },
    { id: "41", name: "佐賀県" },
    { id: "42", name: "長崎県" },
    { id: "43", name: "熊本県" },
    { id: "44", name: "大分県" },
    { id: "45", name: "宮崎県" },
    { id: "46", name: "鹿児島県" },
    { id: "47", name: "沖縄県" },
  ];

  export default {
    data() {
      return {
        latitude: 0,//34.3617377,
        longitude: 0,//132.3696928,
        prefecture: '',
        city: '',
        prefs: prefs,
        selected_location: '',
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