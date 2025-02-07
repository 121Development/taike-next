"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { ClientTextarea } from "../components/client-textarea"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Share, Edit, Menu, ChevronDown } from "lucide-react"
import { SidePanel } from "../components/side-panel"
import { useTheme } from "next-themes"
import { getRandomQuote } from "~/lib/quotes"

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
  }, [setTheme])

  const updateNoteCategory = (noteId: number, newCategory: string) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, category: newCategory } : note
    ))
  }

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
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-[960px] flex bg-background text-foreground">
        {isSidePanelOpen && (
          <SidePanel
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}
        <div className="flex-1 p-4 space-y-6 overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="icon" onClick={toggleSidePanel}>
              <Menu className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Taike</h1>
              <p className="text-xs text-muted-foreground">AI note taking</p>
            </div>
          </div>
          <div className="space-y-2">
            <ClientTextarea
              randomPlaceholder
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
                    <div className="relative ml-2 inline-block group">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="h-6 text-xs gap-1"
                      >
                        {note.category}
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                      <div className="absolute left-0 mt-1 w-32 rounded-md shadow-lg bg-popover border border-border z-50 hidden group-hover:block hover:block">
                        <div className="py-1">
                          {categories.map((category) => (
                            <button
                              key={category}
                              className="block w-full px-4 py-1 text-left text-xs hover:bg-accent"
                              onClick={() => updateNoteCategory(note.id, category)}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
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
    </div>
  )
}

