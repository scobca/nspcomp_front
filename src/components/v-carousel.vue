<template>
    <div class="wrapper">
        <div class="v-carousel" :style="{ 'margin-left': '-' + (100 * this.currentSlideIndex) + '%' }">
            <v-carousel-item
                v-for="item in carousel_data"
                :key = 'item.id'
                :item_data = 'item'
            />
        </div>
        <button class="prev" @click="prevSlide">Prev</button>
        <button class="next" @click="nextSlide">Next</button>
    </div>

</template>

<script>
import vCarouselItem from './v-carousel-item.vue'
export default {
    name: "v-carousel",
    components: {vCarouselItem},
    props:{
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentSlideIndex: 0
        }
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
                console.log(this.currentSlideIndex)
            }
        },
        nextSlide() {
            if (this.currentSlideIndex < 2) {
                this.currentSlideIndex++
                console.log(this.currentSlideIndex)
            }
        }
    }
}
</script>

<style scoped>

.wrapper {
    max-width: 1440px;
    overflow: hidden;
}

.v-carousel {
    display: flex;
}

</style>

<!--12:09 видео-->