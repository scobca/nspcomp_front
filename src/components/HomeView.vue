<template>

    <section class="welcome">
        <div class="welcome_container container">

            <div class="welcome_content">
                <img src="/src/assets/logo_retina.svg" alt="logo">
                <h1 class="welcome__title">NSP - забота о здоровье!</h1>
                <p class="welcome_about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolore, fugit? Corporis cumque exercitationem illo quia quis quod, velit. Sit.</p>
                <router-link class="welcome__start btn" :to="{ name: 'CathPage' }"> Начать покупки </router-link>
            </div>

        </div>
    </section>


</template>

<script>

import PageHeader from "@/components/PageHeader";

export default {
    name: "HomeView",
    components: (PageHeader)
}

</script>

<style scoped>

</style>