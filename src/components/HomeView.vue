<template>
    <SliderElem/>

    <section class="welcome">
        <div class="welcome_container container">

            <div class="welcome_content">
<!--                <img src="../../public/img/background_slider_1.jpg" alt="slider">-->
<!--                <h1 class="welcome__title">NSP - забота о здоровье!</h1>-->
<!--                <p class="welcome_about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolore, fugit? Corporis cumque exercitationem illo quia quis quod, velit. Sit.</p>-->
<!--                <router-link class="welcome__start btn" :to="{ name: 'cat' }"> Начать покупки </router-link>-->
            </div>

        </div>
    </section>

</template>


<script>

import SliderElem from "@/components/SliderElem";

export default {
    name: "HomeView",
    components: {SliderElem}
}

</script>

<style scoped>

.welcome {
    background: var(--accent_mainbackcolor);
    height: 406px;
}

.welcome_content {
    margin-left: -16px ;
    margin-top: -16px;
    display: flex;
    font-family: Inter, sans-serif;
    color: black;
    font-weight: normal;
}

</style>