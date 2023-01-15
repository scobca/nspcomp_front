<template>
    <header class="header">
        <div class="header_container container">

            <router-link :to="{ name: 'home' }" class="header__logo logo">
                <img src="@/assets/logo_retina.svg" alt="none">
            </router-link>

            <nav class="header__menu menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link :to="{ name: 'home' }" class="menu__link"> Главная </router-link>
                    </li>

                    <li class="menu__item">
                        <router-link :to="{ name: 'cat' }" class="menu__link"> Каталог </router-link>
                    </li>

                    <li  class="menu__item">
                        <router-link :to="{ name: 'info'}" class="menu__link"> Инфо </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    name: "PageHeader",
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style scoped>

.header {
    height: 70px;
    /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
    /*border-bottom: 1px solid #ededed;*/
    z-index: 100;
    width: 100%;
    background: white;
    font-family: "Open Sans";
}

.header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 24px;
}

.header__menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70vw;
    padding: 86px 26px;
    background: white;
    z-index: 10;
    transform: translateX(100%);
    transition: all .3s;
}

router-link:hover {
    color: black !important;
}

.menu__list {
    size: 18px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style-type: none;
}

.menu__link {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    color: black;
    text-decoration: none;
}

@media screen and (min-width: 1150px) {
    .header_container{
        align-items: center;
        align-content: center;
    }
    .header__menu {
        position: relative;
        background: transparent;
        box-shadow: none;
        width: auto;
        padding: 0;
        transform: none;
        justify-content: center;
        margin-top: -4px;
    }
    .header__menu .menu__list {
        flex-direction: row;
    }

    .menu__link:hover {
        border-bottom: var(--accent_maincolor) 2px solid;
    }
}



</style>