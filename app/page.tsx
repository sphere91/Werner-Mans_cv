import { ContactCard } from "@/components/ContactCard"
import { ProfileSection } from "@/components/ProfileSection"
import { SkillsSection } from "@/components/SkillsSection"
import { EducationSection } from "@/components/EducationSection"
import { MembershipSection } from "@/components/MembershipSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ReferencesSection } from "@/components/ReferencesSection"
import { DownloadCVButton } from "@/components/DownloadCV"

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <ContactCard />
      <ProfileSection />
      <SkillsSection />
      <EducationSection />
      <MembershipSection />
      <ExperienceSection />
      <ReferencesSection />
      <DownloadCVButton />
    </main>
  )
}
