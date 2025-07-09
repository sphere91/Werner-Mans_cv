import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export function DownloadCVButton() {
    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button asChild className="badge-primary mt-8">
                <a href="/Werner-Mans-CV.pdf" download>
                    <Download className="mr-2" /> Download My CV (PDF)
                </a>
            </Button>
        </motion.div>
    )
}
