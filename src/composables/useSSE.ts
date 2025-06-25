import { onUnmounted } from 'vue'

const url = import.meta.env.VITE_API_BASE_URL + '/sse'

export function useSSE(callback: (data: any) => void): EventSource {
  const eventSource = new EventSource(url)

  eventSource.onmessage = (event) => {
    console.log('SSE message received:', event.data)
    callback(JSON.parse(event.data))
  }

  eventSource.onerror = () => {
    eventSource.close()
  }

  onUnmounted(() => {
    eventSource.close()
  })

  return eventSource
}
