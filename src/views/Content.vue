<template>
    <div class="content-container">
        <div class="article-container" v-for="(article, index) in articles.articles" :key="index" :id="article.id">
            <h1>
                {{ article.header }}
            </h1>
            <p v-html="article.content" class="fs-4 my-5">
            </p>
        </div>
    </div>
    
    <div class="content-container">
        <h1>Projetos</h1>
        <v-divider></v-divider>
        <div class="article-container" v-for="(project, index) in projects" :key="index" :id="project.project">
            <h1>
                {{ project.name }}
            </h1>
            <p v-html="project.description" class="fs-4 my-5">
            </p>
            <a target="_blank" :href="project.link"><h4> {{project.project}}</h4></a>
            <v-img class="" :src="project.pictures[0]" alt="" srcset=""></v-img>
        </div>
    </div>
</template>

<script lang="ts">
// @ts-ignore
import articles from '../assets/json/articles'
import projects from '../assets/json/projects.json'
export default {
    data: () => {
        return { articles: articles,projects: projects }
    }
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

.skills-list{
    background-color: #12b2c036;
    padding: 1.5rem;
    padding-bottom: 1rem;
    margin-top: .5rem;
    border-radius: 20px;
    list-style: none;
    width: fit-content;
}
li{
    list-style:disc;
    margin: -.5rem;
}
.tech{
    font-size: 1.3rem;
    color: rgb(52, 66, 66);
}
</style>
