<template>
    <div class="v-carouser-item">
        <img :src=" require('../assets/catalog/' + item_data.img )" alt="">
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

img {
    width: 100px;
}

</style>