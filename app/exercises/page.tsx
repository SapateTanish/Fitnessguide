"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type Category = "All" | "Cardio" | "Strength" | "Flexibility"

type Exercise = {
  id: number
  title: string
  description: string
  category: Exclude<Category, "All">
  reps: string
  tips: string
  image: string
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Jumping Jacks",
    description: "A full-body exercise that increases your heart rate and improves coordination.",
    category: "Cardio",
    reps: "3 sets of 20",
    tips: "Keep your core engaged and land softly on your feet.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "High Knees",
    description: "A high-intensity exercise that strengthens your legs and gets your heart pumping.",
    category: "Cardio",
    reps: "3 sets of 30 seconds",
    tips: "Drive your knees up toward your chest and maintain a quick pace.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Burpees",
    description: "A challenging full-body exercise that builds strength and endurance.",
    category: "Cardio",
    reps: "3 sets of 10",
    tips: "Focus on form over speed, especially when you're just starting out.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Push-Ups",
    description: "A classic exercise that targets your chest, shoulders, and triceps.",
    category: "Strength",
    reps: "3 sets of 10",
    tips: "Keep your body in a straight line from head to heels.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Bodyweight Squats",
    description: "A lower body exercise that strengthens your quads, hamstrings, and glutes.",
    category: "Strength",
    reps: "3 sets of 15",
    tips: "Keep your knees over your toes and your weight in your heels.",
    image: "/dada squats.jpg",
  },
  {
    id: 6,
    title: "Plank",
    description: "An isometric core exercise that also engages your shoulders and back.",
    category: "Strength",
    reps: "3 sets of 30 seconds",
    tips: "Keep your body in a straight line and don't let your hips sag.",
    image: "/didi abbs.jpg",
  },
  {
    id: 7,
    title: "Hamstring Stretch",
    description: "A stretch that targets the back of your thighs to improve flexibility.",
    category: "Flexibility",
    reps: "Hold for 30 seconds on each leg",
    tips: "Keep your back straight and feel the stretch in your hamstrings.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Cat-Cow Stretch",
    description: "A gentle flow that stretches and strengthens your spine and core.",
    category: "Flexibility",
    reps: "10 repetitions",
    tips: "Move slowly and coordinate your breath with the movement.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    title: "Side Lunge",
    description: "A dynamic stretch that improves hip mobility and inner thigh flexibility.",
    category: "Flexibility",
    reps: "10 repetitions on each side",
    tips: "Keep your chest up and your weight in your heels.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const filteredExercises =
    selectedCategory === "All" ? exercises : exercises.filter((exercise) => exercise.category === selectedCategory)

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[1200px] px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-center mb-8 dark:text-white">Beginner-Friendly Exercises</h1>

        {/* Filter Bar */}
        <div className="w-full bg-primary/20 dark:bg-gray-800 rounded-lg p-4 mb-8 flex items-center justify-between transition-colors duration-300">
          <div className="flex items-center gap-4">
            <span className="font-medium dark:text-white">Filter by:</span>
            <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as Category)}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Exercises</SelectItem>
                <SelectItem value="Cardio">Cardio</SelectItem>
                <SelectItem value="Strength">Strength</SelectItem>
                <SelectItem value="Flexibility">Flexibility</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Showing {filteredExercises.length} exercises</div>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="bg-primary/20 dark:bg-gray-800 border-none transition-transform hover:scale-105 overflow-hidden">
      <div className="relative w-full h-[200px]">
        <Image src={exercise.image || "/placeholder.svg"} alt={exercise.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-heading dark:text-white">{exercise.title}</CardTitle>
          <Badge className="bg-accent text-white dark:bg-blue-600">{exercise.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{exercise.description}</p>
        {showDetails && (
          <div className="mt-4 space-y-2 dark:text-gray-300">
            <p>
              <span className="font-medium dark:text-white">Recommended:</span> {exercise.reps}
            </p>
            <p>
              <span className="font-medium dark:text-white">Tips:</span> {exercise.tips}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-accent hover:bg-accent/80 dark:bg-blue-600 dark:hover:bg-blue-700 text-white" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "View Details"}
        </Button>
      </CardFooter>
    </Card>
  )
}
