<template>
  <button @click="loginWithYandex" class="yandex-btn">
    Войти через Яндекс
  </button>
</template>

<script setup>
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
  background-color: #ffcc00;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.yandex-btn:hover {
  background-color: #e6b800;
}
</style>
