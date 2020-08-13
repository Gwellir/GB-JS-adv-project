const itemOverlay = {
    template: 
        `<div class="hover-overlay">
            <router-link :to="$root.makeProductLink(item)" class="round-button">
                <img class="text-arrow" src="img/arrow.svg" alt="">
            </router-link>
            <h4 class="featured-h4">{{item.name}}</h4>
            <p class="featured-content">{{item.desc}}</p>
        </div>`,
    props: {
        item: Object
    }
}

export default itemOverlay;