<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { type TimeSlot } from '../types/timeSlot'

const { timeSlot } = defineProps<{
  timeSlot: TimeSlot
}>()

const color = computed(() => {
  return (
    {
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500'
    }[timeSlot.category] || 'bg-gray-100'
  )
})

const progressBarWidth = computed(() => {
  const current = timeSlot.capacity.current_capacity
  const max = timeSlot.capacity.max_capacity
  return max > 0 ? `${(current / max) * 100}%` : '0%'
})
</script>

<template>
  <div class="flex flex-col border-b border-gray-200 text-gray-700">
    <span class="text-lg font-medium rounded-t-lg white-space-nowrap">
      {{ format(timeSlot.start_time, 'HH:mm') }} -
      {{ format(timeSlot.end_time, 'HH:mm') }}
    </span>
    <div class="flex items-center gap-2 items-center justify-center pb-2">
      <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full transition-all"
          :class="color"
          :style="{
            width: progressBarWidth
          }"
        ></div>
      </div>
      <span class="w-[50px] text-center text-sm">
        {{ timeSlot.capacity.current_capacity }} /
        {{ timeSlot.capacity.max_capacity }}
      </span>
    </div>
  </div>
</template>
