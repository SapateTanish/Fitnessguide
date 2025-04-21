import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Meal = {
  title: string
  description: string
  ingredients: string[]
  image: string
}

const meals: Record<string, Meal> = {
  breakfast: {
    title: "Oatmeal with Berries and Nuts",
    description: "A nutritious breakfast that provides sustained energy throughout the morning.",
    ingredients: [
      "1/2 cup rolled oats",
      "1 cup milk or plant-based alternative",
      "1/4 cup mixed berries",
      "1 tbsp chopped nuts",
      "1 tsp honey or maple syrup (optional)",
    ],
    image: "/placeholder.svg?height=100&width=100",
  },
  lunch: {
    title: "Grilled Chicken Salad",
    description: "A protein-packed lunch with plenty of vegetables for vitamins and minerals.",
    ingredients: [
      "4 oz grilled chicken breast",
      "2 cups mixed greens",
      "1/4 cup cherry tomatoes",
      "1/4 cucumber, sliced",
      "1/4 avocado, diced",
      "2 tbsp vinaigrette dressing",
    ],
    image: "/placeholder.svg?height=100&width=100",
  },
  dinner: {
    title: "Baked Salmon with Quinoa and Broccoli",
    description: "A balanced dinner with protein, complex carbs, and vegetables.",
    ingredients: [
      "4 oz salmon fillet",
      "1/2 cup cooked quinoa",
      "1 cup steamed broccoli",
      "1 tbsp olive oil",
      "Lemon juice, salt, and pepper to taste",
    ],
    image: "/placeholder.svg?height=100&width=100",
  },
}

const nutritionTips = [
  "Stay hydrated by drinking at least 8 cups of water daily.",
  "Include protein in every meal to support muscle recovery and growth.",
  "Eat a variety of colorful vegetables to get different vitamins and minerals.",
  "Choose whole grains over refined carbohydrates for sustained energy.",
  "Plan your meals ahead of time to avoid unhealthy food choices when hungry.",
]

export default function NutritionPage() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-[1200px] px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-center mb-8">Nutrition Guide</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Nutrition Tips Section */}
          <div className="bg-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-heading mb-4">Nutrition Tips</h2>
            <ul className="space-y-4">
              {nutritionTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-accent text-white rounded-full w-6 h-6 mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meal Ideas Section */}
          <div>
            <h2 className="text-2xl font-heading mb-4">Sample Meals</h2>
            <div className="space-y-4">
              {Object.entries(meals).map(([key, meal]) => (
                <MealCard key={key} mealType={key} meal={meal} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-heading mb-4">Ready to Track Your Progress?</h2>
          <p className="mb-6">Start logging your workouts and nutrition to see your improvements over time.</p>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-accent"
          >
            <Link href="/progress">Go to Progress Tracker</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function MealCard({ mealType, meal }: { mealType: string; meal: Meal }) {
  return (
    <Card className="bg-primary/20 border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-heading capitalize">{mealType}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="relative w-[100px] h-[100px] flex-shrink-0">
            <Image src={meal.image || "/placeholder.svg"} alt={meal.title} fill className="object-cover rounded-md" />
          </div>
          <div>
            <h3 className="font-medium text-lg">{meal.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{meal.description}</p>
            <details className="text-sm">
              <summary className="cursor-pointer font-medium text-accent">Ingredients</summary>
              <ul className="mt-2 pl-5 list-disc">
                {meal.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
