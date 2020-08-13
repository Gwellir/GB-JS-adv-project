const searchRow = {
    props: ['searchItem'],
    template: `
                <router-link :to="$root.makeProductLink(searchItem)" class="search-link">
                <div class="cart-item">
                    <div class="product-bio">
                        <img class="search-image" :src="searchItem.img" alt="Some image">
                        <div class="search-desc">
                            <p class="search-title">{{searchItem.name}}</p>
                            <p class="search-desc">{{searchItem.desc}}</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{searchItem.price}}₽</p>
                    </div>
                </div>
                </router-link>`
};

const search = {
    components: { 
        'search-row': searchRow
    },
    data(){
      return {
          query: "",
          displaySearch: false,
      }
    },
    methods: {

    },
    computed: {
        filtered() {
            if (this.query.length < 3) {
                return [];
            } else {
                let res = this.$root.itemList
                    .filter(item => item.name.toLowerCase().includes(this.query.toLowerCase()));
                console.log(res);
                return res;
            }
        }
    },
    template: `
        <div>
            <div class="cart-block" v-show="displaySearch">
                <input v-model="query" class="search-field" placeholder="Input at least 3 symbols..."></input>
                <p v-if="!filtered.length">Nothing here!</p>
                <search-row
                v-for="item of filtered" 
                :key="item.id"
                :search-item="item"> 
                </search-row>
            </div>
        </div>`
};

export default search;
