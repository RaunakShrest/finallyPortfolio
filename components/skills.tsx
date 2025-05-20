"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"

function SkillSphere({ skills }) {
  const groupRef = useRef()

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        // Calculate position on a sphere
        const phi = Math.acos(-1 + (2 * i) / skills.length)
        const theta = Math.sqrt(skills.length * Math.PI) * phi
        const x = 2.5 * Math.cos(theta) * Math.sin(phi)
        const y = 2.5 * Math.sin(theta) * Math.sin(phi)
        const z = 2.5 * Math.cos(phi)

        return (
          <Text
            key={i}
            position={[x, y, z]}
            fontSize={0.2}
            color={new THREE.Color().setHSL(i / skills.length, 0.8, 0.5)}
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        )
      })}
    </group>
  )
}

function SkillsVisualization({ skills }) {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <SkillSphere skills={skills} />
      </Canvas>
    </div>
  )
}

function FallbackSkillsVisualization({ skills }) {
  return (
    <div className="h-full w-full flex items-center justify-center bg-blue-900/20 rounded-lg border border-blue-800/30">
      <div className="text-center p-6">
        <h3 className="text-xl font-semibold mb-2">Skills Visualization</h3>
        <p className="text-gray-400 mb-4">
          3D visualization not available. Your browser might not support WebGL or it might be disabled.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {skills.slice(0, 9).map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-blue-900/40 rounded-md text-blue-300 text-sm text-center">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const [canRender3D, setCanRender3D] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if we can render 3D content
    try {
      if (typeof window !== "undefined" && window.WebGLRenderingContext) {
        const canvas = document.createElement("canvas")
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        setCanRender3D(!!gl)
      }
    } catch (e) {
      console.error("WebGL not supported", e)
      setCanRender3D(false)
    }
  }, [])

  const frontendSkills = ["React", "Next.js", "Angular", "Redux", "TypeScript", "Three.js","HTML/CSS"]
  const backendSkills = ["Node.js", "Express", "MongoDB", "MySQL", "GraphQL", "Socket.io"]
  const otherSkills = ["Git", "Docker", "Blockchain", "CI/CD", "Postman", "Swagger"]

  const allSkills = [
    ...frontendSkills,
    ...backendSkills,
    ...otherSkills,
    "JavaScript",
    "TypeScript",
    "Golang",
    "PHP",
    "Java",
    "C",
  ]

  const skillCategories = [
    { name: "Frontend", skills: frontendSkills },
    { name: "Backend", skills: backendSkills },
    { name: "Other", skills: otherSkills },
  ]

  return (
    <section id="skills" className="min-h-screen w-full py-20 px-4 md:px-10 snap-start">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="h-[500px] w-full">
            {mounted && canRender3D ? (
              <SkillsVisualization skills={allSkills} />
            ) : (
              <FallbackSkillsVisualization skills={allSkills} />
            )}
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-900/30 rounded-full text-blue-300 border border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "Golang", "PHP", "Java", "C"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 border border-purple-800"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
