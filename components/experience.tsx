"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const [activeTab, setActiveTab] = useState("anvesh")

  const experiences = [
    {
      id: "anvesh",
      company: "Anvesh Technologies",
      position: "Full Stack Developer",
      period: "Sept 2024 – Now",
      responsibilities: [
        "Building blockchain-integrated full-stack web applications",
        "Designing scalable backend architecture and database schemas",
        "Managing Contabo server network",
        "Building interactive frontend dashboards with real-time data visualization",
        "Managing server configurations and CI/CD pipelines",
        "Integrating third-party APIs and payment web services",
        "Implementing authentication and role-based access control",
        "Optimizing application performance",
      ],
    },
    {
      id: "palm",
      company: "Palm Mind Technologies",
      position: "Full Stack Developer",
      period: "Mar 2024 – Sept 2024",
      responsibilities: [
        "Building custom dashboard applications",
        "Improving dashboard performance by 80% by upgrading from Angular 7 to Angular 17",
        "Developing interactive chats and charts for data visualization",
        "Building and integrating backend APIs for chatbots and live chat features",
        "Revamping and optimizing backend code",
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen w-full py-24 px-4 md:px-10 snap-start flex items-center">
      <motion.div
        className="max-w-5xl mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center">Work Experience</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-600/50 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-blue-600 rounded-full transform -translate-x-1/2 z-10 mt-1.5"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <Card className="border-none bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                        <div>
                          <CardTitle className="text-2xl text-blue-400">{exp.company}</CardTitle>
                          <CardDescription className="text-lg text-gray-300">{exp.position}</CardDescription>
                        </div>
                        <span className="px-4 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-2 text-gray-300"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
