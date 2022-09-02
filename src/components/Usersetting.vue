<template>
    <div v-for="(value, key) in datas" :key="key">
        <p> {{value}} </p>
    </div>
    
    <div>
        <img :src="require(`@/assets/img/${image_name}.jpg`)"/>
        <p>{{datas}}</p>
    </div>
</template>

<script>
    import userdata from '../assets/user_data/data.json';
    console.log(userdata);
    export default {
        data() {
            return {
                datas: userdata,
                image_name:userdata.background_image
            };
        }
    };
</script>