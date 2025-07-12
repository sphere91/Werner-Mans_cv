'use client'

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function CoursesSection() {
    const courses = [
        {
            name: "LeadershipEx Programme",
            description: "An executive leadership program focused on strategic decision-making, innovation, and team empowerment.",
            issuedDate: "Feb 2025",
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            description: "Certification covering Azure architecture, cloud concepts, core services, pricing, and governance.",
            issuedDate: "Aug 2024",
        },
        {
            name: "LinkedIn Learning Courses",
            subCourses: [
                "Learning SOLID Programming Principles (May 2023)",
                "Angular Essential Training (Apr 2023)",
                "Developing CI/CD Solutions with Azure DevOps (Apr 2023)",
                "Advanced Node.js (Feb 2023)",
                "Learning npm the Node Package Manager (Feb 2023)",
                "Node.js Essential Training (Feb 2023)",
                "Node.js: Design Patterns (Feb 2023)",
                "Node.js: Microservices (Feb 2023)",
                "Node.js: Security (Feb 2023)",
                "Azure: Understanding the Big Picture (Nov 2021)",
            ],
        },
    ]

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Courses</h2>

            {/* ✅ Use a 3-column grid for consistent spacing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <HoverCard key={course.name} openDelay={100} closeDelay={50}>
                        <HoverCardTrigger asChild>
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer"
                            >
                                <Badge className="badge-primary text-m py-1.5 px-3 text-center w-full justify-center">
                                    {course.name}
                                </Badge>
                            </motion.div>
                        </HoverCardTrigger>

                        <HoverCardContent className="w-72 space-y-2">
                            {/* ✅ If it's the LinkedIn card, show a bullet list */}
                            {course.subCourses ? (
                                <>
                                    <p className="text-sm text-white/90 font-medium">Included Courses:</p>
                                    <ul className="list-disc ml-4 text-xs text-white/80 space-y-1">
                                        {course.subCourses.map((sub, index) => (
                                            <li key={index}>{sub}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <div className="text-sm text-white/90">{course.description}</div>
                                    <div className="text-xs text-right text-white/60">
                                        {course.issuedDate ? `Issued: ${course.issuedDate}` : "Ongoing"}
                                    </div>
                                </>
                            )}
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
        </div>
    )
}
