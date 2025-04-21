import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary/20 dark:bg-gray-800 py-10 mt-20 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="font-heading text-2xl font-bold text-accent dark:text-blue-400 mb-2">Fitness Guide</h2>
          <p className="text-gray-700 dark:text-gray-300">Simple workouts, nutrition tips, and progress tracking</p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <ul className="flex flex-wrap justify-center gap-6 mb-4">
            <li>
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/exercises" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400">
                Exercises
              </Link>
            </li>
            <li>
              <Link href="/nutrition" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400">
                Nutrition
              </Link>
            </li>
            <li>
              <Link href="/progress" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400">
                Progress Tracker
              </Link>
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} Fitness Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
