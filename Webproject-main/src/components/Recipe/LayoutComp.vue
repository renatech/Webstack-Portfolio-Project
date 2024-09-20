<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['loadMore', 'refresh'])

const props = withDefaults(defineProps<{ isLoading?: boolean }>(), {
  isLoading: false
})

const isLoading = computed(() => {
  return props.isLoading
})

const loadMore = () => {
  emit('loadMore')
}

const refresh = () => {
  emit('refresh')
}
</script>
<template>
  <div class="min-h-screen border-8 border-orange-500 bg-slate-50 px-5 py-5">
    <!-- header -->
    <header
      class="sticky top-0 mx-auto flex max-w-7xl items-center justify-between rounded-full bg-slate-50/25 px-4 py-2 backdrop-blur-md"
    >
      <div>
        <h1 class="font-serif text-orange-600">HotOven</h1>
        <p class="-mt-1 text-[0.5rem] uppercase tracking-[0.3rem]">Recipes</p>
      </div>

      <button
        @click="refresh"
        :disabled="isLoading"
        class="flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-xs font-bold tracking-tight text-slate-500 hover:border-orange-500 hover:text-orange-500"
      >
        Refresh list

        <i>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.077 19q-2.931 0-4.966-2.033q-2.034-2.034-2.034-4.964t2.034-4.966T12.077 5q1.783 0 3.339.847q1.555.847 2.507 2.365V5h1v5.23h-5.23v-1h3.7q-.782-1.495-2.198-2.363T12.077 6q-2.5 0-4.25 1.75T6.077 12t1.75 4.25t4.25 1.75q1.925 0 3.475-1.1t2.175-2.9h1.062q-.662 2.246-2.514 3.623T12.077 19"
            />
          </svg>
        </i>
      </button>
    </header>

    <section class="mx-auto mt-9 min-h-[70vh] max-w-7xl">
      <slot />
    </section>

    <div class="mx-auto mt-9 max-w-sm">
      <button
        @click="loadMore"
        v-if="!isLoading"
        class="flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 px-3 py-2 text-center text-sm font-bold tracking-tight text-orange-50 transition-colors duration-300 ease-linear hover:bg-orange-500"
      >
        Load More Recipies
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z" />
          </svg>
        </i>
      </button>
    </div>
  </div>
</template>
