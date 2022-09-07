<template>
    <button type="button" class="btn btn-outline-primary" v-on:click="save">Primary</button>
    <p>タイトルを入力してください</p>
    <div><input type="text" class="form-control-lg" v-model="title"/></div>
    <p>内容を入力してください</p>
    <div><textarea class="form-control" v-model="content"></textarea></div>
    <p>{{title}}</p>
    <div class="home">
        <p>メモ一覧</p>
        <ui v-if="hasMemos">
            <li v-for="memo in memos" :key="memo.id">
                {{memo.title}}
            </li>
        </ui>
        <p v-else>メモはありません</p>
    </div>
</template>

<script>

export default {
    name: 'MemoForm',
    data() {
        return {
            title: '',
            content:''
        }
    },
    methods: {
        save() {
            let memo = {
                title: this.title,
                content: this.content
            }
            this.$store.commit('save', memo)
        },
        
    },
    computed: {
        memos() {
            return this.$store.state.memos
        },
        hasMemos() {
            return this.$store.state.memos.length
        }
    }
}


</script>
