const cartItem = {
    props: ['cartItem'],
    template: `
                <div class="cart-item">
                    <div class="product-bio">
                        <img :src="cartItem.img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{cartItem.name}}</p>
                            <p class="product-quantity">Amount: {{cartItem.quantity}}</p>
                            <p class="product-single-price">{{cartItem.price}}₽ per unit</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
};

const cart = {
    components: { cartItem },
    data(){
      return {
          imgCart: 'https://placehold.it/100x100',
          cartItems: [],
          displayCart: false,
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id === product.id);
            if(find){
                this.$parent.putData(`/api/cart/${find.id}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postData('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                this.$parent.putData(`/api/cart/${item.id}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$parent.deleteData(`/api/cart/${item.id}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        },
    },
    computed: {
        totalCost() {
            if (!this.cartItems.length) {
                return 0;
            }
            return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        totalAmount() {
            if (!this.cartItems.length) {
                return 0;
            }
            let sum = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
            return sum;
        }
    },
    mounted(){
        this.$parent.getData('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div>
            <div class="cart-block" v-show="displayCart">
                <p v-if="!cartItems.length">Basket is empty!</p>
                <cart-item
                v-for="item of cartItems" 
                :key="item.id"
                :cart-item="item" 
                @remove="remove">
                </cart-item>
                <div class="cart-summary">Total: <span class="cart-amount">{{totalAmount}}</span> items for <span class="cart-cost">{{totalCost}}</span> ₽</div>
            </div>
        </div>`
};

export default cart;
