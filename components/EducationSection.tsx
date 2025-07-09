import { Card, CardContent } from "@/components/ui/card"

export function EducationSection() {
    return (
        <Card className="card-glass mt-6">
            <CardContent >
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <ul className="list-disc ml-4 space-y-2">
                    <li>B.Eng Computer & Electronic (2010 - 2013), North West University, Potchefstroom</li>
                    <li>Matriculation (2009), Gimnasium, Potchefstroom</li>
                </ul>
            </CardContent>
        </Card>
    )
}
