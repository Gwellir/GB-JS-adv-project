const topMenu = {
    template: `<ul class="menu">
        <li
            v-for="entry in entries"
            :key="entry.name"
            class="menu-list">
                <router-link
                    :to="entry.link"
                    :class="classPerLink(entry.link)">
                        <span>{{entry.name}}</span>
                </router-link>
        </li>
        <li class="menu-list"><div class="menu-link" @click="switchCart"><span>basket</span></div></li>
        <li class="menu-list"><div class="menu-link" @click="switchSearch"><img src="img/search.svg"></div></li>
    </ul>`,
    props: {
        current: String
    },
    data() {
        return {
            entries: [
                {
                    "name": "home",
                    "link": "/"
                },
                {
                    "name": "products",
                    "link": "/products"
                },
                {
                    "name": "contacts",
                    "link": "/contacts"
                },
            ],
        }
    },
    methods: {
        classPerLink(link) {
            let classes = "menu-link";
            if (link === this.current) {
                classes += " menu-link-active"
            }
            return classes;
        },
        switchCart() {
            this.$root.$refs.cart.displayCart = !this.$root.$refs.cart.displayCart;
            this.$root.$refs.search.displaySearch = false;
        },
        switchSearch() {
            this.$root.$refs.search.displaySearch = !this.$root.$refs.search.displaySearch;
            this.$root.$refs.cart.displayCart = false;
        }
    },
    computed: {

    },
};

export default topMenu;