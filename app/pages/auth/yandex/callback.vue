<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

// Получаем code из URL
const route = useRoute();
const code = route.query.code as string;

if (!code) {
  alert('Ошибка: код авторизации не получен');
  router.push('/');
  return;
}

try {
  // Отправляем code на серверный эндпоинт
  const response = await $fetch('/api/auth/yandex', {
    method: 'POST',
    body: { code }
  });

  // Сохраняем токен
  localStorage.setItem('yandexToken', response.accessToken);

  // Получаем данные пользователя
  const userResponse = await $fetch('https://login.yandex.ru/info', {
    headers: {
      Authorization: `OAuth ${response.accessToken}`
    }
  });

  console.log('Пользователь:', userResponse);
  router.push('/dashboard'); // перенаправление после входа
} catch (error) {
  console.error('Ошибка авторизации:', error);
  alert('Не удалось войти через Яндекс');
  router.push('/');
}
</script>

<template>
  <div class="p-4">
    <p>Обработка входа через Яндекс...</p>
  </div>
</template>

