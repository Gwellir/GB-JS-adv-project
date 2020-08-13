const showProduct = {
    template: 
        `<div class="products-range padding-site">
            <div v-if="getProduct" class="product-hot-deal clearfix">
                <div class="panel-medium">
                    <img class='product-image' :src='getProduct.img'>
                </div>
                <div class="product-description clearfix">
                    <h3 class="big-bold">{{getProduct.name}}</h3>
                    <h3 class="red">{{getProduct.desc}}</h3>
                    <p class="price"> {{getProduct.price}} <span>rub</span></p>
                    <a @click="cartAdd(getProduct)" class="product-red-button">
                        confirm ></i>
                    </a>
                    <div class="product-description-text">
                        <p>{{getProduct.desc}}</p>
                    </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        }
    },
    methods: {
        cartAdd(item) {
            this.cartAPI.addProduct(item);
        }
    },   
    computed: {
        getProduct() {
            if (this.$root.itemList.length === 0) {
                return false;
            }
            return this.$root.itemList.find(item => item.id === +this.$route.params.id);
        },
    }
};

export default showProduct;