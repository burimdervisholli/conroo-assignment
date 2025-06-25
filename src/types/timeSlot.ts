export interface TimeSlot {
  id: number
  start_time: Date | string
  end_time: Date | string
  category: 'green' | 'yellow' | 'red'
  capacity: {
    current_capacity: number
    max_capacity: number
  }
}

export interface timeSlotUpdateReponse {
  id: number
  currentCapacity: number
  category: 'green' | 'yellow' | 'red'
}
