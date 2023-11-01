<template>
  <div class="flex">
    <div class="card">
      <Menu :model="items" class="w-16rem">
        <template #start>
          <button class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <div class="flex flex-column align">
              <span class="font-bold">Amy Elsner</span>
              <span class="text-sm">Administrateur</span>
            </div>
          </button>
        </template>
        <template #item="{ item, label, props }">
          <router-link v-if="item.route" v-slot="routerProps" :to="item.route">
            <a :href="routerProps.href" v-bind="props.action">
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ label }}</span>
              <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            </a>
          </router-link>
          <a v-else  class="flex" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
          </a>
        </template>
        <template #end>
          <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
            <i class="pi pi-sign-out" />
            <span class="ml-2">Déconnexion</span>
          </button>
        </template>
      </Menu>
    </div>
    <div class="flex-1 p-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

import Menu from 'primevue/menu'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import { PrimeIcons } from 'primevue/api';

const items = ref([
  { separator: true },
  { label: 'Tableau de board', icon: PrimeIcons.HOME, route: '/' },
  { label: 'Déclarations', icon: PrimeIcons.MEGAPHONE, badge: 2, route: '/declarations' },
  { label: 'Parcelles', icon: PrimeIcons.SITEMAP, route: '/plots' },
  { label: 'Utilisateurs', icon: PrimeIcons.USERS, route: 'users' },
  {
    label: 'Profile',
    icon: PrimeIcons.USER
  },
  {
    label: 'Paramètres',
    icon: PrimeIcons.COG,
  },
  { separator: true }
])
</script>

<style scoped>
:deep() .p-menu {
  border-radius: 0px !important;
}

a {
  text-decoration: none;
}
</style>
