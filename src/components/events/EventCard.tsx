import { Event } from '@/types/event'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface EventCardProps {
  event: Event
  onSelect: (id: number) => void
}

export function EventCard({ event, onSelect }: EventCardProps) {
  const { id, title, date, time, description, category } = event

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription>{`${date} at ${time}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 mb-4">{description}</p>
        <Badge variant="secondary">{category}</Badge>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className='bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800' onClick={() => onSelect(id)}>View Details</Button>
      </CardFooter>
    </Card>
  )
}