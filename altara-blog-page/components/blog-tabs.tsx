"use client"

import { useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { BlogGrid } from "./blog-grid"

const ARTICLES_PER_PAGE = 6

interface TabContent {
  id: string
  label: string
  title: string
  descriptionBefore: string
  styledText: string
}

const tabs: TabContent[] = [
  {
    id: "wellness",
    label: "Wellness",
    title: "Wellness Routines",
    descriptionBefore: "Learn the routines of ",
    styledText: "well-known personalities",
  },
  {
    id: "practitioners",
    label: "Practitioners",
    title: "Expert Insights",
    descriptionBefore: "Expert Insights from ",
    styledText: "Licensed Healthcare Professionals",
  },
  {
    id: "weight-loss",
    label: "Weight Loss",
    title: "Weight Loss",
    descriptionBefore: "How to lose weight, and ",
    styledText: "keep it off",
  },
  {
    id: "longevity",
    label: "Longevity",
    title: "Longevity",
    descriptionBefore: "How we can age like ",
    styledText: "fine wine",
  },
  {
    id: "fitness",
    label: "Fitness",
    title: "Fitness and Strength",
    descriptionBefore: "How people are building strength and ",
    styledText: "preventing injury",
  },
]

const articlesByTab: Record<string, { title: string; image: string }[]> = {
  practitioners: [
    { title: "The Safety of GLP-1 Weight Loss Medications: What You Need to Know", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Practitioners Recommend Starting Semaglutide", image: "/placeholder.svg?height=280&width=400" },
    { title: "Clinical Insights on Tirzepatide Dosing", image: "/placeholder.svg?height=280&width=400" },
    { title: "Understanding Lab Work for Weight Management", image: "/placeholder.svg?height=280&width=400" },
    { title: "When to Adjust Your GLP-1 Treatment Plan", image: "/placeholder.svg?height=280&width=400" },
    { title: "Expert Q&A: Common Questions About Weight Loss Medications", image: "/placeholder.svg?height=280&width=400" },
    { title: "How to Choose the Right Weight Loss Practitioner", image: "/placeholder.svg?height=280&width=400" },
    { title: "Telehealth vs. In-Person Visits for GLP-1 Management", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Role of Endocrinologists in Weight Loss", image: "/placeholder.svg?height=280&width=400" },
    { title: "What to Expect at Your First Weight Loss Consultation", image: "/placeholder.svg?height=280&width=400" },
    { title: "Managing Side Effects: A Practitioner's Perspective", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Importance of Follow-Up Appointments", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Pharmacists Support Your GLP-1 Journey", image: "/placeholder.svg?height=280&width=400" },
    { title: "Nutritional Counseling Alongside Medication", image: "/placeholder.svg?height=280&width=400" },
    { title: "When Surgery vs. Medication Is the Right Choice", image: "/placeholder.svg?height=280&width=400" },
  ],
  wellness: [
    { title: "Why You Might Want to Keep Taking GLP-1s After Reaching Your Goal Weight", image: "/placeholder.svg?height=280&width=400" },
    { title: "Why Tirzepatide (Mounjaro, Zepbound) Can Make You Tired and How to Manage Fatigue", image: "/placeholder.svg?height=280&width=400" },
    { title: "Why Am I Not Losing Weight on Semaglutide?", image: "/placeholder.svg?height=280&width=400" },
    { title: "What Are Weight Loss Injections?", image: "/placeholder.svg?height=280&width=400" },
    { title: "Tirzepatide Dose for Weight Loss", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Safety of GLP-1 Weight Loss Medications: What You Need to Know", image: "/placeholder.svg?height=280&width=400" },
    { title: "Morning Routines That Support Weight Management", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Hydration Impacts Your Wellness Goals", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Connection Between Sleep and Weight Loss", image: "/placeholder.svg?height=280&width=400" },
    { title: "Mindfulness Practices for Healthier Eating", image: "/placeholder.svg?height=280&width=400" },
    { title: "Building a Wellness Routine You Can Stick To", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Journaling Can Support Your Health Journey", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Role of Community in Wellness", image: "/placeholder.svg?height=280&width=400" },
    { title: "Digital Detox: How Screen Time Affects Your Health", image: "/placeholder.svg?height=280&width=400" },
    { title: "Cold Exposure and Wellness: What the Science Says", image: "/placeholder.svg?height=280&width=400" },
  ],
  longevity: [
    { title: "The Science of Aging: What We Know Now", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Caloric Restriction Impacts Longevity", image: "/placeholder.svg?height=280&width=400" },
    { title: "Supplements That May Support Healthy Aging", image: "/placeholder.svg?height=280&width=400" },
    { title: "Blue Zones: Lessons from the Longest-Lived Communities", image: "/placeholder.svg?height=280&width=400" },
    { title: "Sleep and Longevity: The Critical Connection", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Exercise Slows Biological Aging", image: "/placeholder.svg?height=280&width=400" },
    { title: "NAD+ and Cellular Health: A Deep Dive", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Role of Telomeres in Aging", image: "/placeholder.svg?height=280&width=400" },
    { title: "Intermittent Fasting and Longevity Research", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Social Connections Extend Your Lifespan", image: "/placeholder.svg?height=280&width=400" },
    { title: "Resveratrol and Red Wine: Myth vs. Reality", image: "/placeholder.svg?height=280&width=400" },
    { title: "Hormesis: How Small Stressors Can Extend Life", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Gut Microbiome and Healthy Aging", image: "/placeholder.svg?height=280&width=400" },
    { title: "Rapamycin Research: The Next Frontier in Longevity", image: "/placeholder.svg?height=280&width=400" },
    { title: "Mental Fitness: Keeping Your Brain Young", image: "/placeholder.svg?height=280&width=400" },
  ],
  "weight-loss": [
    { title: "Understanding GLP-1 Medications for Weight Loss", image: "/placeholder.svg?height=280&width=400" },
    { title: "Creating a Sustainable Calorie Deficit", image: "/placeholder.svg?height=280&width=400" },
    { title: "Why Crash Diets Don't Work Long-Term", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Role of Protein in Weight Management", image: "/placeholder.svg?height=280&width=400" },
    { title: "Tracking Progress Beyond the Scale", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Stress Affects Your Weight Loss Journey", image: "/placeholder.svg?height=280&width=400" },
    { title: "Meal Prep Strategies for Weight Loss Success", image: "/placeholder.svg?height=280&width=400" },
    { title: "Understanding Metabolic Adaptation", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Psychology of Weight Loss Plateaus", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Fiber Helps You Feel Full Longer", image: "/placeholder.svg?height=280&width=400" },
    { title: "Weight Loss After 50: What Changes", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Truth About Cheat Meals", image: "/placeholder.svg?height=280&width=400" },
    { title: "Hormonal Factors in Weight Management", image: "/placeholder.svg?height=280&width=400" },
    { title: "How Walking 10K Steps Transforms Your Body", image: "/placeholder.svg?height=280&width=400" },
    { title: "Emotional Eating: Strategies That Actually Work", image: "/placeholder.svg?height=280&width=400" },
  ],
  fitness: [
    { title: "Building Strength After 40: A Practical Guide", image: "/placeholder.svg?height=280&width=400" },
    { title: "Preventing Common Workout Injuries", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Benefits of Resistance Training for Weight Loss", image: "/placeholder.svg?height=280&width=400" },
    { title: "How to Start a Fitness Routine on GLP-1 Medications", image: "/placeholder.svg?height=280&width=400" },
    { title: "Mobility Exercises for Better Recovery", image: "/placeholder.svg?height=280&width=400" },
    { title: "Zone 2 Cardio: Why Low-Intensity Training Matters", image: "/placeholder.svg?height=280&width=400" },
    { title: "Progressive Overload: The Key to Muscle Growth", image: "/placeholder.svg?height=280&width=400" },
    { title: "Yoga for Flexibility and Stress Relief", image: "/placeholder.svg?height=280&width=400" },
    { title: "HIIT vs. Steady-State: Which Burns More Fat?", image: "/placeholder.svg?height=280&width=400" },
    { title: "How to Avoid Overtraining Syndrome", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Importance of Rest Days in Your Routine", image: "/placeholder.svg?height=280&width=400" },
    { title: "Swimming for Low-Impact Full-Body Fitness", image: "/placeholder.svg?height=280&width=400" },
    { title: "Core Strengthening Exercises for Back Pain", image: "/placeholder.svg?height=280&width=400" },
    { title: "How to Set Realistic Fitness Goals", image: "/placeholder.svg?height=280&width=400" },
    { title: "The Science Behind Post-Workout Nutrition", image: "/placeholder.svg?height=280&width=400" },
  ],
}

export function BlogTabs() {
  const [activeTab, setActiveTab] = useState("wellness")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0]
  const allArticles = articlesByTab[activeTab] ?? []
  const filteredArticles = searchQuery.trim()
    ? allArticles.filter((a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allArticles

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE))
  const articles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  )

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="-mt-6 relative z-10 px-4 md:px-8 lg:px-12 mb-4">
        <div className="relative w-full md:w-[460px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search by title, topic, or keyword..."
            className="w-full rounded-full border border-border bg-card px-5 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow duration-200 focus:shadow-md focus:border-[#003366]/40"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            size={18}
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <nav
        className="relative z-10 px-4 md:px-8 lg:px-12"
        aria-label="Blog categories"
      >
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                px-6 py-2.5 text-sm font-semibold tracking-wide rounded-full transition-colors duration-200
                ${activeTab === tab.id ? "bg-[#bbc7a4] text-foreground" : "bg-[#003366] text-white hover:bg-[#004080]"}
              `}
              aria-pressed={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="px-4 md:px-8 lg:px-12 mt-8">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
          {currentTab.title}
        </h2>
        <p className="mt-2 text-lg md:text-xl text-foreground leading-relaxed">
          {currentTab.descriptionBefore}
          <span className="font-serif italic text-[#326ea2]">
            {currentTab.styledText}
          </span>
        </p>

        {/* Blog Grid */}
        <BlogGrid articles={articles} />

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            className="flex items-center justify-center gap-2 mt-10 mb-12 font-sans"
            aria-label="Pagination"
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-border text-sm font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:bg-[#003366] enabled:hover:text-white enabled:hover:border-[#003366] enabled:hover:scale-[1.03] text-foreground"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Page Numbers */}
            {(() => {
              const pages: (number | "ellipsis-start" | "ellipsis-end")[] = []

              if (totalPages <= 5) {
                for (let i = 1; i <= totalPages; i++) pages.push(i)
              } else {
                pages.push(1)

                if (currentPage > 3) {
                  pages.push("ellipsis-start")
                }

                const start = Math.max(2, currentPage - 1)
                const end = Math.min(totalPages - 1, currentPage + 1)
                for (let i = start; i <= end; i++) pages.push(i)

                if (currentPage < totalPages - 2) {
                  pages.push("ellipsis-end")
                }

                pages.push(totalPages)
              }

              return pages.map((page) => {
                if (page === "ellipsis-start" || page === "ellipsis-end") {
                  return (
                    <span
                      key={page}
                      className="hidden sm:flex items-center justify-center w-10 h-10 text-sm text-muted-foreground select-none"
                    >
                      {"..."}
                    </span>
                  )
                }
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 border
                      ${
                        currentPage === page
                          ? "bg-[#003366] text-white border-[#003366] font-bold shadow-sm"
                          : "text-foreground border-border hover:bg-[#003366] hover:text-white hover:border-[#003366] hover:scale-[1.08]"
                      }
                      ${totalPages > 5 && page !== 1 && page !== totalPages && page !== currentPage ? "hidden sm:flex sm:items-center sm:justify-center" : "flex items-center justify-center"}
                    `}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                )
              })
            })()}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-border text-sm font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:bg-[#003366] enabled:hover:text-white enabled:hover:border-[#003366] enabled:hover:scale-[1.03] text-foreground"
              aria-label="Next page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </nav>
        )}
      </div>
    </div>
  )
}
