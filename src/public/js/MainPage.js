import panelsOneFour from './PanelsOneFour'
import trendingListing from './TrendingListing'
import slider from './Slider'
import exclusiveListing from './ExclusiveListing'
import featuredPanels from './FeaturedPanels'

const mainPage = {
    template: 
        `<main>
        <slider :items="itemList"></slider>
        
        <featured-panels :items="itemList"></featured-panels>
        <exclusive :items="itemList"></exclusive>
        <trending-listing :items="itemList"></trending-listing>
        <slider :items="itemList"></slider>
        
        <panels-one-four :items="itemList"></panels-one-four>
        <div class="mobile-app padding-site">
            <img src="img/back-img.jpg" class="mobile-image">
            <div class="mobile-text">
                <p class="mobile-app-heading">MOBILE APP</p>
                <h2 class="mobile-h2">Find. Follow. Favorite.</h2>
                <p class="mobile-content">Save your favorites and share your style.</p>
                <a href="#" class="store-link"><img src="img/app-store.jpg" alt=""></a><a href="#" class="store-link"><img src="img/google-play.jpg" alt=""></a>
            </div>  
        </div>
        </main>`,
    components: {
        'slider': slider,
        'featured-panels': featuredPanels,
        'exclusive': exclusiveListing,
        'trending-listing': trendingListing,
        'panels-one-four': panelsOneFour,
    },
    data() {
        return {
            // currentHotImg: "",
            // currentTopImg: "",
            itemList: this.$root.itemList,
        }
    },
    methods: {
        // setHotImage(src) {
        //     this.currentHotImg = src;
        //     console.log(src);
        // },
        // setTopImage(src) {
        //     this.currentTopImg = src;
        //     console.log(src);
        // },
    },
    computed: {

    },
};

export default mainPage;