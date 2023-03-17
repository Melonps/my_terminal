<template>
    <div class="gcse-search glass"></div>
</template>

<script>
export default {
    mounted: () => {
        /* 参考:
            https://www.ultra-noob.com/blog/2020/54/
            https://qiita.com/vent/items/0ce60beba453f4584a31
        */
        let gcseScriptElement = document.createElement('script')
        gcseScriptElement.type = 'text/javascript'
        gcseScriptElement.async = true
        gcseScriptElement.src = 'https://cse.google.com/cse.js?cx=23d49ee9affc4407f'
        let s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcseScriptElement, s);
    },
}
</script>

