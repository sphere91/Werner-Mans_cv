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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1150) {
                setIsOpen(false) // Close sidebar on desktop
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize() // Initial check
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Hamburger Menu Button (Visible on screens < 1150px) */}
            <Button
                variant="ghost"
                className="fixed top-4 left-4 z-50 transition-opacity duration-300"
                style={{ opacity: window.innerWidth < 1150 ? 1 : 0, pointerEvents: window.innerWidth < 1150 ? 'auto' : 'none' }}
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
                className={`fixed left-0 z-50 bg-gray-900/90 backdrop-blur-sm transition-transform duration-300 ease-in-out flex flex-col space-y-2 p-4 w-64
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    xl:top-1/2 xl:-translate-y-1/2 xl:h-auto xl:bg-transparent xl:backdrop-blur-none xl:w-auto xl:translate-x-0
                    ${window.innerWidth < 1150 ? 'top-0 h-full' : 'top-1/2 -translate-y-1/2 h-auto'}`}
            >
                {sections.map((section) => (
                    <Button
                        key={section.id}
                        variant={activeSection === section.id ? "default" : "ghost"}
                        onClick={() => {
                            document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                            setIsOpen(false) // Close menu on mobile after clicking
                        }}
                        className={`rounded-full px-4 py-2 text-sm text-left ${activeSection === section.id ? 'bg-primary text-white' : 'text-white/80'}`}
                    >
                        {section.label}
                    </Button>
                ))}
            </nav>
        </>
    )
}