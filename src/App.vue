<template>
    <div class="v-carousel-app">
        <v-carousel
            :carousel_data="sliderItem"
            :interval="4000"
            v-if="$route.name === 'home'"
        />
    </div>

    <div id="app"> {{width}} </div>
</template>


<script>

// import PageHeader from "@/components/PageHeader.vue";
import vCarousel from './components/v-carousel.vue';

export default {
    name: 'app',
    components: {vCarousel},
    data: () => {
        return {
            sliderItem: [
                {id: 1, img: 'slider1.svg', name: 'img1'},
                {id: 2, img: 'slider2.svg', name: 'img2'},
                {id: 3, img: 'slider3.svg', name: 'img3'}
            ],
            width: 0,
        }
    },
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
        }
    },
    created() {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
    },
}

</script>

<style scoped>

app {
    background-color: white;
    width: 100px;
}

</style>
