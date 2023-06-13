<template>
    <v-navigation-drawer
        v-if="!mobile"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        theme="dark"
        width="auto"
        permanent
    >
        <v-container>
            <div class="flex-column">
                <div class="row">
                    <div class="col-2">
                        <v-avatar color="surface-variant" image="smirk.png"></v-avatar>
                    </div>
                    <div class="col">
                        <h4 class="mx-2">Lucas Daniel Tomko</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col flex-column">
                        <h6 class="mx-2">(47) 9 9762-9558</h6>
                        <h6 class="mx-2">
                            Linkedin:
                            <a class="linkedin-link" href="http://linkedin.com"
                                >Lucas Daniel Tomko</a
                            >
                        </h6>
                    </div>
                </div>
            </div>
        </v-container>
        <v-divider></v-divider>
        <v-list nav>
            <a href="#" class="text-bg-primary text-decoration-none">
                <v-list-item value="scholarship">
                    <template #prepend>
                        <box-icon class="mx-4" type="solid" color="white" name="face"></box-icon>
                    </template>
                    <template #title> <h2 class="fs-4">Faculdade</h2> </template>
                </v-list-item>
            </a>
            <a href="#" class="text-bg-primary text-decoration-none">
                <v-list-item value="skills">
                    <template #prepend>
                        <box-icon class="mx-4" type="solid" color="white" name="wrench"></box-icon>
                    </template>
                    <template #title> <h2 class="fs-4">Habilidades</h2> </template>
                </v-list-item>
            </a>
            <a href="#" class="text-bg-primary text-decoration-none">
                <v-list-item value="projects">
                    <template #prepend>
                        <box-icon class="mx-4" type="solid" color="white" name="rocket"></box-icon>
                    </template>
                    <template #title> <h2 class="fs-4">Projeto</h2></template>
                </v-list-item>
            </a>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { useDisplay } from 'vuetify'
export default {
    setup() {
        const { mobile } = useDisplay()
        return { mobile }
    },
    data: () => ({
        drawer: false
    })
}
</script>

<style lang="scss">
.linkedin-link {
    color: white;
}
.sidebar{
    display: block!important;
}
</style>