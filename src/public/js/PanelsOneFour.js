import itemOverlay from "./ItemOverlay";

const panelsOneFour = {
    template: 
    `<div class="large-4-small padding-site">
        <div v-if="largeImage" class="panel-large">
            <div class="panel-text">
                <p class="panel-exclusive">{{largeImage.type}}</p>
                <h2 class="panel-h2">{{largeImage.name}}</h2>
                <p class="panel-content">{{largeImage.desc}}</p>
                <router-link :to="$root.makeProductLink(largeImage)" class="button">{{$root.orderLabelText}} <img class="text-arrow" src="img/arrow.svg" alt=""></router-link>
                <img :src="largeImage.img">
            </div>  
        </div><div class="panel-2x2">
            <div v-for="item in itemsList" class="panel-small">
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
            maxItems: 4
        }
    },
    methods: {

    },
    computed: {
        largeImage() {
            let arr = this.items.filter(item => item.type === "exclusive");
            let selected = arr[Math.floor(arr.length * Math.random())];
            return selected;
        },
        itemsList() {
            let usableItems = this.items
                .filter(item => (item.type !== "exclusive" && item.type !== "hot deal"))
            let startEl = Math.floor((usableItems.length - this.maxItems) * Math.random());
            return usableItems.slice(startEl, startEl + this.maxItems);
        }
    }
};

export default panelsOneFour;