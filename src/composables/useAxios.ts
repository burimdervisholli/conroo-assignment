import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

const BASE_URL: string =
  import.meta.env.VITE_API_BASE_URL ||
  'https://timeslot-stream-ha2tva3niq-ey.a.run.app'

export function useAxios(config?: AxiosRequestConfig): AxiosInstance {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    ...config
  })
}
