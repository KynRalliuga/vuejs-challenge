<template>
  <div class="pagination">
    <button
      @click="() => changePage('-')"
      :class="`mx-2 px-6 py-2 bg-black hover:bg-black/[0.4] rounded-md`"
    >
      Previous
    </button>
    <button
      @click="() => changePage('+')"
      class="mx-2 mr-8 px-6 py-2 bg-black hover:bg-black/[0.4] rounded-md"
    >
      Next
    </button>
    {{ page }} of {{ totalPages }}
  </div>
</template>

<script src="./script" lang="ts" />
