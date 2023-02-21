<script setup>
    import PageHeader from "@/components/PageHeader.vue";
</script>

<script>
    import SliderComponent from "@/components/SliderComponent.vue";

    export default {
        name: 'app',
        components: { SliderComponent },
        data() {
            return{
                sliderItems: [
                    {id: 1, name: 'img1', image: 'components/icons/catalog/D3.png'},
                    {id: 2, name: 'img2', image: 'components/icons/catalog/lecitin.png'},
                    {id: 3, name: 'img3', image: 'components/icons/catalog/fiz_active.png'}
                ]
            }
        }
    }
</script>



<template>
<!--    <PageHeader v-if="$route.name !== 'home'"/>-->
    <PageHeader/>
    <SliderComponent
        :slider_data="sliderItems"
    />
</template>

<style scoped>

</style>
