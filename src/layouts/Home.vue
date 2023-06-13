<template>
    <v-layout align-start justify-center row fill-height fill-width>
        <sidebar />
        <v-main style="height: 100vh; width: fill-width;">
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'
import Sidebar from '../views/Sidebar.vue'

export default {
    setup() {
        const { mobile } = useDisplay()
        return { mobile }
    },
    components: {
        Sidebar
    },
    data: () => ({
        drawer: false
    })
}
</script>

<style lang="scss">
.layout {
    height: 100vh;
}
</style>
