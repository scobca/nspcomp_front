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
                    <p class="welcome_footer"> Коротко о нас:
                        <br> Офис 260 является одним из самых больших и развитых офисов компании в г.Санкт-Петербурге.
                        Директор офиса Лахтеева С.В.
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
        justify-content: space-between;
        margin: auto;
    }

    .welcome_container {
        width: 30vw;
        max-width: 400px;
    }

    .welcome_content{
        height: auto;
        margin-top: 8vh;
    }
    
    .welcome_footer {
        padding: 16px;
        text-align: left;
    }
    
    .head_welcome{
        text-align: center;
    }

    @media (prefers-color-scheme: dark) {
        .welcome_content {
            background-color: rgba(223, 214, 229, 0.15);
            border-radius: 10px;
        }

        .welcome_header {
            font-family: Comfortaa, cursive;
            height: 10vh;

            background: url("../assets/background/bg-grad-1.jpg");
            background-size: 30vw;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            text-align: center;
            vertical-align: center;
        }

        .welcome_header > h2 {
            padding: 2vh 0 0 0;
            letter-spacing: 2px;
            color: var(--vt-c-white-mute);
        }
    }
</style>