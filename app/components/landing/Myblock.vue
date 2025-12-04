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



<!-- <script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
  {
    date: 'Nov 30, 2025',
    title: 'Запуск проекта',
    description:
      'Идея проекта. Установил контрольные точки и распределил ресурсы.',
    icon: 'i-lucide-rocket',
    value: 'kickoff'
  },
  {
    date: 'Dec 02, 2025',
    title: 'Исследования и дизайн',
    description:
      'Созданы макеты дизайна и прототипы для тестирования.',
    icon: 'i-lucide-palette',
    value: 'design'
  },
  {
    date: 'Dec 10, 2025',
    title: 'Спринт разработки',
    description:
      'Разработка интерфейса и серверной части. Реализованы основные функции и интеграция с API.',
    icon: 'i-lucide-code',
    value: 'development'
  },
  {
    date: 'Dec 30, 2025',
    title: 'Тесты и внедрение',
    description: 'Тесты качества и оптимизация производительности. Проект в пилоте.',
    icon: 'i-lucide-check-circle',
    value: 'deployment'
  }
]

const active = ref(0)


onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % items.length
  }, 2000)
})
</script>

<template>
  <UPageSection>
    <UTimeline orientation="horizontal" v-model="active" :items="items" class="w-full" />
  </UPageSection>
</template> -->

<template>
<UPageSection>
  <UPricingPlan
    title="Пора войти и зажечь!"
    description="Время встретиться с друзьями. Твоё пространство уже ждёт"
    price="Бесплатно"
    :features="[
      'Комьюнити разработчиков',
      'Неограниченное количество проектов',
      'Доступ к репозиториям',
      'Бесплатно и децентрализованно'
    ]"
    
    :button="{
      Id: '#myblock',
      label: 'Войти',
      path: '/', hash: '#myblock'
    }"
    orientation="horizontal"
    tagline="Подключиться к хабу"
    terms="Открывай дверь в мир возможностей!"
  />
</UPageSection>
</template>



