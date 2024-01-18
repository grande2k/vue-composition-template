<template>
    <section class="home">
        <div class="container">
            <h1 class="title" v-text="appStore.home"/>
            <router-link to="/" class="primary-btn">Go back</router-link>
        </div>
    </section>
</template>

<script setup>
    import { useAppStore } from "@/stores/app";

    const appStore = useAppStore();
</script>

<style lang="scss">
    
</style>