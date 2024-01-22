<template>
    <template v-if="!error">
        <div id="base-layout">
            <Header />
    
            <main class="main">
                <router-view />
            </main>
    
            <Footer />
        </div>
    </template>

    <div class="error" v-else>
        <img src="/src/assets/images/error.svg" alt="error">
        <p>An error occurred while loading application resources.</p>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";

    const error = ref(false);
</script>

<style lang="scss" scoped>
    #base-layout {
        @include flex-column;
        justify-content: space-between;
        height: 100%;
        .main {
            @include flex-center-column;
            flex: auto;
        }
    }

    .error {
        @include flex-center-column;
        height: 100%;
        p {
            @include font-size(24px);
        }
    }
</style>