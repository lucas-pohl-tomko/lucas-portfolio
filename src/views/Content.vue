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
</template>

<script lang="ts">
// @ts-ignore
import articles from '../assets/json/articles'
export default {
    data: () => {
        return { articles: articles }
    }
}
</script>

<style lang="scss">
.content-container {
    padding: 2rem;
}
.article-container {
}
</style>
