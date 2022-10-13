<template>
    <div id="clock"></div>
</template>

<script>
export default {
    data: function () {
        return {
            clock: "00:00"
        };
    },
    created() {
        this.tick();
    },
    watch: {
        clock: function (clock) {
            this.$emit("send_clock", clock)
        }
    },
    methods: {
        tick: function () {
            // dataオプションで定義したcuontにアクセス
            const date = new Date(); // Dateオブジェクトを作る
            let hour = date.getHours(); // 時
            let mintutes = date.getMinutes(); // 分
            if (hour < 10)
                hour = "0" + hour; // 10未満であれば頭に0を付ける
            if (mintutes < 10)
                mintutes = "0" + mintutes;
            this.clock = hour + ":" + mintutes;
            setTimeout(() => {
                this.tick();
            }, 1000);
        }
    }
}
</script>


