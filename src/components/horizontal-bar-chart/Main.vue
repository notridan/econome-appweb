<template>
  <Chart
    type="bar"
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
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Html Template",
        barPercentage: 0.4,
        borderWidth: 1,
        data: [0, 200, 250, 200, 500, 450, 850, 1050],
        borderColor: colorScheme.value ? colors.primary(0.7) : "",
        backgroundColor: colorScheme.value ? colors.primary(0.2) : "",
      },
      {
        label: "VueJs Template",
        barPercentage: 0.4,
        borderWidth: 1,
        data: [0, 300, 400, 560, 320, 600, 720, 850],
        borderColor: darkMode.value
          ? colors.darkmode["200"]()
          : colors.slate["400"](),
        backgroundColor: darkMode.value
          ? colors.darkmode["200"](0.1)
          : colors.slate["400"](0.1),
      },
    ],
  };
});

const options = computed(() => {
  return {
    indexAxis: "y",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: colors.slate["500"](0.8),
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: colors.slate["500"](0.8),
          callback: function (value, index, values) {
            return "$" + value;
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          color: colors.slate["500"](0.8),
        },
        grid: {
          color: darkMode.value
            ? colors.slate["500"](0.3)
            : colors.slate["400"](),
          borderDash: [2, 2],
          drawBorder: false,
        },
      },
    },
  };
});
</script>
