'use client'

import { Card, CardContent } from "@/components/ui/card"

export function ProfileSection() {
    return (
        <Card className="card-glass p-4 mt-6">
            <CardContent>
                <h2 className="text-2xl font-semibold mb-2">Profile</h2>
                <p className="text-base leading-relaxed">
                    Experienced and results-driven software developer with over 11 years of expertise in RPGLE (IBM i) back-end development,
                    complemented by a strong foundation in modern technologies including Node.js, SQL, and Python.
                    Passionate about clean, maintainable code and performance optimization, with a proven track record in delivering scalable,
                    business-critical solutions for the insurance and finance industries.
                </p>
                <p className="mt-4 text-base leading-relaxed">
                    Recognized for analytical thinking, logical problem-solving, and innovative approaches to software challenges.
                    Adept at collaborating with cross-functional teams, mentoring junior developers, and continuously expanding technical skills.
                    Currently focused on evolving from a back-end specialist to a versatile full-stack developer.
                </p>
            </CardContent>
        </Card>
    )
}
