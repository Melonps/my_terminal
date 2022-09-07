<template>
    <h1>メモ入力画面</h1>
    <button type="button" class="btn btn-outline-primary" v-on:click="save">Primary</button>
    <p>タイトルを入力してください</p>
    <div><input type="text" class="form-control-lg" v-model="title"/></div>
    <p>内容を入力してください</p>
    <div><textarea class="form-control" v-model="content"></textarea></div>
    <div class="home">
        <h1>メモ一覧からインデックスを指定してメモの値を所得</h1>
        <p>メモ一覧</p>
        <ui v-if="hasMemos">
            <li v-for="(memo, index) in memos" :key="memo.id">
                {{memo.id}} {{memo.title}}
                <button type="button" class="btn btn-outline-warning" v-on:click="sendindex(index)">show1</button>
                <p>vuexに保存されているindexは{{index}}</p>
            </li>
            
        </ui>
        <p v-else>メモはありません</p>
    </div>
    <div>
        <h1>フォームで数値指定してそのメモの値を所得</h1>
        <input type="number" class="form-control-lg" v-model="selected_id"/>
        <button type="button" class="btn btn-outline-warning" v-on:click="selectindex">show2</button>
        <h1>結果表示</h1>
        <p>{{show_id}}</p>
        <p>{{selected_memo}}</p>
    </div>
    

</template>

<script>

export default {
    name: 'MemoForm',
    data() {
        return {
            title: '',
            content: '',
            show_id: 'none'
        }
    },
    methods: {
        save() {
            //メモの内容をセーブする関数
            //memoにtitleとcontentをいれ、それをsaveにコミットして保存
            let memo = {
                title: this.title,
                content: this.content
            }
            this.$store.commit('save', memo)
        },
        selectindex() {
            this.show_id = this.selected_id
        },
        sendindex(index) {
            this.show_id =  this.$store.getters.getMemoById(index)
        }
    },
    computed: {
        memos() {
            return this.$store.state.memos
        },
        hasMemos() {
            return this.$store.getters.getCount
        },
        selected_memo() {
            let ids = this.$store.getters.getMemoById(this.s_id)
            return this.$store.state.memos[ids]
        }
    }
}


</script>
