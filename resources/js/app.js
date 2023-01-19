import './bootstrap';
import {createApp} from 'vue'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from '../vue/App.vue'

createApp(App).use(Antd).mount("#app")
