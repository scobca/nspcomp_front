<template>
    <section class="welcome">
        <div class="welcome_container container">

            <div class="welcome_content">
                <h1 class="welcome__title">NSP - забота о здоровье!</h1>
                <p class="welcome_about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolore, fugit? Corporis cumque exercitationem illo quia quis quod, velit. Sit.</p>
                <router-link class="welcome__start btn" :to="{ name: 'CathPage' }"> Начать покупки </router-link>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: "HomeView"
}
</script>

<style scoped>

</style>