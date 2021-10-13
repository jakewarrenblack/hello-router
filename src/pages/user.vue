<template>
    <div class="user">
        This is the user page {{$route.params.id }}
    </div>
</template>

<script>
    export default{
        name: 'User'
    }
</script>

<style scoped>
    .user{
        text-align: center;
    }
</style>
