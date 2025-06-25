<script setup lang="ts">
import { onMounted } from 'vue'
import { useTimeSlotStore } from './stores/useTimeSlotStore'
import TimeSlots from './components/TimeSlots.vue'
import { useSSE } from './composables/useSSE'

const timeSlotStore = useTimeSlotStore()

useSSE((data) => {
  timeSlotStore.updateTimeSlots(data)
})

onMounted(async () => {
  await timeSlotStore.fetchTimeSlots()
})
</script>

<template>
  <div class="lg:container mx-auto">
    <div class="min-h-screen p-6">
      <TimeSlots />
    </div>
  </div>
</template>
