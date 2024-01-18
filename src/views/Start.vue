<template>
    <section class="start">
        <div class="container">
            <h1 class="title" v-text="appStore.massage"/>
            <p class="subtitle">Welcome to my <span>Vue 3</span> + <span>Vite</span> start template</p>
            <router-link to="/home" class="primary-btn">Home page</router-link>
        </div>
    </section>
</template>

<script setup>
    import { useAppStore } from "@/stores/app";

    const appStore = useAppStore();
</script>