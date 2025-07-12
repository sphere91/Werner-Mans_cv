'use client'

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function SkillsSection() {
    const skills = [
        {
            name: "RPG IV (ILE RPG)",
            description: "Modern programming language for IBM i systems, used for business applications and system integration.",
            level: 95
        },
        {
            name: "CL (Control Language)",
            description: "Scripting language for IBM i systems, used for automation, batch processing, and system control.",
            level: 85
        },
        {
            name: "Node.js",
            description: "JavaScript runtime for building scalable, fast back-end and full-stack applications.",
            level: 75
        },
        {
            name: "SQL",
            description: "Language for managing and querying relational databases.",
            level: 65
        },
        {
            name: "Python",
            description: "Versatile programming language for automation, data analysis, and web development.",
            level: 95
        },
        {
            name: "C++",
            description: "High-performance, low-level programming language for systems and performance-critical apps.",
            level: 75
        },
        {
            name: "Next.js",
            description: "React-based framework for server-side rendering, static site generation, and scalable web applications.",
            level: 75
        },
        {
            name: "Angular",
            description: "TypeScript-based framework for building dynamic, single-page web applications.",
            level: 70
        }
    ]

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <HoverCard key={skill.name} openDelay={100} closeDelay={50}>
                        <HoverCardTrigger asChild>
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer"
                            >
                                <Badge className="badge-primary text-base py-1.5 px-3">
                                    {skill.name}
                                </Badge>
                            </motion.div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-72 space-y-2">
                            <div className="text-sm mb-2">{skill.description}</div>
                            {/* ✅ Progress Bar */}
                            <p className="text-xs text-white/80 mb-1">Proficiency Level:</p>
                            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                    className="h-full bg-primary rounded-full"
                                />
                            </div>
                            {/* <div className="text-xs text-right text-white/80">
                                {skill.level}%
                            </div> */}
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
        </div>
    )
}