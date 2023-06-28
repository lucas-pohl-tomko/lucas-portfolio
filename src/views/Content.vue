<template>
    <div class="content-container">
        <div
            class="article-container"
            v-for="(article, index) in articlesContent"
            :key="index"
            :id="article.id"
        >
            <h1>
                {{ article.header }}
            </h1>
            <p v-html="article.content" class="fs-4 my-5"></p>
        </div>
    </div>

    <div class="content-container">
        <h1>Projetos</h1>
        <v-divider></v-divider>
        <div
            class="article-container"
            v-for="(project, index) in projectsContent"
            :key="index"
            :id="project.project"
        >
            <h1>
                {{ project.name }}
            </h1>
            <p v-html="project.description" class="fs-4 my-5"></p>
            <a target="_blank" :href="project.link"
                ><h4>{{ project.project }}</h4></a
            >
            <v-chip-group v-if="project.pictures.length" class="float-end">
                <v-chip><box-icon name="minus" @click=subtractHeight(project.project)></box-icon></v-chip>

                <v-chip disabled>Height Picker! {{ heightPicker[project.project]?.height || 700 }}</v-chip>

                <v-chip><box-icon name="plus" @click=addHeight(project.project)></box-icon></v-chip>
            </v-chip-group>
            <v-carousel
                v-if="project.pictures.length"
                :height="heightPicker[project.project]?.height || 700"
                hide-delimiter-background
            >
                <v-carousel-item>
                    <div class="smartphone shadow-lg">
                        <div class="content">
                            <iframe class="frame" :src="project.link" style="" />
                        </div></div
                ></v-carousel-item>

                <v-carousel-item>
                    <iframe :class="mobile ? 'mobile-frame' : 'big-frame'" :src="project.link" />
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import { ref } from 'vue'
import articles from '../assets/json/articles.json'
import projects from '../assets/json/projects.json'
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

const articlesContent: any = ref(articles)
const projectsContent: any = ref(projects)
const heightPicker:any = ref({})

function subtractHeight(project: string){
    if(!heightPicker.value[project]) {
        heightPicker.value[project] = {}
        heightPicker.value[project].height = 700
    }
    heightPicker.value[project].height -= 100
}
function addHeight(project: string){
    if(!heightPicker.value[project]) {
        heightPicker.value[project] = {}
        heightPicker.value[project].height = 700
    }
    heightPicker.value[project].height += 100
}
</script>

<style lang="scss">
.content-container {
    padding: 2rem;
}
.article-container:first-child {
    margin-top: 0rem;
}
.article-container {
    margin-top: 2rem;
}

.skills-list {
    background-color: #12b2c036;
    padding: 1.5rem;
    padding-bottom: 1rem;
    margin-top: 0.5rem;
    border-radius: 20px;
    list-style: none;
    width: fit-content;
}
li {
    list-style: disc;
    margin: -0.5rem;
}
.tech {
    font-size: 1.3rem;
    color: rgb(52, 66, 66);
}

/* The device with borders */
.smartphone {
    position: relative;
    width: 260px;
    height: 440px;
    margin: auto;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
    box-shadow: 10px 10px 20px !important;
}

/* The horizontal line on the top of the device */
.smartphone:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
    width: 228px;
    height: 320px;
    background: rgb(255, 255, 255);
}
// .wrap {
//     width: 600px;
//     height: 390px;
//     padding: 0;
//     overflow: hidden;
// }
// .frame {
//     width: 360px;
//     height: 640px;
//     border: 1px solid black;
// }
$scale: 0.64;
.frame {
    width: 600px;
    height: 800px;
    border: 0;
    transform: scale(0.38, 0.4);

    -ms-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.big-frame {
    width: 100%;
    height: 100%;

    border: 0;
}
.mobile-frame {
    width: 100%;
    border: none;
    height: 100%;
}
</style>
