<script setup>
    import WelcomePage from "@/components/WelcomePage.vue";
    import PageHeader from "@/components/PageHeader.vue";

</script>

<template>
    <PageHeader/>
    <WelcomePage msg="Добро пожаловать на сайт nsp-company!" v-if="$route.name === 'home'"/>
</template>

<style scoped>

</style>
