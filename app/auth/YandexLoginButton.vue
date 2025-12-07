<template>
  <button @click="loginWithYandex" class="yandex-btn">
    Войти через Яндекс
  </button>
</template>

<script setup>
const loginWithYandex = () => {
  const clientId = '4db5a2205f204bb5b7972ce7f52ee6a4'; // замените на ваш Client ID
  const redirectUri = 'https://ваш-сайт.ru/auth/yandex/callback'; // ваш callback URI
  
  const authUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  
  window.location.href = authUrl; // перенаправление на страницу авторизации Яндекса
};
</script>

<style>
.yandex-btn {
  background-color: #ffcc00;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
