<template>

    <div class="v-carouser-item">
        <img :src=" require('../assets/sliderElem/' + item_data.img )" alt="" v-if="imageSlide">
        <div class="item_content" v-else>
            <p> {{item_data.name}} </p>
            <p> {{item_data.id}} </p>
        </div>
    </div>
</template>

<script>
// import PageHeader from "@/components/PageHeader.vue";

export default {
    name: "v-carousel-item",
    props: {
        item_data: {
            type: Object,
            default: () => {
            }
        },
        imageSlide: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {}
    },
    computed: {}
}
</script>

<style scoped>
    .v-carouser-item {
        min-width: 1440px;
    }
</style>