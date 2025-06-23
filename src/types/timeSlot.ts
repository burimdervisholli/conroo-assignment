export interface TimeSlot {
  id: number
  start_time: string | Date
  end_time: string | Date
  category: 'green' | 'yellow' | 'red'
  capacity: {
    current: number
    maximum: number
  }
}
