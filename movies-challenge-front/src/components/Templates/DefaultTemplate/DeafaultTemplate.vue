<script setup lang="ts">
import HeaderTitle from "../../HeaderTitle";
import MenuNav from "../../MenuNav";
</script>

<template>
  <main class="container mx-auto py-8">
    <HeaderTitle />
    <MenuNav class="pb-10" />
    <slot />
  </main>
</template>
