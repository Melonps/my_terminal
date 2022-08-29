<template>
    <div id="clock">
        <button id="btn1" v-on:click="countUp" class="ui teal button">実行</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        countUp: function() {
            // dataオプションで定義したcuontにアクセス
            return this.count++
        } 
    }
}
</script>


