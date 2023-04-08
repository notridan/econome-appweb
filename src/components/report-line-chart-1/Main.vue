<template>
  <Chart
    type="line"
    :width="width"
    :height="height"
    :data="data"
    :options="options"
    ref-key="reportLineChart1Ref"
  />
</template>

<script setup>
import { computed, ref, provide } from "vue";
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
const reportLineChart1Ref = ref();

provide("bind[reportLineChart1Ref]", (el) => {
  reportLineChart1Ref.value = el;
});

const getGradient = (el) => {
  const ctx = el.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, colors.primary(0.11));
  gradient.addColorStop(1, darkMode.value ? "#28344e00" : "#ffffff01");
  return gradient;
};

const data = computed(() => {
  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [0, 350, 250, 200, 500, 450, 850, 1050, 950, 1100, 900, 1200],
        borderWidth: 1,
        borderColor: colorScheme.value ? colors.primary(0.7) : "",
        pointRadius: 3.5,
        pointBorderColor: colorScheme.value ? colors.primary(0.7) : "",
        pointBackgroundColor: darkMode.value
          ? colors.darkmode["400"]()
          : "#ffffff",
        backgroundColor: reportLineChart1Ref.value
          ? getGradient(reportLineChart1Ref.value)
          : "",
        tension: 0.3,
        fill: true,
      },
    ],
  };
});

const options = computed(() => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: colors.slate["500"](0.8),
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
          callback: function (value, index, values) {
            return "$" + value;
          },
        },
        grid: {
          color: darkMode.value
            ? colors.slate["500"](0.3)
            : colors.slate["300"](),
          borderDash: [2, 2],
          drawBorder: false,
        },
      },
    },
  };
});
</script>
