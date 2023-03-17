<template>
    <div class="box">
        
        <div v-show="isShow">
            <div class="d-flex flex-wrap" >
                <div v-for="(info, idx) in userSettingsState" v-bind:key="info">
                    <div class="icon-group">
                        <button type="button" class="btn btn-outline-light icon" @click="getCreateUrl(info.url)">
                            <img v-bind:src="`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${info.url}https://ameblo.jp/staff/&size=64`" alt="test" class="icon_shortcut"/>
                            <div class=" text-truncate">
                                <p>{{info.title}}</p>
                            </div>
                        </button>
                        <div class="btn-group dropend">
                            <a class="edit-button dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <font-awesome-icon icon="fa-solid fa-bars" />
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><button class="dropdown-item" @click="remove(info, idx)">delete</button></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <button type="button" class="btn btn-outline-dark icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-outline-info" @click="viewChange()">
        <font-awesome-icon icon="fa-solid fa-house" />
    </button>

    <!--ここから先はショートカット追加を押すと現れるモーダル-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ショートカットの編集</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!--タイトル追加-->
                    <div class="input-group mb-3">
                        <input type="text" v-model="new_title" class="form-control" placeholder="title" aria-label="title"
                            aria-describedby="basic-addon2">
                    </div>
                    <!--url追加-->
                    <div class="input-group mb-3">
                        <input type="text"  v-model="new_url" class="form-control" placeholder="url" aria-label="url" aria-describedby="basic-addon2">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" >Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addShortcut(new_title, new_url);">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isShow: false,
        }
    },
    computed: {
        userSettingsState: function () {
            return this.$store.state.shortcut;
        },
        get_shortcut_num: function () {
            return this.$store.state.get_num_shortcut;
        }
    },
    methods: {
        getCreateUrl(url) {
            window.open(`${url}`);
        },
        viewChange() {
            this.isShow = !this.isShow;
        },
        //マップオブジェクトとして、ショートカットの追加。ここまで動作チェック済み。
        addShortcut (new_title, new_url) {
            const obj = {};
            obj["title"] = new_title;
            obj["url"] = new_url;
            this.$store.state.shortcut.push(obj)
            console.log(obj);
            this.$store.commit('update');
            new_title = "";
            new_url = "";

        },
        remove(id, idx) {
            console.log(id);
            console.log(idx);
            id = null;
            this.$store.state.shortcut.splice(idx, 1);
            this.$store.commit('update');
        },
        
    },

};

</script>

<style scoped>
/*全体の場所*/
.box {
    position: absolute;
    left: 50%;
    bottom: 90%;
    width: 50%;
    margin: 0 0 0 auto;
}

.icon_shortcut{
    width: 2rem;
}
.dropdown-toggle::after {
    display: none;
}

.btn-group {
    position: relative;
    right: 1.5rem;
    top: 1.5rem;
}

.btn-outline-primary {
    padding: 40%;
}

/*ショートカット表示、非表示切り替え*/
.btn-outline-light{
    font-size: 0.8rem;
    
}

.btn-outline-info{
    position: absolute;
    right: 0;
    bottom: 0;
}


.icon{
    width: 5rem;
    background-color: rgba(255, 255, 255, 0.1); /* 背景色 */
    border: 1px solid rgba(255, 255, 255, 0.4); /* ボーダー */
    border-right-color: rgba(255, 255, 255, 0.2);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    -webkit-backdrop-filter: blur(10px); /* ぼかしエフェクト */
    backdrop-filter: blur(5px);
    box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5);
}

.icon-group{

}

</style>
