<template>
  <Chart
    type="doughnut"
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

const chartData = [15, 10, 65];
const backgroundColor = () => [
  colors.pending(0.6),
  colors.warning(0.6),
  colors.primary(0.6),
];
const hoverBackgroundColor = () => [
  colors.pending(0.6),
  colors.warning(0.6),
  colors.primary(0.6),
];
const borderColor = () => [
  colors.pending(0.75),
  colors.warning(0.9),
  colors.primary(0.5),
];

const data = computed(() => {
  return {
    labels: ["Html", "Vuejs", "Laravel"],
    datasets: [
      {
        data: chartData,
        backgroundColor:
          darkMode.value || colorScheme.value ? backgroundColor() : "",
        hoverBackgroundColor:
          darkMode.value || colorScheme.value ? hoverBackgroundColor() : "",
        borderWidth: 1,
        borderColor: darkMode.value || colorScheme.value ? borderColor() : "",
      },
    ],
  };
});

const options = computed(() => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: colors.slate["500"](0.8),
        },
      },
    },
    cutout: "80%",
  };
});
</script>
