<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet">

    <section class="welcome">
        <section class="welcome_container container">
            <div class="welcome_content">
                <header class="welcome_header">
                    <h2> Добро пожаловать!</h2>
                </header>

                <div class="welcome_footer">
                    <p class="fContent_head"> Коротко о нас: </p>
                    <p class="footer_content">
                        <br> мы являемся академовцами из академии цифровых технологий, вообще ковалёв красавчик что тут еще сказать
                        АааААааААаААааАааАааАаААА аАааАаАааАооаОАОоао АООАОООАоооаоаоаоо
                    </p>
                </div>
            </div>
        </section>
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
        justify-content: left;
        margin-top: 8vh;
        margin-left: 2.5vw;
    }

    .welcome_container {
        width: auto;
        max-width: 350px;
    }

    .welcome_content, .welcome_footer{
        height: 100vh;
    }
    
    .welcome_footer {
        padding: 16px;
        text-align: left;
    }

    .fContent_head {
        text-align: center;
        padding: 0;
        font-size: 1.7rem;
        margin-bottom: -2.5vh;
    }

    @media (prefers-color-scheme: dark) {
        .welcome_content {
            background-color: rgba(223, 214, 229, 0.15);
            border-radius: 10px;
        }

        .welcome_header {
            font-family: Comfortaa, cursive;
            height: auto;

            background-image: url("../../src/assets/background/bg-grad-1.jpg") ;
            background-size: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            text-align: center;
            vertical-align: center;
        }

        .welcome_header > h2 {
            padding: 8px;
            letter-spacing: 2px;
            color: var(--vt-c-white-mute);
        }
    }
</style>