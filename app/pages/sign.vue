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

<script setup lang="ts">
import type { UserProps } from '@nuxt/ui'

const members: UserProps[] = [
  {
    name: 'Эльчин Гасанов',
    description: 'ElchinG20',
    to: 'https://github.com/ElchinG20',
    target: '_blank',
    avatar: {
      src: '/hero/ra-100.jpg',
      alt: 'Эльчин Гасанов'
    }
  },
  {
    name: 'Николай Восков',
    description: 'pi0',
    to: 'https://github.com/pi0',
    target: '_blank',
    avatar: {
      src: 'https://github.com/pi0.png',
      alt: 'Николай Восков'
    }
  },
  {
    name: 'Оливер Харвин',
    description: 'atinux',
    to: 'https://github.com/atinux',
    target: '_blank',
    avatar: {
      src: 'https://github.com/atinux.png',
      alt: 'Оливер Харвин'
    }
  },
  {
    name: 'Герман Нейман',
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

<template>
  <UBanner
    title="Мы в процессе крутого апгрейда. Скоро релиз!"
    close
    close-icon="i-lucide-x-circle"
  />
  <UEmpty
    title="Скоро будет круто 😎"
    description="В данный момент мы колдуем над сайтом. Магия требует времени!"
    variant="naked"
    :actions="[{
      label: 'Обновить',
      icon: 'svg-spinners:gooey-balls-2',
      color: 'neutral',
      link: 'cursor-pointer',
    }]"
  >
    <template #leading>
      <UAvatarGroup size="xl">
        <UAvatar src="/favicon.ico" alt="Эльчин Гасанов" />
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


