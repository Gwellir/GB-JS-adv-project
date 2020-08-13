const slider = {
    template:
        `<div v-if="items.length">
            <div class="slider padding-site topmenu">
                <img :src="entries[current].img" alt="bg">
                <div class="top-slider-text">
                    <p :class="entries[current].class">{{entries[current].type}}</p>
                    <h2 class="slider-h2">{{entries[current].name}}</h2>
                    <p class="slider-content">{{entries[current].desc}}</p>
                    <router-link :to="$root.makeProductLink(entries[current])" class="button">{{$root.orderLabelText}} <img class="text-arrow" src="img/arrow.svg" alt=""></router-link>
                </div>
                <div class="pagination">
                    <div @click="rotateLeft" class="circle"></div>
                    <div class="circle circle-active"></div>
                    <div @click="rotateRight" class="circle"></div>
                </div>
            </div>
        </div>`,
    props: {
        items: Array
    },
    data() {
        return {
            current: 0,
            // entries: []
        }
    },
    methods: {
        rotateLeft() {
            this.current = (--this.current + this.entries.length) % this.entries.length;
        },
        rotateRight() {
            this.current = ++this.current % this.entries.length;
        },
        // emitImage() {
        //     this.$emit('emit-image', this.entries[this.current].img);
        //     console.log('emitting ' + this.entries[this.current].img);
        // },
    },
    computed: {
        entries() {
            if (!this.items.length) {
                return;
            }
            return this.items.filter(item => item.id <= 1);
        }
    },
    updated() {
        // this.emitImage();
    }
};

export default slider;
