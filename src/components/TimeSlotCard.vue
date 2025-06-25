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
</script>

<template>
  <div class="flex flex-col border-b border-gray-200 text-gray-700">
    <span class="text-lg font-medium rounded-t-lg white-space-nowrap">
      {{ format(timeSlot.start_time, 'HH:mm') }} -
      {{ format(timeSlot.end_time, 'HH:mm') }}
    </span>
    <div class="flex items-center gap-2 items-center justify-center pb-2">
      <span class="block size-2 rounded-full" :class="color"></span>
      <span>
        {{ timeSlot.capacity.current_capacity }} /
        {{ timeSlot.capacity.max_capacity }}
      </span>
    </div>
  </div>
</template>
