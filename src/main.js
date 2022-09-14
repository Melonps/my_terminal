import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fas, fab, far)

/* Firebaseを初期化するためにimport */
import { firebase } from './plugins/firebase'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router, firebase)
    .use(store)
    .mount("#app");
