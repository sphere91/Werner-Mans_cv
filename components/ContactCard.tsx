// src/components/ContactCard.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ContactCard() {
    return (
        <div className="flex items-center gap-4 p-6 rounded-lg bg-card shadow">
            <Avatar className="w-24 h-36">
                <AvatarImage src="/profile_pic.jpg" alt="Werner Mans" />
                <AvatarFallback>WM</AvatarFallback>
            </Avatar>
            <Card className="p-4">
                <CardContent>
                    <h1 className="text-3xl font-bold">Werner Mans</h1>
                    <p className="text-xl text-gray-600">Senior RPG Developer</p>
                    <div className="mt-2 space-y-1">
                        <p>Email: <a href="mailto:wmans7@gmail.com" className="underline">wmans7@gmail.com</a></p>
                        <p>Phone: (+27) 72 207 6804</p>
                        <p>Location: Sunninghill, Johannesburg</p>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}
