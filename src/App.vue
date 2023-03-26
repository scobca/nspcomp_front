<template>
<!--        <PageHeader v-if="$route.name !== 'home'"/>-->
    <PageHeader/>
    <v-carousel :carousel_data="sliderItem" v-if="$route.name === 'home'"/>

</template>


<script>

import PageHeader from "@/components/PageHeader.vue";
import vCarousel from './components/v-carousel.vue';

export default {
    name: 'app',
    components: {vCarousel, PageHeader},
    data() {
        return{
            sliderItem: [
                {id: 1, img: '1.png', name: 'img1'},
                {id: 2, img: '2.png', name: 'img2'},
                {id: 3, img: '3.png', name: 'img3'}
            ]
        }
    }
}

</script>

<style scoped>
v-carousel {
    z-index: 100;
}

app {
    background-color: white;
}
</style>
