<template>
    <div class="slider_item">
        <img :src="require('/icons/catalog/D3.png' + item_data.image )" alt=""> //5:24 ролик про слайдер
    </div>
</template>

<script>

export default {
    name: "SliderItem",
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return{}
    },
    computed: {}
}
</script>

<style scoped>

</style>