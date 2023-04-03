<template>

    <section class="welcome">
        <div class="welcome_container container">
            <div class="welcome_content">
               <h2 class="welcome_text"> Добро пожаловать!</h2>
            </div>
        </div>
    </section>

</template>


<script>

export default {
    name: "HomeView",
    components: {}
}

</script>

<style scoped>
    .welcome {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .welcome_content {
        width: 30vw;
    }

    @media (prefers-color-scheme: dark) {
        .welcome_content {
            background-color: var(--vt-welcome-bg-dark-medium);
            border-radius: 10px;
            height: 40vh;
        }
    }

</style>