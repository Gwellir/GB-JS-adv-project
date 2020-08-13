import itemOverlay from "./ItemOverlay";

const featuredPanels = {
    template: 
    `<div class="featured-new padding-site">
        <div class="feature-menu-wrapper clearfix">
            <ul class="featured-menu">
                <li class="featured-list"><a href="#" class="featured-link featured-link-active">Featured</a></li>
                <li class="featured-list"><a href="#" class="featured-link">New</a></li>
            </ul>
            <router-link to="/products" class="explore-link">Explore all <img class="text-arrow" src="img/arrow.svg" alt=""></router-link>
        </div>
        <div class="featured-panels">
            <div v-for="item in feat_list" class="panel-small featured">
                <img :src="item.img">
                <item-overlay :item="item"></item-overlay>
            </div>
        </div>
    </div>`,
    components: {
        'item-overlay': itemOverlay
    },
    props: {
        items: Array
    },
    data() {
        return {
            maxItems: 4,
        }
    },
    methods: {
        showOverlay() {}
    },
    computed: {
        feat_list() {
            return this.items
                .filter(item => item.type === "featured")
                .slice(0, this.maxItems);
        }
    }
};

export default featuredPanels;
