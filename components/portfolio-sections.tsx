"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import { Loader } from "@/components/ui/loader"

export default function PortfolioSections() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a short timeout to ensure components have time to initialize
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader text="Jangey is loading..." />
  }

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
