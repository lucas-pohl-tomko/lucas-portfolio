<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterView />
</template>

<style lang="scss">
@font-face {
    font-family: oswald;
    src: url(@/assets/fonts/oswald/static/Oswald-Regular.ttf);
}
html {
    overflow-y: auto !important;
}
body {
    font-family: oswald !important;
    /* width */
    &::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
}
</style>
