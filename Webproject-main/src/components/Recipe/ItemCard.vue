<script setup lang="ts">
import { ref } from 'vue'
import type { Result } from '../../utils/types/Recipes'
const prop = defineProps<{ recipe?: Result | null }>()

const truncateDesc = (desc: string) => {
  return desc.substring(0, 100)
}
</script>
<template>
  <a
    class="duration-400 group flex flex-col gap-4 rounded-3xl border border-transparent bg-white px-4 py-5 transition-all ease-linear hover:border-orange-400"
    href="#"
  >
    <img
      :src="prop.recipe?.thumbnail_url || ''"
      class="h-52 rounded-2xl object-cover object-center"
      alt=""
    />

    <div class="flex flex-col gap-2">
      <h2
        class="text-sm font-bold tracking-tight text-slate-600 transition-all duration-300 ease-linear group-hover:text-orange-500"
      >
        {{ prop.recipe?.name || '' }}
      </h2>

      <p class="text-xs text-slate-400">{{ truncateDesc(prop.recipe?.description || '') }}....</p>

      <div class="flex items-center justify-between">
        <div
          class="flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-600"
        >
          <i class="text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15 11h-2V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2Zm-3-9a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z"
              />
            </svg>
          </i>

          {{ prop.recipe?.total_time_minutes || 0 }} mins
        </div>

        <i class="text-slate-500 group-hover:text-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m14.83 11.29l-4.24-4.24a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29l4.24-4.24a1 1 0 0 0 0-1.42Z"
            />
          </svg>
        </i>
      </div>
    </div>
  </a>
</template>
