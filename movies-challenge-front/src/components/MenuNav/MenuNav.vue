<template>
  <nav class="flex sm:justify-center space-x-4">
    <RouterLink
      :to="{ name: menuItem.route }"
      v-for="menuItem in menuItems"
      :key="menuItem.route"
      className="rounded-lg px-3 py-2 font-medium text-lg"
      >{{ menuItem.title }}</RouterLink
    >
  </nav>
</template>

<script src="./script" lang="ts" />
