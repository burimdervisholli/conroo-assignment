<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAxios } from './composables/useAxios'
import { useTimeSlotStore } from './stores/useTimeSlotStore'

const timeSlotStore = useTimeSlotStore()

const loading = ref(false)
const timeSlots = computed({
  get: () => timeSlotStore.timeSlots,
  set: (value) => (timeSlotStore.timeSlots = value)
})

async function fetchTimeSlots() {
  try {
    loading.value = true
    const { data } = await useAxios().get('/timeSlots')
    timeSlots.value = data
  } catch (e) {
    console.error('Error fetching time slots: ', e)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await fetchTimeSlots()
})
</script>

<template>
  <!-- create a beautiful layout using tailwind like a dashboard with timeslots cards -->
  <div class="container mx-auto">
    <div class="min-h-screen p-6">
      <h1 class="text-2xl font-bold mb-6">
        Time Slots Dashboard
        <span class="text-xs font-normal text-gray-500">
          {{ timeSlots.length }} Time Slots Available
        </span>
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="timeSlot in timeSlots"
          :key="timeSlot.id"
          class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
        >
          <h2 class="text-xl font-semibold">{{ timeSlot.id }}</h2>
        </div>
      </div>
      <div v-if="loading" class="mt-4 text-center text-gray-500">
        Loading...
      </div>
    </div>
  </div>
</template>
