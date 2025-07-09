import { Card, CardContent } from "@/components/ui/card"

export function ProfileSection() {
    return (
        <Card className="p-4 mt-6">
            <CardContent>
                <h2 className="text-2xl font-semibold mb-2">Profile</h2>
                <p>
                    Objective, rational & innovative developer with 7+ years of experience in RPG development...
                </p>
            </CardContent>
        </Card>
    )
}
