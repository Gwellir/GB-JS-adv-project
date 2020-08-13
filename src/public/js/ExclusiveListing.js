const exclusiveListing = {
    template: 
    `<div class="exclusive">
        <div v-for="promo in promo_list" class="exclusive-column padding-two-columns">
            <div class="panel-text">
                <img :class="promo.class" :src="promo.img">
                <p class="panel-exclusive">{{promo.type}}</p>
                <h2 class="panel-h2">{{promo.name}}</h2>
                <p class="panel-content">{{promo.desc}}</p>
                <router-link :to="$root.makeProductLink(promo)" class="button">{{$root.orderLabelText}} <img class="text-arrow" src="img/arrow.svg" alt=""></router-link>
            </div>
        </div>
    </div>`,
    data() {
        return {
            maxItems: 2
        }
    },
    props: {
        items: Array
    },
    computed: {
        promo_list() {
            return this.items
                .filter(item => item.type === "exclusive")
                .slice(0, this.maxItems);
        },
    }
};

export default exclusiveListing;