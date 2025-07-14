'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { ContactCard } from '@/components/ContactCard'
import { ProfileSection } from '@/components/ProfileSection'
import { SkillsSection } from '@/components/SkillsSection'
import { EducationSection } from '@/components/EducationSection'
import { MembershipSection } from '@/components/MembershipSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { DownloadCVButton } from '@/components/DownloadCV'
import { SidebarNav } from '@/components/nav-bar'
import { CoursesSection } from '@/components/CoursesSection'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Background Videos */}
      <video
        className="fixed top-0 left-0 z-[-1] w-[23vw] h-[95vh] object-cover opacity-60 hidden md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg_left.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        className="fixed bottom-0 right-0 z-[-1] w-[23vw] h-[95vh] object-cover opacity-60 hidden md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg_right.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Static Gradient Fade */}
      <div
        className="fixed inset-0 z-0 bg-gradient-to-br from-gray-800 via-blue-900 via-blue-800 via-blue-700 via-blue-600 to-blue-400 opacity-30"
      />
      {/* CV Content with Sidebar Layout */}
      <div className="relative z-10 flex">
        {/* Sidebar Navigation */}
        <SidebarNav />
        <div className="hidden xl:block"></div> {/* Empty space for sidebar */}
        <main className="flex-1 max-w-4xl mx-auto py-10 px-4 space-y-8">
          <section id="contact">
            <AnimatedSection>
              <ContactCard />
            </AnimatedSection>
          </section>
          <section id="profile">
            <AnimatedSection>
              <ProfileSection />
            </AnimatedSection>
          </section>
          <section id="skills">
            <AnimatedSection>
              <SkillsSection />
            </AnimatedSection>
          </section>
          <section id="education">
            <AnimatedSection>
              <EducationSection />
            </AnimatedSection>
          </section>
          <section id="courses">
            <AnimatedSection>
              <CoursesSection />
            </AnimatedSection>
          </section>
          <section id="membership">
            <AnimatedSection>
              <MembershipSection />
            </AnimatedSection>
          </section>
          <section id="experience">
            <AnimatedSection>
              <ExperienceSection />
            </AnimatedSection>
          </section>
          <section id="download-cv">
            <AnimatedSection>
              <DownloadCVButton />
            </AnimatedSection>
          </section>
        </main>
      </div>
    </div >
  )
}