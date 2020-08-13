import topMenu from './TopMenu'
import productsView from './ProductsView'
import showProduct from './ShowProduct'
import slider from './Slider'
import mainPage from './MainPage'
import cart from './CartComp'
import error from './ErrorComp'
import search from './Search'
import footerView from './Footer'
import contacts from './Contacts'

// import Vue from 'vue'
import VueRouter from 'vue-router'

// const VueRouter = require('vue-router');

Vue.use(VueRouter);

const routes = [
    { path: '/', component: mainPage },
    { path: '/products', component: productsView },
    { path: '/show/:id', component: showProduct },
    { path: '/contacts', component: contacts }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router: router,
    components: {
        'topmenu': topMenu,
        'slider': slider,
        error,
        cart,
        search,
        footerView
    },
    data: {
        orderLabelText: "order",
        itemList: [],
    },
    methods: {
        getData(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        postData(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putData(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteData(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        makeProductLink(item) {
            return `/show/${item.id}`;
        },
    },
    mounted() {
        this.getData('/api/products')
            .then(data => {
                for (let item of data) {
                    this.itemList.push(item);
                }
            });
    },
}).$mount('#app');

export default app;