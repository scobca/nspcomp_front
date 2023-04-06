<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet">

    <section class="welcome">
        <section class="welcome_container container">
            <div class="welcome_content">
                <header class="welcome_header">
                    <h2> Добро пожаловать! </h2>
                </header>

                <div class="welcome_footer">
                    <p class="fContent_head"> Коротко о нас: </p>
                    <p class="fContent">
                        Мы являемся официальным дистрибьютером компании NSP в Санкт-Петербурге.
                        <br> <br> Директор нашего офиса, наш лидер
                        - Фокина Ольга Сергеевна!
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

    .welcome_container, .footer_content {
        width: auto;
        max-width: 350px;
    }

    .welcome_content{
        height: auto;
        scale: 100%;
        transition-duration: 0.5s;
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
        letter-spacing: 1px;
    }

    .welcome_footer {
        padding: 16px;
        margin: auto;
        text-align: left;
    }

    .fContent_head {
        text-align: center;
        font-size: 1.6rem;

        padding: 0;
        margin-top: -1vh;
        margin-bottom: 1vh;

        width: auto;
        border-bottom: 1px solid rgba(223, 214, 229, 0);
    }

    .fContent {
        text-indent: 0;
        padding: 0 5px 0 10px;
    }

    .welcome_content:hover {
        scale: 110%;
        transition-duration: 0.5s;
    }

    .welcome_content:hover .fContent_head {
        border-bottom: white 1px solid;
        box-sizing: border-box;

        transition: all 1s linear;
    }

    @media (prefers-color-scheme: dark) {
        .welcome_content {
            background-color: rgba(223, 214, 229, 0.15);
            border-radius: 10px;
        }

        .welcome_header > h2 {
            color: var(--vt-c-white);
        }

        .fContent_head {
            color: var(--vt-c-white-mute);
            font-weight: 100;
        }
    }
</style>