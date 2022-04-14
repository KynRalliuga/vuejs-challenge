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

<script lang="ts">
import { mapState } from "pinia";
import { useMenuStore } from "../../stores/menu";

export default {
  computed: {
    ...mapState(useMenuStore, ["menuItems"]),
  },
};
</script>
