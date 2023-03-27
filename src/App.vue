<template>
<!--        <PageHeader v-if="$route.name !== 'home'"/>-->
    <PageHeader/>
    <v-carousel :carousel_data="sliderItem" v-if="$route.name === 'home'"/>
    <div id="appp"> {{width}} </div>
</template>


<script>

import PageHeader from "@/components/PageHeader.vue";
import vCarousel from './components/v-carousel.vue';

export default {
    name: 'app',
    components: {vCarousel, PageHeader},
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
    }
}

</script>

<style scoped>
v-carousel {
    z-index: 100;
}

app {
    background-color: white;
    overflow: hidden;
}

v-carousel {

}
</style>
