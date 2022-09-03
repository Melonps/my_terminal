<template>
    <div v-for="(value, key) in userData" :key="key">
        <p> {{value}} </p>
    </div>

    <div>
        <img :src="require(`@/assets/img/${userData.background_image}.jpg`)"/>
        <p>{{userData}}</p>
    </div>
    <form>
        <h2>Update JSON</h2>
        <div class="mb-3">
            <label for="inputUserName" class="form-label">User Name</label>
            <input v-model="userData.username" type="text" class="form-control" id="inputUserName">
        </div>
        <div class="mb-3">
            <label for="inputUserLocation" class="form-label">Location</label>
            <input v-model="userData.location" type="text" class="form-control" id="inputUserLocation">
        </div>
        <button type="button" class="btn btn-primary" v-on:click="updateData">
            Update
        </button>
    </form>
</template>

<script>
    const fs = require('browserify-fs');
    import userData from '../assets/user_data/data.json'
    console.log(userData)
    
    export default {
        mounted: () => {
            let userNameField = document.querySelector('#inputUserName');
            userNameField.placeholder = userData.username
            let userLocationField = document.querySelector('#inputUserLocation');
            userLocationField.placeholder = userData.location
        },
        data: () => ({
            userData: userData,
        }),
        methods: {
            writeJSON: (newData) => {
                fs.writeFile('../assets/user_data/data.json', JSON.stringify(newData), 'utf8', (err, data) => {
                    if (data) {
                        console.log(JSON.parse(data))
                        // ここに書き込み処理を記述
                        console.log("JSON file has been saved.");
                    } else {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                })
            },
            updateData: function () {
                const stringifiedData = JSON.stringify(this.userData)
                console.log(stringifiedData)
                this.writeJSON(stringifiedData)
            },
        },
    }; 
</script>