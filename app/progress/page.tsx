"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type ProgressEntry = {
  id: string
  date: string
  weight: string
  workout: string
  notes: string
}

export default function ProgressPage() {
  const [entries, setEntries] = useState<ProgressEntry[]>([])
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    weight: "",
    workout: "",
    notes: "",
  })

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem("preetamsFitnessProgress")
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries))
    }
  }, [])

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("preetamsFitnessProgress", JSON.stringify(entries))
  }, [entries])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.date || !formData.weight || !formData.workout) {
      alert("Please fill in all required fields")
      return
    }

    // Add new entry
    const newEntry: ProgressEntry = {
      id: Date.now().toString(),
      ...formData,
    }

    setEntries((prev) => [newEntry, ...prev])

    // Reset form (except date)
    setFormData({
      date: new Date().toISOString().split("T")[0],
      weight: "",
      workout: "",
      notes: "",
    })
  }

  const clearAllEntries = () => {
    setEntries([])
  }

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[1200px] px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-center mb-8">Progress Tracker</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="bg-primary/20 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Log Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">
                    Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">
                    Weight (kg/lbs) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="Enter your weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workout">
                    Workout Completed <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="workout"
                    name="workout"
                    placeholder="e.g., Push-Ups, 3 sets of 10"
                    value={formData.workout}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes/Goals</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any notes or goals for today"
                    value={formData.notes}
                    onChange={handleInputChange}
                    maxLength={100}
                    rows={3}
                  />
                  <p className="text-xs text-right text-gray-500">{formData.notes.length}/100 characters</p>
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-white">
                  Save Entry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Log Display Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl font-heading">Your Progress</CardTitle>
              {entries.length > 0 && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      Clear All
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will delete all your progress entries. This cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={clearAllEntries}>Yes, clear all</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </CardHeader>
            <CardContent>
              {entries.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No entries yet. Start logging your progress!</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary/20 text-left">
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Weight</th>
                        <th className="p-2 border">Workout</th>
                        <th className="p-2 border">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry) => (
                        <tr key={entry.id} className="border-b hover:bg-gray-50">
                          <td className="p-2 border">{entry.date}</td>
                          <td className="p-2 border">{entry.weight}</td>
                          <td className="p-2 border">{entry.workout}</td>
                          <td className="p-2 border">{entry.notes || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
