import type { NavigationMenuItem } from '@nuxt/ui';
import { icons as mdiIcons } from "@iconify-json/mdi";
import { icons as mdiLightIcons } from "@iconify-json/mdi-light";

export const navLinks: NavigationMenuItem[] = [{
  label: 'Главная',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Проекты',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Блог',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'Публикации',
  icon: 'bxl:slack',
  to: '/speaking'
}, {
  label: 'Обо мне',
  icon: 'i-lucide-user',
  to: '/about'
}]
