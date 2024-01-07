<template>
    <footer class="footer">
        <p class="footer__copyright">© Copyright Vue 3 2024</p>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        background-color: $primary;
        padding: 1rem;
        &__copyright {
            margin: 0;
            text-align: center;
            color: $white;
            @include font-size(12px);
        }
    }
</style>