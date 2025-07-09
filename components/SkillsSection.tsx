import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
    const skills = ["RPGLE (IBMi 7.3)", "CLLE", "Node.js", "SQL", "Python", "Java (Android)", "C++"]

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                ))}
            </div>
        </div>
    )
}
