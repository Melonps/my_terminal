<template>
  <div>
    <h2>Select location</h2>
    <select id="pref" class="form-select-sm" aria-label=".form-select-sm example" v-model="selected_location">
      <option disabled value="">都道府県を選択</option>
      <option v-for="item in prefs" v-bind:key="item.id">{{item.name}}</option>
    </select>
    <p>選択された都道府県: {{selected_location}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        prefs: [
          { id: "1", name: "Hokkaido" },
          { id: "2", name: "Aomori" },
          { id: "3", name: "Iwate" },
          { id: "4", name: "Miyagi" },
          { id: "5", name: "Akita" },
          { id: "6", name: "Yamagata" },
          { id: "7", name: "Fukushima" },
          { id: "8", name: "Ibaraki" },
          { id: "9", name: "Tochigi" },
          { id: "10", name: "Gunma" },
          { id: "11", name: "Saitama" },
          { id: "12", name: "Chiba" },
          { id: "13", name: "Tokyo" },
          { id: "14", name: "Kanagawa" },
          { id: "15", name: "Niigata" },
          { id: "16", name: "Toyama" },
          { id: "17", name: "Ishikawa" },
          { id: "18", name: "Fukui" },
          { id: "19", name: "Yamanashi" },
          { id: "20", name: "Nagano" },
          { id: "21", name: "Gifu" },
          { id: "22", name: "Shizuoka" },
          { id: "23", name: "Aichi" },
          { id: "24", name: "Mie" },
          { id: "25", name: "Shiga" },
          { id: "26", name: "Kyoto" },
          { id: "27", name: "Osaka" },
          { id: "28", name: "Hyogo" },
          { id: "29", name: "Nara" },
          { id: "30", name: "Wakayama" },
          { id: "31", name: "Tottori" },
          { id: "32", name: "Shimane" },
          { id: "33", name: "Okayama" },
          { id: "34", name: "Hiroshima" },
          { id: "35", name: "Yamaguchi" },
          { id: "36", name: "Tokushima" },
          { id: "37", name: "Kagawa" },
          { id: "38", name: "Ehime" },
          { id: "39", name: "Kochi" },
          { id: "40", name: "Fukuoka" },
          { id: "41", name: "Saga" },
          { id: "42", name: "Nagasaki" },
          { id: "43", name: "Kumamoto" },
          { id: "44", name: "Oita" },
          { id: "45", name: "Miyazaki" },
          { id: "46", name: "Kagoshima" },
          { id: "47", name: "Okinawa" },
        ],
        selected_location: '',
      }
    },
  };
</script>