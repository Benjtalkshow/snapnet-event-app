import { Event } from '@/types/event'
import { EventCard } from './EventCard'

interface EventGridProps {
  events: Event[]
  onSelectEvent: (id: number) => void
}

export function EventGrid({ events, onSelectEvent }: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No events found matching your criteria
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onSelect={onSelectEvent} />
      ))}
    </div>
  )
}
