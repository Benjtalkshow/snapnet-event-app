import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

interface SearchFiltersProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  petsOnly: boolean
  onPetsOnlyChange: (checked: boolean) => void
}

export function SearchFilters({
  searchTerm,
  onSearchChange,
  petsOnly,
  onPetsOnlyChange,
}: SearchFiltersProps) {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="petsAllowed"
          checked={petsOnly}
          onCheckedChange={(checked) => onPetsOnlyChange(checked as boolean)}
        />
        <label
          htmlFor="petsAllowed"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show only pet-friendly events
        </label>
      </div>
    </div>
  )
}