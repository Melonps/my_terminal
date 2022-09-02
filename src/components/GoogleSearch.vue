<template>
    <div id="gsearch">
        <input ref="input"
            title="Site Search"
            v-on:keyup.enter = "search(textInput)"
            v-model = "textInput" />
        <button @click="search(textInput)">
            Search
        </button>
    </div>
</template>

<script>
export default {
    props: [
        'site'
    ],
    data() {
        return {
            textInput: ''
        }
    },
    methods: {
        search(str) {
            if (str) {
                window.open([
                    'https://www.google.com/search?q=',
                    this.site ? 'site:' + this.site + '+' : '',
                    encodeURIComponent(str)
                ].join(''));
            } else {
                this.$refs.input.focus();
            }
        }
    }
}
</script>
