<template>
    <div class="main_header container">
        <div class="main_header__logo">
            <h1 class="header_logo">
                <router-link :to="{ name: 'home' }">
                    <img src="../assets/interface-elements/logo_retina.svg" alt="" class="logo">
                </router-link>
            </h1>
        </div>

        <div class="main_header__buttons">
            <ul class="menu__list">
                <li class="menu__button">
                    <router-link :to="{ name: 'login' }" class="menu__link"> Вход </router-link>
                </li>

                <li class="menu__button">
                    <router-link :to="{ name: 'info' }" class="menu__link"> О нас </router-link>
                </li>

                <li class="menu__button">
                    <router-link :to="{ name: 'catalog' }" class="menu__link"> Каталог </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

.logo {
    height: 40px;
}

.main_header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    height: 70px;
    width: 100%;

    z-index: 100;
    margin: 0;
    padding: 0;
}

.menu__list {
    display: flex;
    flex-direction: row-reverse;
    gap: 3vw;
    list-style-type: none;
    margin-right: 1.5vw;
}

.header_logo {
    margin: 1.5vh 0 0 1.5vh;            /*top right bottom left*/
}


@media (prefers-color-scheme: dark) {

    .main_header {
        background-color: var(--vt-c-black-soft);
    }

    .menu__button {
        scale: 100%;
        transition-property: scale;
        transition-duration: .25s;
    }

    .menu__button:hover {
        scale: 110%;
        transition-property: scale;
        transition-duration: .25s;
    }

    .menu__link {
        box-sizing: border-box;

        padding: 4px;
        position: relative;
        color: var(--logo-retina-color);
        text-decoration: none;
        outline: 2px solid var(--vt-c-black-soft);
        border-radius: 10px;
    }

    .menu__link:hover {
        position: relative;
        padding: 4px;

        outline: 2px solid var(--logo-retina-color);
        border-radius: 10px;
        transition-duration: .5s;
    }
}


@media (prefers-color-scheme: light) {

    .main_header {
        background-color: var(--color-header);
        /*box-shadow: 0 4px 10px var(--color-header);*/
        box-shadow: 0 0 4px 3px rgba(0, 0, 0, .1);
    }

    .menu__button {
        scale: 100%;
        transition-property: scale;
        transition-duration: .25s;
    }

    .menu__button:hover {
        scale: 110%;
        transition-property: scale;
        transition-duration: .25s;
    }

    .menu__link {
        padding: 4px;
        position: relative;

        color: var(--logo-retina-color);
        text-decoration: none;

        outline: 2px solid var(--color-header);
        border-radius: 10px;
        transition-duration: .25s;
    }

    .menu__link:hover {
        position: relative;
        padding: 4px;

        outline: 2px solid var(--logo-retina-color);
        border-radius: 10px;
        transition-duration: .5s;
    }
}

</style>