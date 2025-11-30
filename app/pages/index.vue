<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page />
    <LandingTestimonials :page />
  <UAvatarGroup>
    <UAvatar
      src="https://github.com/benjamincanac.png"
      alt="Benjamin Canac"
      :chip="{ inset: true, color: 'success' }"
    />

    <UAvatar
      src="https://github.com/romhml.png"
      alt="Romain Hamel"
      :chip="{ inset: true, color: 'warning' }"
    />

    <UAvatar
      src="https://github.com/noook.png"
      alt="Neil Richter"
      :chip="{ inset: true, color: 'error' }"
    />
  </UAvatarGroup>

    <LandingFAQ :page />
  </UPage>
</template>
