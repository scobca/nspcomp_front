<template>
    <div class="v-carouser-item">
        <img :src=" require('../assets/sliderElem/' + item_data.img )" alt="">
    </div>
</template>

<script>
export default {
    name: "v-carousel-item",
    props: {
        item_data: {
            type: Object,
            default: () => {
            }
        }
    },
    data() {
        return {}
    },
    computed: {}
}
</script>

<style scoped>

@media only screen and (min-width: 1440px)  {
    img {
        width: 70vw;
        margin-left: 15vw;
    }
}

@media only screen and (max-width: 1440px)  {
    img {
        width: 100vw;
    }
}
</style>