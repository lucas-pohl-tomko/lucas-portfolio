<template>
    <v-layout align-start justify-center row fill-height fill-width>
        <v-app-bar
            v-if="mobile"
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            theme="dark"
            prominent
        >
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
                <template #default>
                    <box-icon size="md" color="white" name="menu"></box-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-toolbar-title>My files</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer v-if="mobile" v-model="drawer" location="bottom" temporary>
            <v-list nav>
                <a href="#" class="text-decoration-none">
                    <v-list-item value="scholarship" class="d-flex justify-content-center m-2">
                        <template #prepend>
                            <box-icon class="me-2" type="solid" color="grey" name="face"></box-icon>
                        </template>
                        <template #title> <h2 class="fs-2">Introdução</h2> </template>
                    </v-list-item>
                </a>
                <a href="#" class="text-decoration-none">
                    <v-list-item value="skills" class="d-flex justify-content-center m-2">
                        <template #prepend>
                            <box-icon
                                class="me-2"
                                type="solid"
                                color="grey"
                                name="graduation"
                            ></box-icon>
                        </template>
                        <template #title> <h2 class="fs-2">Habilidades</h2> </template>
                    </v-list-item>
                </a>
                <a href="#" class="text-decoration-none">
                    <v-list-item value="projects" class="d-flex justify-content-center m-2">
                        <template #prepend>
                            <box-icon
                                class="me-2"
                                type="solid"
                                color="grey"
                                name="graduation"
                            ></box-icon>
                        </template>
                        <template #title> <h2 class="fs-2">Projetos</h2> </template>
                    </v-list-item>
                </a>
            </v-list>
        </v-navigation-drawer>
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
