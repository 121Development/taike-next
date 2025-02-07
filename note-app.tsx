"use client"

import { useState, useEffect } from "react"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import { Card, CardContent, CardFooter } from "~/components/ui/card"
import { Share, Edit, Menu } from "lucide-react"
import { SidePanel } from "~/components/side-panel"
import { useTheme } from "next-themes"

interface Note {
  id: number
  content: string
  date: string
  category: string
}

const categories = ["General", "Work", "Personal", "Ideas"]

export default function NoteApp() {
  const [notes, setNotes] = useState<Note[]>([])
  const [currentNote, setCurrentNote] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("General")
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("dark")
  }, [setTheme]) // Added setTheme to the dependency array

  const saveNote = () => {
    if (currentNote.trim()) {
      const newNote: Note = {
        id: Date.now(),
        content: currentNote,
        date: new Date().toLocaleDateString(),
        category: selectedCategory,
      }
      setNotes([newNote, ...notes])
      setCurrentNote("")
    }
  }

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen)
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {isSidePanelOpen && (
        <SidePanel categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      )}
      <div className="flex-1 p-4 space-y-6 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={toggleSidePanel}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Note Taking App</h1>
        </div>
        <div className="space-y-2">
          <Textarea
            placeholder="Write your note here..."
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            className="w-full h-32 resize-none"
          />
          <div className="flex justify-end">
            <Button onClick={saveNote} size="sm">
              Save Note
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {notes.map((note) => (
            <Card key={note.id} className="w-full">
              <CardContent className="pt-6">
                <p className="text-sm mb-2">{note.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
                <div>
                  <span>{note.date}</span>
                  <span className="ml-2 bg-secondary px-2 py-1 rounded">{note.category}</span>
                </div>
                <div className="space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

