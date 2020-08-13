import itemOverlay from "./ItemOverlay";

const featuredPanels = {
    template: 
    `<div class="featured-new padding-site">
        <div class="feature-menu-wrapper clearfix">
            <ul class="featured-menu">
                <li v-for="mode in modes" @click="setMode(mode)" class="featured-list"><div :class="classPerCategory(mode)">{{mode}}</div></li>
            </ul>
            <router-link to="/products" class="explore-link">Explore all <img class="text-arrow" src="img/arrow.svg" alt=""></router-link>
        </div>
        <div class="featured-panels">
            <div v-for="item in filtered" class="panel-small featured">
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
            mode: 'Featured',
            modes: [
                'Featured',
                'New'
            ]
        }
    },
    methods: {
        classPerCategory(cat) {
            let classes = "featured-link";
            if (cat === this.mode) {
                classes += " featured-link-active"
            }
            return classes;
        },
        setMode(mode) {
            if (mode !== this.mode) {
                this.mode = mode
            }
        }
    },
    computed: {
        filtered() {
            if (this.mode === 'Featured') {
                return this.items
                    .filter(item => item.type === 'featured')
                    .slice(0, this.maxItems);
            } else if (this.mode === 'New') {
                return this.items.slice(this.items.length - this.maxItems, this.items.length);
            }
        }
    }
};

export default featuredPanels;
