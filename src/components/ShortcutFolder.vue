<template>
    <div id="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <div v-for="info of linkdata.group1" v-bind:key="info">
                <img src="http://www.google.com/s2/favicons?domain= + info.url" alt="test"/>
                <a :href="info.url" class="link-primary">{{info.name}}</a>
            </div>
        </ul>
    </div>
</template>

<script>
import shortcut from '../assets/user_data/shortcut.json';
    console.log(shortcut);
    export default {
        data() {
            return {
                linkdata:shortcut.Groups,
            };
        }
    };
</script>

<style scoped>
</style>