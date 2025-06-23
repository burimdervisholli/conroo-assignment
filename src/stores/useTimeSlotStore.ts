import { defineStore } from 'pinia'
import { type TimeSlot } from '../types/timeSlot'

export const useTimeSlotStore = defineStore('timeSlot', {
  state: () => ({
    timeSlots: [] as TimeSlot[]
  }),
  actions: {
    updateTimeSlots(timeSlot: TimeSlot) {
      const matchIndex = this.timeSlots.findIndex(
        (slot) => slot.id === timeSlot.id
      )
      if (matchIndex !== -1) {
        this.timeSlots[matchIndex] = timeSlot
      }
    },
    clearTimeSlots() {
      this.timeSlots = []
    }
  }
})
