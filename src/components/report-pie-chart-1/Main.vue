<template>
  <Chart
    type="pie"
    :width="width"
    :height="height"
    :data="data"
    :options="options"
  />
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "@/stores/dark-mode";
import { useColorSchemeStore } from "@/stores/color-scheme";
import { colors } from "@/utils/colors";

const props = defineProps({
  width: {
    type: [Number, String],
    default: "auto",
  },
  height: {
    type: [Number, String],
    default: "auto",
  },
});

const darkMode = computed(() => useDarkModeStore().darkMode);
const colorScheme = computed(() => useColorSchemeStore().colorScheme);

const data = computed(() => {
  const configData = {
    labels: ["17 - 30 Years old", "31 - 50 Years old", ">= 50 Years old"],
    datasets: [
      {
        data: [15, 10, 65],
        backgroundColor: colorScheme.value
          ? [colors.pending(0.5), colors.warning(0.5), colors.primary(0.5)]
          : "",
        hoverBackgroundColor: colorScheme.value
          ? [colors.pending(0.5), colors.warning(0.5), colors.primary(0.5)]
          : "",
        borderWidth: 1,
        borderColor: colorScheme.value
          ? [colors.pending(0.75), colors.warning(0.9), colors.primary(0.5)]
          : "",
      },
    ],
  };

  return darkMode.value ? configData : configData;
});

const options = computed(() => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
});
</script>
