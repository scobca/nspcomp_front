<template>
    <PageHeader class="page_header"
                data-aos="fade-down"
                data-aos-duration="750"/>

    <div class="v-carousel-app">
        <v-carousel
            :carousel_data="sliderItem"
            :interval="4000"
            v-if="$route.name === 'home'"
            class="carousel_slider"

            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="350"
        />
    </div>

    <HomeView class="homeView" v-if="$route.name === 'home'"/>
</template>


<script>

// import PageHeader from "@/components/PageHeader.vue";
import vCarousel from './components/v-carousel.vue';
import PageHeader from "@/components/PageHeader.vue";
import HomeView from "@/components/HomeView.vue";

export default {
    name: 'app',
    components: {HomeView, PageHeader, vCarousel},
    data: () => {
        return {
            sliderItem: [
                {id: 1, img: 'slider1.svg', name: 'img1'},
                {id: 2, img: 'slider2.svg', name: 'img2'},
                {id: 3, img: 'slider3.svg', name: 'img3'}
            ],
            width: 0
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

    }
}

</script>

<style scoped>

    app {
        background-color: white;
        width: 100vw;
    }

    .carousel_slider {
        margin: calc(70px + 2vh) 2.5vw 0;
        width: 95vw;
    }

    .homeView {
        display: flex;
        flex-direction: row;
        justify-content: left !important;
    }

</style>
