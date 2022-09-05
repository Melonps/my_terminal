<template>
    <button type="button" class="btn btn-outline-primary" v-on:click="save">Primary</button>
    <div><input type="text" v-model="title"/></div>
    <div><textarea v-model="content"></textarea></div>
    <p>{{title}}</p>
</template>

<script>

export default {
    name: 'MemoForm',
    data() {
        return {
            title: 'no',
            content:'noo'
        }
    },
    methods: {
        save() {
            let memo = {
                title: this.title,
                content: this.content
            }
            this.$store.commit('save', memo)
        }
    }
}


</script>
