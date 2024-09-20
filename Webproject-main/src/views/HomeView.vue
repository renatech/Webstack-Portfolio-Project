<script setup lang="ts">
import Layout from '../components/Recipe/LayoutComp.vue'
import RecipeCard from '../components/Recipe/ItemCard.vue'
import RecipeShimmer from '../components/Recipe/ShimmerComp.vue'
import { fetchRecipes } from '../utils/actions/recipies'
import type { IRecipeResponse, Result } from '../utils/types/Recipes'
import { ref, onMounted, reactive } from 'vue'

const isLoading = ref(true)

const recipes = ref<Result[]>([])

const startPage = ref(0)

const payload = reactive({
  from: 0,
  size: 20
})

const loadMore = () => {
  payload.from += payload.size
  handleRecipeFetch(
    (result: Result[]) => {
      result.length < 1 && (payload.from -= payload.size)
    },
    () => {
      payload.from -= payload.size
    }
  )
}

const refresh = () => {
  payload.from = 0
  recipes.value = []
  handleRecipeFetch()
}

const handleRecipeFetch = (
  callback: Function = (results: Result[]) => {},
  errorCallback: Function = () => {}
) => {
  isLoading.value = true
  fetchRecipes(payload)
    .then((data) => {
      const response = data as IRecipeResponse
      callback(response.results)
      recipes.value = [...recipes.value, ...response.results]
    })
    .catch((error) => {
      errorCallback
    })
    .finally(() => {
      isLoading.value = false
    })
}

onMounted(() => {
  handleRecipeFetch()
})
</script>

<template>
  <Layout @loadMore="loadMore" @refresh="refresh" :isLoading="isLoading">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <!-- Recipe card   -->
      <RecipeCard v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
    </div>

    <div v-if="isLoading" class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5">
      <!-- Loading shimmer -->
      <RecipeShimmer v-for="i in 8" :key="i" />
    </div>
  </Layout>
</template>
