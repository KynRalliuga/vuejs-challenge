import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    changePage: {
      type: Function as PropType<(type: "+" | "-") => void>,
      required: true,
    },
  },
});
