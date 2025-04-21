import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center py-20 transition-colors duration-300">
        <div className="max-w-[1200px] bg-primary/20 dark:bg-gray-800 rounded-lg p-10 flex flex-col items-center text-center transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-800 dark:text-white mb-4">Start Your Fitness Journey</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            Simple workouts, nutrition tips, and progress tracking for beginners
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/80 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
            <Link href="/exercises">Get Started</Link>
          </Button>
          <div className="mt-10 relative w-full max-w-[600px] h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Person exercising"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Exercises"
            description="Explore beginner-friendly workouts designed to help you build strength, endurance, and flexibility."
            href="/exercises"
          />
          <FeatureCard
            title="Nutrition"
            description="Get practical nutrition advice and meal ideas to fuel your workouts and support your fitness goals."
            href="/nutrition"
          />
          <FeatureCard
            title="Progress Tracker"
            description="Track your fitness journey with our simple progress tracker to stay motivated and see your improvements."
            href="/progress"
          />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Card className="bg-primary/20 dark:bg-gray-800 border-none transition-transform hover:scale-105">
      <CardHeader>
        <CardTitle className="text-2xl font-heading dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="bg-accent hover:bg-accent/80 dark:bg-blue-600 dark:hover:bg-blue-700 text-white w-full">
          <Link href={href}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
