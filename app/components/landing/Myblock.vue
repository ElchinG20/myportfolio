<!-- <template>
 <UPageSection>
  <UPageCard
    title="Скоро обновление"
    description="Скоро на этой странице появится обновление. Следите за новостями."
    icon="svg-spinners:gooey-balls-2"
    orientation="horizontal"
    spotlight spotlight-color="secondary"
  >
  <img src="/hero/ra-100.jpg" alt="Эльчин Гасанов" class="w-full" />
  </UPageCard>
 </UPageSection>
</template> -->

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
  {
    date: 'Mar 15, 2025',
    title: 'Project Kickoff',
    description: 'Kicked off the project with team alignment.',
    icon: 'i-lucide-rocket'
  },
  {
    date: 'Mar 22 2025',
    title: 'Design Phase',
    description: 'User research and design workshops.',
    icon: 'i-lucide-palette'
  },
  {
    date: 'Mar 29 2025',
    title: 'Development Sprint',
    description: 'Frontend and backend development.',
    icon: 'i-lucide-code'
  },
  {
    date: 'Apr 5 2025',
    title: 'Testing & Deployment',
    description: 'QA testing and performance optimization.',
    icon: 'i-lucide-check-circle'
  }
])
</script>

<template>
  <UTimeline orientation="horizontal" :default-value="2" :items="items" class="w-full" />
</template>

