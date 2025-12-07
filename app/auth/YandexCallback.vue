<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (!code) {
    console.error('Код авторизации не получен');
    return;
  }

  try {
    // Отправляем код на ваш сервер для обмена на токен
    const response = await axios.post('/api/auth/yandex/token', { code });
    const { accessToken } = response.data;

    // Сохраняем токен (например, в localStorage)
    localStorage.setItem('yandexToken', accessToken);

    // Получаем данные пользователя
    const userResponse = await axios.get('https://login.yandex.ru/info', {
      headers: {
        Authorization: `OAuth ${accessToken}`
      }
    });

    console.log('Пользователь:', userResponse.data);
    // Перенаправляем на главную страницу
    window.location.href = '/';
  } catch (error) {
    console.error('Ошибка авторизации:', error);
  }
});
</script>
