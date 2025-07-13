'use client'

import { useState, useEffect } from "react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function CoursesSection() {
    const courses = [
        {
            key: "leadership-ex",
            name: (
                <>
                    LeadershipEx <br /> Programme
                </>
            ),
            description:
                "An executive leadership program focused on strategic decision-making, innovation, and team empowerment.",
            issuedDate: "Feb 2025",
        },
        {
            key: "azure-fundamentals",
            name: (
                <>
                    Microsoft Certified <br /> Azure Fundamentals
                </>
            ),
            description:
                "Certification covering Azure architecture, cloud concepts, core services, pricing, and governance.",
            issuedDate: "Aug 2024",
        },
        {
            key: "linkedin-learning",
            name: (
                <>
                    LinkedIn Learning<br /> Courses and Certificates
                </>
            ),
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

    // State to track open state for each card on mobile
    const [openCard, setOpenCard] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile breakpoint (1150px)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1150)
            if (window.innerWidth >= 1150) setOpenCard(null) // Close all cards on desktop
        }
        handleResize() // Initial check
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleCard = (key: string) => {
        setOpenCard(openCard === key ? null : key)
    }

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Courses</h2>

            {/* Use a 3-column grid for consistent spacing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <HoverCard
                        key={course.key}
                        openDelay={100}
                        closeDelay={50}
                        open={isMobile ? openCard === course.key : undefined}
                    >
                        <HoverCardTrigger asChild>
                            <motion.div
                                whileHover={{ scale: !isMobile ? 1.15 : 1 }} // Disable scale on mobile
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer"
                                onClick={() => isMobile && toggleCard(course.key)}
                                role="button"
                                aria-label={`Toggle details for ${course.key.replace(/-/g, ' ')}`}
                            >
                                <Badge className="badge-primary text-base py-2 px-3 text-center w-full justify-center leading-tight whitespace-normal">
                                    {course.name}
                                </Badge>
                            </motion.div>
                        </HoverCardTrigger>

                        <HoverCardContent className="w-72 space-y-2">
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