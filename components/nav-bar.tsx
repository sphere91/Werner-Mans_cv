'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const sections = [
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "membership", label: "Membership" },
    { id: "experience", label: "Experience" },
    { id: "download-cv", label: "Download CV" },
]

export function SidebarNav() {
    const [activeSection, setActiveSection] = useState<string>("contact")
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: "-40% 0px -50% 0px" }
        )

        sections.forEach((section) => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Hamburger Menu Button (Visible on Mobile) */}
            <Button
                variant="ghost"
                className="fixed top-4 left-4 z-50 xl:hidden"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <div className="w-6 h-6 relative">
                    <span
                        className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                    ></span>
                    <span
                        className={`absolute top-2 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                    ></span>
                    <span
                        className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    ></span>
                </div>
            </Button>

            {/* Sidebar Navigation */}
            <nav
                className={`fixed top-0 left-0 z-50 h-full bg-gray-900/90 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } xl:translate-x-0 xl:top-1/2 xl:-translate-y-1/2 xl:bg-transparent xl:backdrop-blur-none xl:h-auto flex flex-col space-y-2 p-4 w-64 xl:w-auto`}
            >
                {sections.map((section) => (
                    <Button
                        key={section.id}
                        variant={activeSection === section.id ? "default" : "ghost"}
                        onClick={() => {
                            document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                            setIsOpen(false) // Close menu on mobile after clicking
                        }}
                        className={`rounded-full px-4 py-2 text-sm text-left ${activeSection === section.id ? 'bg-primary text-white' : 'text-white/80'
                            }`}
                    >
                        {section.label}
                    </Button>
                ))}
            </nav>
        </>
    )
}