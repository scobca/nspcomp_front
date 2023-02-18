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
                       <router-link :to="{ name: 'home' }" class="menu__link"> Главная </router-link>
                   </li>

                   <li class="menu__item">
                       <router-link :to="{ name: 'catalog' }" class="menu__link"> Каталог </router-link>
                   </li>
               </ul>
           </nav>
       </div>
   </header>
</template>

<style scoped>

.main-header {
    height: 70px;
    box-shadow: 0 2px 16px;
    z-index: 100;
    width: 100%;
}

.main-header__container {
    /*display: flex;*/
    justify-content: space-between;
    align-items: center;
}

.main-header__menu {
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

.menu__list {
    /*size: 18px;*/
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style-type: none;
}

.menu__link {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;

    text-decoration: none;
    color: white !important;
}

.main-header__logo:hover {
    background-color: transparent;
    transition: color 0s, background-color 0s;
    border-bottom: 2px solid var(--vue-color-dark) !important;
    border-radius: 0;
}

</style>