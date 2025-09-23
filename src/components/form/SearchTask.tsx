import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchTaskProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchTask = ({ value, onChange }: SearchTaskProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Rechercher une tâche..."
        className="pr-10 text-base"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  )
}

export default SearchTask;
