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

interface EventDetailsProps {
    event: Event
    onBack: () => void
}

export function EventDetails({ event, onBack }: EventDetailsProps) {
    const { title, date, time, description, location, organizer, petsAllowed, category } = event

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{`${date} at ${time}`}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-1">Description</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p>{location}</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Event Details</h3>
                    <div className="space-y-2">
                        <p>Organizer: {organizer}</p>
                        <p>Pets Allowed: {petsAllowed ? 'Yes' : 'No'}</p>
                        <Badge variant="outline">{category}</Badge>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className='bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800' onClick={onBack}>Back to Events</Button>
            </CardFooter>
        </Card>
    )
}