import itemOverlay from './ItemOverlay'

const trendingListing = {
    template:
    `<div class="trending-products padding-site">
        <div class="trending-wrapper clearfix">
            <h2 class="trending-h2">Trending products</h2>
            <router-link to="/products" class="explore-link">Explore all <img class="text-arrow" src="img/arrow.svg" alt=""></router-link>
        </div>
        <div class="trending-panels">
            <div v-for="item in trending_list" class="panel-medium trending">
                <img :class="item.class" :src="item.img">
                <item-overlay :item="item"></item-overlay>
            </div>
        </div>
    </div>`,
    components: {
        'item-overlay': itemOverlay
    },
    data() {
        return {
            maxItems: 6
        }
    },
    props: {
        items: Array
    },
    computed: {
        trending_list() {
            return this.items
                .filter(item => item.type === "trending")
                .slice(0, this.maxItems);
        }
    }
};

export default trendingListing;