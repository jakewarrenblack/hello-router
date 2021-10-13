<template>
    <div id="nav">
        <!-- one way using name, the other using path -->
        <router-link :to="{name: 'home'}">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link :to="{name: 'user', params: {id: 123}}">User</router-link>
    </div>
</template>

<script>


export default{
    name: 'NavBar'
}

</script>

<style scoped>
#nav{
    padding: 30px;
    text-align:center;
    background:lightblue;
    margin-bottom:2rem;
    width: 100%;
}

#nav a{
    font-weight:bold;
    color: #2c3e50;
}

/* class built into vue router */
/* this means only the active link will be green */
#nav a.router-link-exact-active{
    color: #42b983;
}
</style>
