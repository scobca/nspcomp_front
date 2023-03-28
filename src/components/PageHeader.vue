<script>
export default {
    name: "PageHeader"
}

</script>


<template>
    <header class="main-header">
        <div class="main-header__container container">

            <router-link :to="{name: 'home'}" class="main-header__logo logo">
                <img src="../assets/interface-elements/logo_retina.svg" alt="">
            </router-link>

            <nav class="main-header__menu menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link :to="{ name: 'login' }" class="menu__link"> Вход </router-link>
                    </li>

                    <li class="menu__item">
                        <router-link :to="{ name: 'info' }" class="menu__link"> О нас </router-link>
                    </li>

                    <li class="menu__item">
                        <router-link :to="{ name: 'catalog' }" class="menu__link"> Каталог </router-link>
                    </li>


                    <!--                   <li class="menu__item">-->
                    <!--                       <router-link :to="{ name: 'home' }" class="menu__link"> Главная </router-link>-->
                    <!--                   </li>-->


                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>

.main-header {
    height: 70px;
    max-width: 100vw;
}

.main-header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
    background: var(--color-background-mute);
    width: 100vw;
}

.main-header__logo {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-header__menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50vw;
    height: 70px;
    padding: 14px 0;
    vertical-align: center;
    z-index: 10;
    transition: all .3s;
}

.menu__list {
    display: flex;
    flex-direction: row-reverse;
    gap: 48px;
    font-size: 1.15rem;
    list-style-type: none;
    margin-right: 1vw;
}

.menu__link {
    color: var(--vue-color-light);
    font-family: Inter, sans-serif;
}

.menu__link:hover {
    color: #bdbdbd;
}

/*.main-header {*/
/*    display: flex;*/
/*    position: relative;*/


/*    height: 70px;*/
/*    width: 100%;*/

/*    box-shadow: 0 2px 16px;*/
/*    z-index: 100;*/
/*    background: white;*/
/*}*/

/*.main-header__container {*/
/*    display: flex;*/
/*    justify-content: space-between;*/
/*    align-items: center;*/
/*    padding: 8px 24px;*/
/*}*/

/*.main-header__logo {*/
/*    height: 100%;*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    gap: 16px;*/
/*}*/

/*.main-header__menu {*/
/*    position: fixed;*/
/*    top: 0;*/
/*    right: 0;*/
/*    bottom: 0;*/
/*    width: 70vw;*/
/*padding: 25px 26px;*/
/*vertical-align: center;*/
/*background: initial;*/
/*z-index: 10;*/
/*!*transform: translateX(100%);*!*/
/*transition: all .3s;*/
/*}*/

/*.menu__list {*/
/*    !*size: 18px;*!*/
/*    display: flex;*/
/*    flex-direction: row;*/
/*    gap: 24px;*/
/*}*/

/*.menu__item {*/
/*    font-family: Inter, sans-serif;*/
/*    font-style: normal;*/
/*    font-weight: 400;*/

/*    text-decoration: none;*/
/*    color: black !important;*/
/*}*/

/*.main-header__logo:hover {*/
/*    background-color: transparent;*/
/*    transition: color 0s, background-color 0s;*/
/*    border-bottom: 2px solid var(--vue-color-dark) !important;*/
/*    border-radius: 0;*/
/*}*/

</style>