<script setup lang="ts">
import { computed } from 'vue'
import { useTimeSlotStore } from '../stores/useTimeSlotStore'
import { format } from 'date-fns'
import TimeSlotCard from './TimeSlotCard.vue'

const timeSlotStore = useTimeSlotStore()
const loading = computed(() => timeSlotStore.loading)
const groupedTimeSlots = computed(() => timeSlotStore.groupedTimeSlots)
</script>

<template>
  <div>
    <div v-if="loading" class="mt-4 text-center text-gray-500">Loading...</div>
    <div v-else class="flex flex-col lg:flex-row gap-4">
      <div
        v-for="(item, index) in groupedTimeSlots"
        :key="`timeslot-column-key-${index}`"
        class="flex-grow text-center"
      >
        <h2
          class="sticky top-0 text-xl font-semibold text-gray-700 bg-white p-2 rounded-lg shadow z-[1]"
        >
          <span>{{ format(new Date(item.date), 'EEEE') }}</span
          >,
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
            :key="`timeslot-card-key-${index}`"
            :timeSlot="t"
          />
        </div>
      </div>
    </div>
  </div>
</template>
