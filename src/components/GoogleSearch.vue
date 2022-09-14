<template>
    <form class="form-inline" onsubmit="return false" >
        <div class="form-group">
            <input ref="input"
            title="Google Search"
            v-on:keyup.enter = "search(textInput)"
            v-model = "textInput"
            type="text"
            class="form-control"
            id="inputSearch"
            aria-describedby="google-search"
            placeholder="Google Search"
            >
            <button type="button" class="btn btn-primary" v-on:click="search(textInput)">
                Search
            </button>
        </div>
    </form>
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
