import { defineStore } from 'pinia'
import { type TimeSlot, type timeSlotUpdateReponse } from '../types/timeSlot'
import { format } from 'date-fns'
import { useAxios } from '../composables/useAxios'

export const useTimeSlotStore = defineStore('timeSlot', {
  state: () => ({
    loading: false,
    errors: [] as string[],
    timeSlots: [] as TimeSlot[]
  }),
  getters: {
    groupedTimeSlots(state): { date: Date; slots: TimeSlot[] }[] {
      if (state.timeSlots.length === 0) return []

      const slotsByDate: Record<string, TimeSlot[]> = {}
      state.timeSlots.forEach((slot) => {
        const date =
          typeof slot.start_time === 'string'
            ? new Date(slot.start_time)
            : slot.start_time
        const dateKey = format(date, 'yyyy-MM-dd')
        if (!slotsByDate[dateKey]) {
          slotsByDate[dateKey] = []
        }
        slotsByDate[dateKey].push(slot)
      })

      return Object.entries(slotsByDate)
        .map(([dateStr, slots]) => ({
          date: new Date(dateStr),
          slots: slots.sort((a, b) => {
            const aDate =
              typeof a.start_time === 'string'
                ? new Date(a.start_time)
                : a.start_time
            const bDate =
              typeof b.start_time === 'string'
                ? new Date(b.start_time)
                : b.start_time
            return (
              aDate.getHours() * 60 +
              aDate.getMinutes() -
              (bDate.getHours() * 60 + bDate.getMinutes())
            )
          })
        }))
        .sort((a, b) => a.date.getTime() - b.date.getTime())
    }
  },
  actions: {
    async fetchTimeSlots() {
      try {
        this.loading = true
        const { data } = await useAxios().get('/timeSlots')
        this.timeSlots = data
      } catch (e) {
        this.errors.push('Error fetching time slots')
      } finally {
        this.loading = false
      }
    },
    updateTimeSlots(timeSlot: timeSlotUpdateReponse) {
      const matchIndex = this.timeSlots.findIndex(
        (slot) => slot.id === timeSlot.id
      )
      // If the time slot exists, update current_capacity and category
      if (matchIndex !== -1) {
        this.timeSlots[matchIndex].capacity.current_capacity =
          timeSlot.currentCapacity
        this.timeSlots[matchIndex].category = timeSlot.category
      }
    },
    clearTimeSlots() {
      this.timeSlots = []
    }
  }
})
