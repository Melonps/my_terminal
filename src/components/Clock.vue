<template>
    <div id="clock">
        <p>{{ clock }}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            clock:"00:00:00"
        }
    },
    created() {
        this.tick();
    },
    methods: {
        tick: function() {
            // dataオプションで定義したcuontにアクセス
            const date = new Date();  // Dateオブジェクトを作る
			let h = date.getHours();  // 時
			let m = date.getMinutes();// 分

            if(h < 10) h = "0" + h;   // 10未満であれば頭に0を付ける
			if(m < 10) m = "0" + m;
            this.clock = h + ":" + m;
            
            setTimeout(() => {
                this.countUp();
            }, 1000);
        } 
    }
}
</script>


