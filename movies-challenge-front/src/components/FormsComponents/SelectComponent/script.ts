import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Option } from "./types";

export default defineComponent({
  props: {
    placeholder: String,
    value: String,
    onChange: Function as PropType<((payload: Event) => void) | undefined>,
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
  },
});
