<!-- 
The structure of this is just like a component, 
there's no difference between a 'page' and a component like a navbar,
only the way we use it
-->

<template>
    <!-- Nothing special about 'home', just a classname -->
    <div class="home">
        This is the homepage
    </div>
</template>

<script>
    export default{
        name: 'Home'
    }
</script>

<style scoped>
    /* scoped = all styling in here is only available to home.vue */

    .home{
        text-align: center;
    }
</style>
