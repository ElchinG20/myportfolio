
<template>
  <button @click="loginWithYandex" class="yandex-btn">
    <img src="/yandex-logo.svg" alt="Яндекс" class="w-5 h-5 mr-2" />
    Войти через Яндекс
  </button>
</template>

<script setup >
const { data: page } = await useAsyncData('YandexLoginButton', () => {
  return queryCollection('YandexLoginButton').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Страница не найдена',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})


const runtimeConfig = useRuntimeConfig();

const loginWithYandex = () => {
  const clientId = runtimeConfig.yaClientId;
  const redirectUri = runtimeConfig.public.yaRedirectUri;

  const authUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  window.location.href = authUrl;
};
</script>

<style>
.yandex-btn {
  @apply bg-[#ffcc00] text-black px-4 py-2 rounded-md flex items-center;
}
.yandex-btn:hover {
  @apply bg-[#e6b800];
}
</style>
