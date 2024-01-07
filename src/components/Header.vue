<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <img src="/src/assets/images/logo.png" alt="Logo">
                </div>
        
                <nav class="header__nav">
                    <ul class="header__links">
                        <li><router-link to="/">Start</router-link></li>
                        <li><router-link to="/home">Home</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        background-color: $primary;
        padding: 1rem;
        &__content {
            @include flex-center-sb;
        }
        &__links {
            display: flex;
            align-items: center;
            li {
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                a {
                    text-decoration: none;
                    color: $white;
                    font-weight: normal;
                    @include font-size(16px);
                    &.router-link-exact-active {
                        font-weight: bold;
                        border-bottom: 1px solid $white;
                    }
                }
            }
        }
    }
</style>