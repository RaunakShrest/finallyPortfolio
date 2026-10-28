"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Nepal Bank Limited Dashboard",
      description:
        "Chatbot Dashboard System built using AngularJs, Node.js, and LoopBack 3.0 for API development.",
      details: [
        "Provides a user-friendly interface for visualizing and managing chatbot data.",
        "Includes role-based access control for bank users to view analytics and manage users based on roles.",
      ],
      tech: ["MEAN Stack", "Angular", "Node.js", "LoopBack"],
      link: null,
    },
    {
      title: "AuthyProduct",
      description:
        "Blockchain-integrated full-stack web application that verifies products using cryptographic hashes.",
      details: [
        "Integrated blockchain in APIs, ensuring secure and tamper-proof verification.",
        "Hashed data and validated against blockchain responses for authenticity.",
        "Successfully added data to the Hyperledger Blockchain Explorer network with verified transaction IDs.",
        "Includes AI-powered counterfeit detection using OCR technology.",
      ],
      tech: ["MERN Stack", "Blockchain", "Hyperledger", "AI", "OCR"],
      link: "https://app.authyproduct.com",
    },
    {
      title: "Sherpa Explore",
      description:
        "Full-stack travel booking platform for discovering, comparing, and booking trips and travel experiences.",
      details: [
        "Built a flexible GraphQL API layer that lets the frontend fetch exactly the data it needs for listings, bookings, and user profiles.",
        "Integrated the 2C2P payment gateway for secure online payments, including payment confirmation and status handling.",
        "Developed a separate, user-friendly admin dashboard that lets the team manage all website content without touching code.",
        "End-to-end booking flow covering search, availability, checkout, and booking confirmation.",
        "Responsive interface optimized for both desktop and mobile travelers.",
      ],
      tech: ["GraphQL", "2C2P", "Admin Dashboard", "Travel Booking"],
      link: "https://sherpaexplore.com",
    },
    {
      title: "Solira Bhutan",
      description:
        "Hotel, yoga, and wellness booking website that lets guests discover and book stays and wellness experiences in Bhutan.",
      details: [
        "Built a GraphQL API layer powering room, yoga, and wellness program listings, bookings, and guest data.",
        "Integrated WhatsApp to send automated booking notifications to guests and staff.",
        "Developed a separate, user-friendly admin dashboard to control all website content, including rooms, programs, and pricing.",
        "Complete booking flow covering availability, reservation, and confirmation for hotel stays and wellness sessions.",
        "Responsive, clean interface designed for a calm, premium guest experience on any device.",
      ],
      tech: [
        "GraphQL",
        "WhatsApp Integration",
        "Admin Dashboard",
        "Booking System",
      ],
      link: "https://solirabhutan.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-20 px-4 md:px-10 snap-start"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-none bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors overflow-hidden group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-4">
                    {project.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-blue-950/50 text-blue-300 border-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {project.link && (
                  <CardFooter>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View Project
                    </a>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
