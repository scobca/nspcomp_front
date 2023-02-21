<template>
    <div class="slider_component">
        <SliderItem
            v-for="item in slider_data"
            :key="item.id"
            :item_data = 'item'
        />
    </div>
</template>

<script>
import SliderItem from "@/components/SliderItem.vue";
export default {
    name: "SliderComponent",
    components: { SliderItem },
    props: {
        slider_data: {
            type: Array,
            default: () => []
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