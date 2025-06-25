<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAxios } from './composables/useAxios'
import { useTimeSlotStore } from './stores/useTimeSlotStore'
import { format } from 'date-fns'
import TimeSlotCard from './components/TimeSlotCard.vue'

const timeSlotStore = useTimeSlotStore()

const loading = ref(false)
const timeSlots = computed({
  get: () => timeSlotStore.timeSlots,
  set: (value) => (timeSlotStore.timeSlots = value)
})
const groupedTimeSlots = computed(() => timeSlotStore.groupedTimeSlots)

async function fetchTimeSlots() {
  try {
    loading.value = true
    const { data } = await useAxios().get('/timeSlots')
    // timeSlots.value = data
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
  <div class="lg:container mx-auto">
    <div class="min-h-screen p-6">
      <h1 class="text-2xl font-bold mb-6">Time Slots Dashboard</h1>

      <div class="flex gap-4">
        <div
          v-for="item in groupedTimeSlots"
          :key="`day-${item.date}`"
          class="flex-grow text-center"
        >
          <h2
            class="sticky top-0 text-xl font-semibold text-gray-700 bg-white p-2 rounded-lg shadow z-[1]"
          >
            <span>{{ format(new Date(item.date), 'EEEE') }}</span>
            <br />
            <span class="whitespace-nowrap">
              {{ format(new Date(item.date), 'MMMM d') }}
            </span>
          </h2>

          <div
            class="flex flex-col gap-2 border border-gray-200 bg-gray-50 pt-4 -mt-2"
          >
            <TimeSlotCard
              v-for="(t, index) in item.slots"
              :key="`h-${index}`"
              :timeSlot="t"
            />
          </div>
        </div>
      </div>
      <div v-if="loading" class="mt-4 text-center text-gray-500">
        Loading...
      </div>
    </div>
  </div>
</template>
