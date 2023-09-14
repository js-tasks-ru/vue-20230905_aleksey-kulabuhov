import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
    template :'<button @click="handleClick" type="button">{{num}}</button>',
    data() {
        return {
            num : 0,
        }
    },
    methods: {
        handleClick() {
            this.num++;
        }
    }    

}).mount('#app');