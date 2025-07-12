'use client'

import { Card, CardContent } from "@/components/ui/card"

export function ProfileSection() {
    return (
        <Card className="card-glass p-4 mt-6">
            <CardContent>
                <h2 className="text-2xl font-semibold mb-2">Profile</h2>
                <p className="text-base leading-relaxed text-justify">
                    Accomplished and results-oriented Technical Lead with over 11 years of experience in back-end development,
                    specializing in RPGLE on the IBM i platform. Adept at designing and implementing scalable, business-critical
                    systems within the insurance and finance sectors. Brings a strong command of full-stack development using modern
                    technologies including Node.js, SQL, Python, Angular, and Next.js.
                </p>
                <p className="mt-4 text-base leading-relaxed text-justify">
                    Highly regarded for analytical thinking, innovative problem-solving, and a commitment to code quality and maintainability.
                    Proven ability to lead cross-functional teams, mentor developers, and align technical solutions with strategic business goals.
                    Passionate about continuous learning and leveraging technology to enhance performance, user experience, and operational efficiency.
                </p>
            </CardContent>
        </Card>
    )
}
