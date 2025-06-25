import { defineStore } from 'pinia'
import { type TimeSlot } from '../types/timeSlot'

export const useTimeSlotStore = defineStore('timeSlot', {
  state: () => ({
    timeSlots: [
      {
        id: 11,
        start_time: '2024-12-03T08:00:00Z',
        end_time: '2024-12-03T09:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 5,
          max_capacity: 50
        }
      },
      {
        id: 1,
        start_time: '2024-12-02T09:00:00Z',
        end_time: '2024-12-02T10:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 5,
          max_capacity: 50
        }
      },
      {
        id: 2,
        start_time: '2024-12-02T08:00:00Z',
        end_time: '2024-12-02T09:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      // {
      //   id: 3,
      //   start_time: '2024-12-02T10:00:00Z',
      //   end_time: '2024-12-02T11:00:00Z',
      //   category: 'green',
      //   capacity: {
      //     current_capacity: 8,
      //     max_capacity: 50
      //   }
      // },
      {
        id: 4,
        start_time: '2024-12-02T11:00:00Z',
        end_time: '2024-12-02T12:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 4,
          max_capacity: 50
        }
      },
      {
        id: 5,
        start_time: '2024-12-02T12:00:00Z',
        end_time: '2024-12-02T13:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 0,
          max_capacity: 50
        }
      },
      {
        id: 6,
        start_time: '2024-12-02T13:00:00Z',
        end_time: '2024-12-02T14:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 6,
          max_capacity: 50
        }
      },
      {
        id: 7,
        start_time: '2024-12-02T14:00:00Z',
        end_time: '2024-12-02T15:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 3,
          max_capacity: 50
        }
      },
      {
        id: 8,
        start_time: '2024-12-02T15:00:00Z',
        end_time: '2024-12-02T16:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 9,
          max_capacity: 50
        }
      },
      {
        id: 9,
        start_time: '2024-12-02T16:00:00Z',
        end_time: '2024-12-02T17:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 10,
        start_time: '2024-12-02T17:00:00Z',
        end_time: '2024-12-02T18:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 2,
          max_capacity: 50
        }
      },

      {
        id: 12,
        start_time: '2024-12-03T09:00:00Z',
        end_time: '2024-12-03T10:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 13,
        start_time: '2024-12-03T10:00:00Z',
        end_time: '2024-12-03T11:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 8,
          max_capacity: 50
        }
      },
      {
        id: 14,
        start_time: '2024-12-03T11:00:00Z',
        end_time: '2024-12-03T12:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 4,
          max_capacity: 50
        }
      },
      {
        id: 15,
        start_time: '2024-12-03T12:00:00Z',
        end_time: '2024-12-03T13:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 0,
          max_capacity: 50
        }
      },
      {
        id: 16,
        start_time: '2024-12-03T13:00:00Z',
        end_time: '2024-12-03T14:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 6,
          max_capacity: 50
        }
      },
      {
        id: 17,
        start_time: '2024-12-03T14:00:00Z',
        end_time: '2024-12-03T15:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 3,
          max_capacity: 50
        }
      },
      {
        id: 18,
        start_time: '2024-12-03T15:00:00Z',
        end_time: '2024-12-03T16:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 9,
          max_capacity: 50
        }
      },
      {
        id: 19,
        start_time: '2024-12-03T16:00:00Z',
        end_time: '2024-12-03T17:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 20,
        start_time: '2024-12-03T17:00:00Z',
        end_time: '2024-12-03T18:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 2,
          max_capacity: 50
        }
      },
      {
        id: 21,
        start_time: '2024-12-04T08:00:00Z',
        end_time: '2024-12-04T09:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 5,
          max_capacity: 50
        }
      },
      {
        id: 22,
        start_time: '2024-12-04T09:00:00Z',
        end_time: '2024-12-04T10:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 23,
        start_time: '2024-12-04T10:00:00Z',
        end_time: '2024-12-04T11:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 8,
          max_capacity: 50
        }
      },
      {
        id: 24,
        start_time: '2024-12-04T11:00:00Z',
        end_time: '2024-12-04T12:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 4,
          max_capacity: 50
        }
      },
      {
        id: 25,
        start_time: '2024-12-04T12:00:00Z',
        end_time: '2024-12-04T13:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 0,
          max_capacity: 50
        }
      },
      {
        id: 26,
        start_time: '2024-12-04T13:00:00Z',
        end_time: '2024-12-04T14:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 6,
          max_capacity: 50
        }
      },
      {
        id: 27,
        start_time: '2024-12-04T14:00:00Z',
        end_time: '2024-12-04T15:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 3,
          max_capacity: 50
        }
      },
      {
        id: 28,
        start_time: '2024-12-04T15:00:00Z',
        end_time: '2024-12-04T16:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 9,
          max_capacity: 50
        }
      },
      {
        id: 29,
        start_time: '2024-12-04T16:00:00Z',
        end_time: '2024-12-04T17:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 30,
        start_time: '2024-12-04T17:00:00Z',
        end_time: '2024-12-04T18:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 2,
          max_capacity: 50
        }
      },
      {
        id: 31,
        start_time: '2024-12-05T08:00:00Z',
        end_time: '2024-12-05T09:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 5,
          max_capacity: 50
        }
      },
      {
        id: 32,
        start_time: '2024-12-05T09:00:00Z',
        end_time: '2024-12-05T10:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 33,
        start_time: '2024-12-05T10:00:00Z',
        end_time: '2024-12-05T11:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 8,
          max_capacity: 50
        }
      },
      {
        id: 34,
        start_time: '2024-12-05T11:00:00Z',
        end_time: '2024-12-05T12:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 4,
          max_capacity: 50
        }
      },
      {
        id: 35,
        start_time: '2024-12-05T12:00:00Z',
        end_time: '2024-12-05T13:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 0,
          max_capacity: 50
        }
      },
      {
        id: 36,
        start_time: '2024-12-05T13:00:00Z',
        end_time: '2024-12-05T14:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 6,
          max_capacity: 50
        }
      },
      {
        id: 37,
        start_time: '2024-12-05T14:00:00Z',
        end_time: '2024-12-05T15:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 3,
          max_capacity: 50
        }
      },
      {
        id: 38,
        start_time: '2024-12-05T15:00:00Z',
        end_time: '2024-12-05T16:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 9,
          max_capacity: 50
        }
      },
      {
        id: 39,
        start_time: '2024-12-05T16:00:00Z',
        end_time: '2024-12-05T17:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 40,
        start_time: '2024-12-05T17:00:00Z',
        end_time: '2024-12-05T18:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 2,
          max_capacity: 50
        }
      },
      {
        id: 41,
        start_time: '2024-12-06T08:00:00Z',
        end_time: '2024-12-06T09:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 5,
          max_capacity: 50
        }
      },
      {
        id: 42,
        start_time: '2024-12-06T09:00:00Z',
        end_time: '2024-12-06T10:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 43,
        start_time: '2024-12-06T10:00:00Z',
        end_time: '2024-12-06T11:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 8,
          max_capacity: 50
        }
      },
      {
        id: 44,
        start_time: '2024-12-06T11:00:00Z',
        end_time: '2024-12-06T12:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 4,
          max_capacity: 50
        }
      },
      {
        id: 45,
        start_time: '2024-12-06T12:00:00Z',
        end_time: '2024-12-06T13:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 0,
          max_capacity: 50
        }
      },
      {
        id: 46,
        start_time: '2024-12-06T13:00:00Z',
        end_time: '2024-12-06T14:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 6,
          max_capacity: 50
        }
      },
      {
        id: 47,
        start_time: '2024-12-06T14:00:00Z',
        end_time: '2024-12-06T15:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 3,
          max_capacity: 50
        }
      },
      {
        id: 48,
        start_time: '2024-12-06T15:00:00Z',
        end_time: '2024-12-06T16:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 9,
          max_capacity: 50
        }
      },
      {
        id: 49,
        start_time: '2024-12-06T16:00:00Z',
        end_time: '2024-12-06T17:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 7,
          max_capacity: 50
        }
      },
      {
        id: 50,
        start_time: '2024-12-06T17:00:00Z',
        end_time: '2024-12-06T18:00:00Z',
        category: 'green',
        capacity: {
          current_capacity: 2,
          max_capacity: 50
        }
      }
    ] as TimeSlot[]
  }),
  getters: {
    groupedTimeSlots(state): { date: Date; slots: TimeSlot[] }[] {
      if (state.timeSlots.length === 0) return []

      const slotsByDate: Record<string, TimeSlot[]> = {}
      state.timeSlots.forEach((slot) => {
        const dateKey = slot.start_time.toString().split('T')[0]
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
