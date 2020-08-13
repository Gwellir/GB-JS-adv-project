import itemOverlay from "./ItemOverlay";

const featuredPanels = {
    template: 
    `<div class="featured-panels">
    <div v-for="item in feat_list" class="panel-small featured">
        <img :src="item.img">
        <item-overlay :item="item"></item-overlay>
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
