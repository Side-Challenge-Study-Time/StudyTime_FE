<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
    <header>
        <div>
            <nav>
                <RouterLink to="/">회원가입</RouterLink>
                &nbsp;&nbsp;
                <RouterLink to="/login">로그인</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView/>
</template>
