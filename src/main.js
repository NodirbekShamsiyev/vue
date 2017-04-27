import Vue from 'vue'
import * as _ from "lodash";
/*import App from './App.vue'

 new Vue({
 el: '#app',
 render: h => h(App)
 });
 */

new Vue({
    el: '#app',
    data: {
        number: 0,
        cssData: ''
    },
    methods: {
        changeSomeData: function (color) {
            this.cssData = color;
        },
        changeNumber: _.debounce(function () {
            this.number++;
        }, 1000)
    },
    watch: {
        cssData: function (lastChange) {
            this.changeNumber();
        }
    }
});