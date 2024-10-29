import { useState } from 'react'
import { SearchFilters } from '@/components/events/SearchFilters'
import { EventGrid } from '@/components/events/EventGrid'
import { EventDetails } from '@/components/events/EventDetails'
import { Pagination } from '@/components/shared/Pagination'
import { useEvents } from '@/hooks/useEvents'


export default function EventShowcase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null)
  const [petsOnly, setPetsOnly] = useState(false)
  const EVENTS_PER_PAGE = 3

//get data from useEvents hook
  const { data: events = [], isLoading, error } = useEvents()

  if (isLoading) {
    return <div className="flex justify-center py-8">Loading events...</div>
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Failed to load events. Please try again later.
      </div>
    )
  }
//filter events
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPetsFilter = !petsOnly || event.petsAllowed
    return matchesSearch && matchesPetsFilter
  })
//logic for pagnation
  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE)
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  )

  const selectedEvent = events.find((e) => e.id === selectedEventId)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>

      {selectedEvent ? (
        <EventDetails event={selectedEvent} onBack={() => setSelectedEventId(null)} />
      ) : (
        <>
          <SearchFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            petsOnly={petsOnly}
            onPetsOnlyChange={setPetsOnly}
          />
          <EventGrid events={paginatedEvents} onSelectEvent={setSelectedEventId} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  )
}