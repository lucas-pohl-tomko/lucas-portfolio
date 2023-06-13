<template>
    <div class="content-container">
        <div class="article-container" v-for="(article, index) in articles.articles" :key="index">
        {{ article.header }}
        </div>
    </div>
</template>

<script lang="ts">
import articles from '../assets/json/articles'
export default {
    data: () => {
        return { articles: articles }
    }
}
</script>

<style lang="scss">
.article-container {

}
.content-container {
}
</style>