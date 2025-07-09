'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const sections = [
    { id: "contact", label: "Contact" },
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "membership", label: "Membership" },
    { id: "experience", label: "Experience" },
    // { id: "references", label: "References" },
]

export function SidebarNav() {
    const [activeSection, setActiveSection] = useState<string>("contact")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: "-40% 0px -50% 0px" } // Adjust sensitivity
        )

        sections.forEach((section) => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="fixed top-10 left-0 z-50 flex flex-col space-y-2">
            {sections.map((section) => (
                <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`rounded-full px-4 py-2 text-sm ${activeSection === section.id ? 'bg-primary text-white' : 'text-white/80'
                        }`}
                >
                    {section.label}
                </Button>
            ))}
        </nav>
    )
}
