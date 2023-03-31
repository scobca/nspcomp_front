<template>
    <div class="wrapper">
        <div class="v-carousel" :style="{ 'margin-left': '-' + (100 * this.currentSlideIndex) + '%'}">
            <v-carousel-item
                v-for="item in carousel_data"
                :key = 'item.id'
                :item_data = 'item'
                :imageSlide = 'true'
            />
        </div>
        <button class="prev" @click="prevSlide" >
            <img src="../assets/sliderElem/prevSlide.svg" alt="Prev slide">
        </button>
        
        <button class="next" @click="nextSlide">
            <img src="../assets/sliderElem/nextSlide.svg" alt="Next slide">
        </button>

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
        },
        interval: {
            type: Number,
            default: 0
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
                // console.log(this.currentSlideIndex)
            }
            else if (this.currentSlideIndex === 0) {
                this.currentSlideIndex = 3;
                this.currentSlideIndex--
                // console.log(this.currentSlideIndex);
            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.carousel_data.length - 1) {
                this.currentSlideIndex = 0;
                // console.log(this.currentSlideIndex);
            } else {
                this.currentSlideIndex++
                // console.log(this.currentSlideIndex);
            }
        }
    },
    mounted() {
        if (this.interval > 0) {
            let vm = this;
            setInterval(function () {
                vm.nextSlide()
            }, vm.interval)
        }
    }
}
</script>

<style scoped v-if="this.currentSlideIndex === 2">

.wrapper {
    max-width: 1440px;
    overflow: hidden;
    margin-top: 5vh;
}

.v-carousel {
    display: flex;
    transition: all ease 2s;
}

.next > img, .prev > img {
    height: 5vh;
}

@media (prefers-color-scheme: dark) {
    .next, .prev {          /*фон всего элемента кнопки*/
        background-color: var(--color-common-bg-buttons-slider);
        border: 0;
        padding: 10px 5px 0 5px;      /* top right bottom left */
    }

    .next > img:hover, .prev > img:hover {          /*рамка кнопки при наведении*/
        border: 3px solid var(--color-border-buttons-slider);
        border-radius: 10px;
        transition: all  ease .1s;
    }

    .next > img, .prev > img {              /*фон изображения кнопок*/
        background-color: var(--color-bg-buttons-slider);
        border-radius: 10px;
    }
}


@media (prefers-color-scheme: light) {
    .next, .prev {          /*фон всего элемента кнопки*/
    background-color: var(--color-common-bg-buttons-slider);
    border: 0;
    padding: 10px 5px 0 5px;      /* top right bottom left */
    }

    .next > img:hover, .prev > img:hover {          /*рамка кнопки при наведении*/
    border: 3px solid var(--color-border-buttons-slider);
    border-radius: 10px;
    transition: all  ease .1s;
    }

    .next > img, .prev > img {          /*фон изображения кнопок*/
    background-color: var(--color-bg-buttons-slider);
    border-radius: 10px;
    }
}

</style>


<!--20:29 видео-->