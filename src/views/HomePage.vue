<template>
    <div>
        <h1>Home Page</h1>
        <button @click="logout">logout</button>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        methods: {
            logout() {
                localStorage.removeItem('token')
                location.reload()
            }
        },
    }
</script>

