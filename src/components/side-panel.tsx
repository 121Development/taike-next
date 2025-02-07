import { Button } from "~/components/ui/button"

interface SidePanelProps {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function SidePanel({ categories, selectedCategory, onSelectCategory }: SidePanelProps) {
  return (
    <div className="w-64 h-full bg-background border-r p-4 flex-shrink-0">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

