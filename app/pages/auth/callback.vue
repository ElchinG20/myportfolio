<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
const runtimeConfig = useRuntimeConfig();

// Получаем код из URL
const route = useRoute();
const code = route.query.code;

if (!code) {
  alert('Ошибка: код авторизации не получен');
  router.push('/');
  return;
}

try {
  // Отправляем код на сервер для обмена на токен
  const response = await $fetch('/api/auth/yandex', {
    method: 'POST',
    body: { code }
  });

  // Сохраняем токен
  localStorage.setItem('yandexToken', response.accessToken);

  // Переходим на главную страницу
  router.push('/dashboard');
} catch (error) {
  console.error('Ошибка авторизации:', error);
  alert('Не удалось войти через Яндекс');
  router.push('/');
}
</script>

<template>
  <div>Обработка входа через Яндекс...</div>
</template>
