<template>
  <select
    class="block appearance-none w-full bg-black/[0.3] border border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight"
    @change="onChange"
  >
    <option value="" v-if="placeholder">{{ placeholder }}</option>
    <option
      :value="option.value"
      v-for="option in options"
      :key="option.value"
      :selected="option.value === value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script src="./script" lang="ts" />
