'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export function ContactCard() {
    return (
        <Card className="card-glass p-6">
            <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* ✅ Avatar Left */}
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
                        <Image
                            src="/profile_pic.jpg"
                            alt="Werner Mans Avatar"
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                    </div>

                    {/* ✅ Name, Title, and Contact + Socials */}
                    <div className="flex-1 space-y-4 text-center md:text-left">
                        <div>
                            <h1 className="text-4xl font-bold">Werner Mans</h1>
                            <p className="text-lg text-gray-200">Senior RPG Developer</p>
                        </div>

                        {/* ✅ Contact Info + Socials in One Row */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-white" />
                                <a href="mailto:wmans7@gmail.com" className="hover:underline">
                                    wmans7@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-white" />
                                <span>(+27) 72 207 6804</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-white" />
                                <span>Sunninghill, Johannesburg</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Linkedin className="w-5 h-5 text-white" />
                                <a
                                    href="https://linkedin.com/in/werner-mans-a69030116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Github className="w-5 h-5 text-white" />
                                <a
                                    href="https://github.com/sphere91"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
