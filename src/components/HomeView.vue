<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet">

    <section class="welcome">
        <section class="welcome_container container"
                 data-aos="fade-down"
                 data-aos-duration="1500"
                 data-aos-delay="350">
 
            <div class="welcome_content">
                <header class="welcome_header">
                    <h2> Добро пожаловать! </h2>
                </header>

                <div class="welcome_footer">
                    <p class="fContent_head" > Коротко о нас </p>
                    <p class="fContent">
                        Мы являемся официальным дистрибьютером компании NSP в Санкт-Петербурге.
                        <br> <br> Директор нашего офиса, наш лидер
                        - Фокина Ольга Сергеевна!
                    </p>
                </div>
            </div>
        </section>

        <section class="director_container container"
                 data-aos="fade-down"
                 data-aos-duration="1500"
                 data-aos-delay="550">

            <div class="director_content">
                <header class="director_header">
                    <h2> О нашем директоре </h2>
                </header>

                <footer class="director_footer">
                    <p class="fContent_head">Иванов Иван Иванович</p>
                    <p class="fContent">
                        Образование: инженер-экономист
                        Прошел курсы нутрициологии
                    </p>
                </footer>
            </div>
        </section>

        <section class="product_container container"
                 data-aos="fade-down"
                 data-aos-duration="1500"
                 data-aos-delay="750">

            <div class="product_content">
                <header class="product_header">
                    <h2> О нашей продукции </h2>
                </header>

                <footer class="product_footer">
                    <p class="fContent_head"> БАДы от NSP - что это?</p>
                    <p class="fContent">
                        Вступая в клуб NSP вы получаете доступ к личной консультации врача-специалиста и скидке на продукцию
                        компании
                    </p>
                </footer>
            </div>
        </section>
    </section>

</template>


<script>
import AOS from 'aos';
AOS.init();

export default {
    name: "HomeView",
    components: {}
}

</script>

<style scoped>

    .welcome {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 8vh 2.5vw 10vh;
    }

    .welcome_container, .director_container, .product_container {
        display: flex;
        width: auto;
        padding-left: .5vw;
        padding-right: .5vw;
    }

    .welcome_content, .director_content, .product_content{
        height: auto;
        width: auto;
        max-width: 27vw;
        scale: 100%;
        transition-duration: 0.5s;
    }

    .welcome_header, .director_header, .product_header {
        font-family: Comfortaa, cursive;
        height: auto;

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        text-align: center;
        vertical-align: center;
    }

    .welcome_header > h2, .director_header > h2, .product_header > h2{
        padding: 8px;
        letter-spacing: 1px;
    }

    .welcome_footer, .director_footer, .product_footer {
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

    .welcome_content:hover, .director_content:hover, .product_content:hover {
        scale: 105%;
        transition-duration: 0.5s;
    }

    @media (prefers-color-scheme: dark) {
        .welcome_content, .director_content, .product_content {
            background-color: rgba(223, 214, 229, 0.15);
            border-radius: 10px;
        }

        .welcome_header, .director_header, .product_header  {
            background-image: url("../../src/assets/background/bg-grad-3.jpg") ;
            background-size: 100%;
            box-shadow: 0 5px 5px -2px rgba(10, 10, 10, .25);
        }

        .welcome_header > h2, .director_header > h2, .product_header > h2 {
            color: var(--vt-c-white);
        }

        .fContent_head {
            color: var(--vt-c-white-mute);
            transition-duration: .1s;
        }

        .welcome_content:hover .fContent_head, .director_content:hover .fContent_head, .product_content:hover .fContent_head{
            border-bottom: white 1px solid;
            box-sizing: border-box;

            transition-duration: 1.5s;
        }
    }


    @media (prefers-color-scheme: light) {
        .welcome_content, .director_content, .product_content {
            background-color: rgba(223, 214, 229, 0.35);
            border-radius: 10px;
            box-shadow: 0 5px 5px -2px rgba(0, 0, 0, .1);
        }

        .welcome_header, .director_header, .product_header  {
            background-image: url("../../src/assets/background/bg-grad-1.jpg") ;
            background-size: 100%;
            box-shadow: 0 1px 5px -3px rgba(100, 100, 100, .5);
        }

        .welcome_header > h2, .director_header > h2, .product_header > h2 {
            color: var(--vt-c-white);
        }

        .fContent_head {
            color: var(--vt-c-black-mute);
            transition-duration: .1s;
        }

        .welcome_content:hover .fContent_head, .director_content:hover .fContent_head, .product_content:hover .fContent_head{
            border-bottom: var(--vt-c-black-mute) 1px solid;
            box-sizing: border-box;

            transition-duration: 1.5s;
        }
    }
</style>