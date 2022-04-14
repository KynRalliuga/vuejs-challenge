<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      Choose between the options daily and weekly to see the best movies in this
      period of time
    </div>
    <div class="text-right">
      <SelectComponent
        placehoder="Select the period"
        :onChange="movieStore.changeTimeWindow"
        :value="movieStore.time_window"
        :options="movieStore.options"
      />
    </div>
  </div>
</template>

<script src="./script" lang="ts" />
