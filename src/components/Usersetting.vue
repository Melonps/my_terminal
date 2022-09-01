<template>
    <!--
    <v-container>
        <table>
            <tr v-for="(value,key) in datas" :key="key">
                <td> {{ key }} </td>
                <td> {{ value}} </td>
                <td> {{ value[0]}} </td>
            </tr>
        </table>
    
    </v-container>
    -->
    <div v-for="(value, key) in datas" :key="key">
        <p> {{value}} </p>
    </div>
    
    <div>
        <img :src="image_link"/>
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
                image_link:userdata.background_image
            };
        }
    };
</script>