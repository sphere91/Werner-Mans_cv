import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadCVButton() {
    return (
        <Button asChild className="mt-8">
            <a href="/Werner-Mans-CV.pdf" download>
                <Download className="mr-2" /> Download My CV (PDF)
            </a>
        </Button>
    )
}
