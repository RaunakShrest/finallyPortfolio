"use client"

import { useRef, useEffect, useState } from "react"
import type * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { motion } from "framer-motion"

function Particles({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null)
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.05
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.075
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#5786F5" sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="h-screen w-full relative flex flex-col items-center justify-center snap-start">
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <Particles />
          </Canvas>
        )}
      </div>

      <div className="z-10 text-center space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          RAUNAK SHRESTHA
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <a href="#about" className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            Explore
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 animate-pulse">
        <p className="text-gray-400 text-sm">Scroll Down to Explore</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
