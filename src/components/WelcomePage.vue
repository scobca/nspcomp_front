<script setup>

defineProps({
  msg: {
    type: String,
    required: true
  }

})

</script>


<template>

    <div class="greetings-container">
        <div class="greetings">
            <h1 class="green">{{ msg }}</h1>
            <h3>
                Добро пожаловать на nsp-company.shop
            </h3>
            <router-link :to="{name: 'catalog'}" class="catalog_btt">Перейти в каталог</router-link>
        </div>
    </div>

</template>

<style scoped>
.greetings-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.greetings-container-logo {
    height: 5vh;
}

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
    margin-bottom: -1rem;
    letter-spacing: 10px;
    color: var(--logo-retina-color);
}

h3 {
    font-size: 1.2rem;
    letter-spacing: 2px;
    line-height: 50px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.catalog_btt {
    margin-top: 2rem;
    border: 2px solid var(--logo-retina-color);
    border-radius: 5px;
    padding: 5px;
    letter-spacing: 3px;
    text-align: center;
    color: var(--logo-retina-color);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50px;
}

</style>
