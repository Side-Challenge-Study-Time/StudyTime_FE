<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
    <header class="header">
        <div class="wrapper"></div>

        <div class="wrapper">
            <nav>
                <RouterLink to="/">회원가입</RouterLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <RouterLink to="/about">로그인</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
}

nav a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    margin: 0 10px;
}

nav a:hover {
    color: #007aff;
}
</style>