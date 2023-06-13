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
html{
    overflow-y: auto !important;
}
body {
    font-family: oswald!important;
}
</style>
