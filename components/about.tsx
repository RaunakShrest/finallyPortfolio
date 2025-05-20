"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useTexture } from "@react-three/drei"
import * as THREE from "three"

// This component will be rendered inside the Canvas
function RotatingImage() {
  // Load texture (placeholder image)
  const texture = useTexture("/githubRaunak.jpg?height=800&width=800")

  // Create a circular mask for the texture
  useEffect(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
      texture.minFilter = THREE.LinearFilter
    }
  }, [texture])

  return (
    <>
      {/* Removed all lights to show original image colors */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

      {/* Using MeshBasicMaterial which is not affected by lights */}
      <mesh>
        <circleGeometry args={[2.8, 64]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>

      {/* Blue ring with emissive material so it's visible without lights */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[2.9, 0.06, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>
    </>
  )
}

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="about"
      className="min-h-screen w-full py-20 flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 snap-start"
    >
      <motion.div
        className="w-full md:w-1/2 h-[400px] md:h-[500px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {mounted && (
          <Canvas camera={{ position: [0, 0, 6] }}>
            <RotatingImage />
          </Canvas>
        )}
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-gray-300 text-lg">
          I'm a Full Stack Developer based in Kathmandu, Nepal with expertise in building modern web applications using
          JavaScript, TypeScript, React, Angular, and Node.js.
        </p>
        <p className="text-gray-300 text-lg">
          With experience in blockchain integration, server management, and building interactive dashboards, I focus on
          creating secure, scalable, and user-friendly applications.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/RaunakShrest"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
          <a
            href="mailto:raunakshrestha62@gmail.com"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email
          </a>
        </div>
      </motion.div>
    </section>
  )
}
