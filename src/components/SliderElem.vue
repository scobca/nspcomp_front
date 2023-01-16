<template>
    <section class="slider">
        <div class="slider_container">
            <img src="../../public/img/background_slider_1.jpg" alt="slider">
        </div>
    </section>
</template>

<script>
export default {
    name: "SliderElem"
}
</script>

<style scoped>

    .slider {
        height: 406px;
        width: auto;
    }

    .slider_container {
        background-image: url("../../public/img/background_slider_1.jpg");
        margin-top: -3em;
        margin-left: -2em;
    }

</style>