import { useQuery } from '@tanstack/react-query'
import { Event } from '@/types/event'

const EVENTS_API = import.meta.env.VITE_EVENTS_API_URL ;

export function useEvents() {
    return useQuery<Event[]>({
        queryKey: ['events'],
        queryFn: async () => {
            const response = await fetch(EVENTS_API)
            if (!response.ok) {
                throw new Error(`Failed to fetch events: ${response.statusText}`)
            }
            return response.json()
        }
    })
}