<script setup lang="ts">
const { data: page } = await useAsyncData('sign', () => {
  return queryCollection('sign').first()
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

const members: UserProps[] = [
  {
    name: 'Эльчин Г.',
    description: 'ElchinG20',
    to: 'https://github.com/ElchinG20',
    target: '_blank',
    avatar: {
      src: '/hero/ra-100.jpg',
      alt: 'Эльчин Гасанов'
    }
  },
  {
    name: 'Николай В.',
    description: 'pi0',
    to: 'https://github.com/pi0',
    target: '_blank',
    avatar: {
      src: 'https://github.com/pi0.png',
      alt: 'Николай Восков'
    }
  },
  {
    name: 'Оливер Х.',
    description: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'Оливер Харвин'
    }
  },
  {
    name: 'Герман Н.',
    description: 'benjamincanac',
    to: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'Герман Нейман'
    }
  }
]
</script>
<script setup>
const loginWithYandex = () => {
  const clientId = '4db5a2205f204bb5b7972ce7f52ee6a4';
  const redirectUri = 'https://elchin.vercel.app/id-open';
  
  const authUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  
  window.location.href = authUrl;
};
</script>

<template>
  <!-- <UBanner
    title="Мы в процессе крутого апгрейда"
    close
    close-icon="i-lucide-x-circle"
  /> -->
  <UBanner
    color="secondary"
    title="Мы в процессе крутого апгрейда"
    icon="svg-spinners:blocks-shuffle-3"
    class="rounded-lg"
    close
  />
<br>
  <UEmpty
    :ui="{
      container: 'px-0 !pt-0 gap-4 sm:gap-4',
      title: 'text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
    title="Скоро будет круто 😎"
    description="В данный момент мы колдуем над сайтом. Магия требует времени!"
    variant="naked"
    :actions="[{ 
      label: 'Обновить',
      icon: 'svg-spinners:gooey-balls-2',
      color: 'neutral',
      class: 'cursor-pointer',
      click: 'loginWithYandex'
    }]"
  >
    <template #leading>
      <UAvatarGroup size="xl">
        <UAvatar src="/hero/LOGO_ELCHIN_GASANOV.svg" alt="Эльчин Гасанов" />
      </UAvatarGroup>
    </template>

    <template #footer>
      <USeparator class="my-4" />

      <div class="grid grid-cols-2 gap-4">
        <UPageCard
          v-for="(member, index) in members"
          :key="index"
          :to="member.to"
          :ui="{ container: 'sm:p-4' }"
        >
          <UUser
            :avatar="member.avatar"
            :name="member.name"
            :description="member.description"
            :ui="{ name: 'truncate' }"
          />
        </UPageCard>
      </div>
    </template>
  </UEmpty>
</template>


<!-- <template>
    <UBanner
    title="Мы в процессе крутого апгрейда. Скоро релиз!"
    close
    close-icon="i-lucide-x-circle"
  />
 <UPageSection
    title="Скоро обновление"
    description="Скоро на этой странице появится обновление. Следите за новостями."
    icon="svg-spinners:gooey-balls-2"
    orientation="horizontal"
    spotlight spotlight-color="secondary"
  >
  <img src="/hero/ra-100.jpg" alt="Эльчин Гасанов" class="w-full" />

 </UPageSection>
</template> -->