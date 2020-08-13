import itemOverlay from './ItemOverlay'

const productsView = {
    // props: {
    //     items: Array
    // },
    components: {
        'item-overlay': itemOverlay
    },
    data() {
        return {
            currentCategory: 'all',
            maxItems: 12,
            items: this.$root.itemList,
        }
    },
    template: 
        `<main>
        <div class="contacts padding-site">
            <div class="contacts-header-title">
                <h2>Our Products</h2>
            </div>
        </div>
        <div class="products-range padding-site">
            <div class="feature-menu-wrapper clearfix">
                <ul class="products-range-menu">
                    <li v-for="category in categoriesList" class="products-range-list" @click="setCategory(category)">
                        <div :class="classPerCategory(category)">{{category}}</div>
                    </li>
                </ul>
            </div>
            <div class="product-range-panels">
                <div v-for="item in filtered" class="panel-medium">
                    <img :src="item.img">
                    <item-overlay :item="item"></item-overlay>
                </div>
            </div>
        </div>
        </main>`,
    methods: {
        classPerCategory(cat) {
            let classes = "products-range-link";
            if (cat === this.currentCategory) {
                classes += " products-range-link-active"
            }
            return classes;
        },
        setCategory(cat) {
            if (cat !== this.currentCategory) {
                this.currentCategory = cat
            }
        }
    },
    computed: {
        categoriesList() {
            let arr = [...new Set(this.items.map(item => item.category))];
            arr.unshift('all');
            return arr;
        },
        filtered() {
            let arr;
            if (this.currentCategory === 'all') {
                arr = this.items;
            } else {
                arr = this.items.filter(item => item.category === this.currentCategory);
            }
            return arr.slice(0, this.maxItems);
        }
    },
};

export default productsView;