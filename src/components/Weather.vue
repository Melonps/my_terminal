<template>
    <div id="weather">
        <!-- <p>{{area_code[String(this.location)]}}</p> -->
        <img :src="require(`@/assets/weather_img/${weather_img}`)"/>
        <p>最低気温：{{ temps_min }}℃</p>
        <p>最高気温：{{ temps_max }}℃</p>
        <p>error: {{error_message}}</p>
    </div>
</template>

<script>
import weather_code_list from '../assets/weather_code.json'
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

export default {
    props: ["location"],
    data: function () {
        return {
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
            weather_code: "100",
            weather_img: "100.svg",
            temps_min: "0",
            temps_max: "0",
            error_message: "No error has found.",
        }
    },
    created() {
        this.weather_api()
    },
    methods: {
        receive_clock (clock) {
            this.clock = clock
        },
        weather_api: function () {
            fetch(url) 
                .then((response) =>{
                    return response.json();
                })
                .then((weather) => {
                    this.weather_code = weather[0].timeSeries[0].areas[0].weatherCodes[1];
                    this.weather_img = weather_code_list[String(this.weather_code)][0]
                    this.temps_min = weather[0].timeSeries[2].areas[0].temps[0]
                    this.temps_max = weather[0].timeSeries[2].areas[0].temps[1]
                })
                .catch((error) => {
                    console.log(error)
                    this.error_message = error
                });
        }
    }
}
</script>
