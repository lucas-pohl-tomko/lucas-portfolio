<template>
    <v-app-bar
        v-if="mobile"
        color="#00838F"
        theme="dark"
        prominent
    >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
            <template #default>
                <box-icon size="md" color="white" name="menu"></box-icon>
            </template>
        </v-app-bar-nav-icon>
        <v-toolbar-title>Lucas Daniel Pohl Tomko</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-if="mobile" v-model="drawer" color="#00838f" theme="dark" location="bottom" temporary>
        <v-list nav class="d-flex justify-content-center">
            <a
                :href="`#${article.id}`"
                class="linkedin-link text-decoration-none d-flex justify-content-center"
                v-for="(article, index) in articles.articles"
                :key="index"
            >
                <v-list-item :value="article.id">
                    <template #prepend>
                        <box-icon
                            class="mx-4"
                            type="solid"
                            color="white"
                            :name="article.icon"
                        ></box-icon>
                    </template>
                    <template #title>
                        <h2 class="fs-4">{{ article.section }}</h2>
                    </template>
                </v-list-item>
            </a>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-if="!mobile" color="#00838F" width="350" elevation="20" permanent>
        <v-container class="sidebar">
            <div class="flex-column">
                <div class="row">
                    <div class="col-2">
                        <v-avatar color="surface-variant">
                            <template #default
                                ><v-img
                                    src="https://media.licdn.com/dms/image/C4D03AQGP0TdbplUUTg/profile-displayphoto-shrink_200_200/0/1651510545716?e=1692230400&v=beta&t=4icsgA3uOUFPdyGahd8Z3kRdw4p-41LqHPfVLlJM8ho"
                                    alt=""
                                    srcset=""
                                ></v-img
                            ></template>
                        </v-avatar>
                    </div>
                    <div class="col">
                        <h4 class="mx-2">Lucas Daniel Pohl Tomko</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col flex-column">
                        <h6 class="mx-2">(47) 9 9762-9558</h6>
                        <h6 class="mx-2">
                            Linkedin:
                            <a class="linkedin-link" href="https://www.linkedin.com/in/lucas-daniel-pohl-tomko-bb50b71a3/" target=”_blank”
                                >Lucas Daniel Pohl Tomko</a
                            >
                        </h6>
                        <h6 class="mx-2">
                            GitHub:
                            <a class="linkedin-link" href="https://www.github.com/lucas-pohl-tomko/lucas-portfolio" target=”_blank”
                                >lucas-pohl-tomko/lucas-portfolio</a
                            >
                        </h6>
                    </div>
                </div>
            </div>
        </v-container>
        <v-divider></v-divider>
        <v-list nav>
            <a
                :href="`#${article.id}`"
                class="text-bg-primary text-decoration-none"
                v-for="(article, index) in articles.articles"
                :key="index"
            >
                <v-list-item :value="article.id">
                    <template #prepend>
                        <box-icon
                            class="mx-4"
                            type="solid"
                            color="white"
                            :name="article.icon"
                        ></box-icon>
                    </template>
                    <template #title>
                        <h2 class="fs-4">{{ article.section }}</h2>
                    </template>
                </v-list-item>
            </a>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
// @ts-ignore
import articles from '../assets/json/articles.json'
import { useDisplay } from 'vuetify'

export default {
    setup() {
        const { mobile } = useDisplay()
        return { mobile, articles }
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
.sidebar {
    color: white;
}
</style>
