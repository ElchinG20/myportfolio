<template>
 <UPageSection>
  <UPageCard
    title="Скоро обновление"
    description="Скоро на этой странице появится обновление. Следите за новостями."
    icon="svg-spinners:gooey-balls-2"
    orientation="horizontal"
    spotlight spotlight-color="secondary"
  >
    <UAvatar class="rounded-none squircle" src="/hero/ra-100.jpg" alt="Эльчин Гасанов" />
    <style>
      .squircle {
        mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
        mask-size: contain;
        mask-position: center;
        mask-repeat: no-repeat;
      }
    </style>
  </UPageCard>
 </UPageSection>
</template>
