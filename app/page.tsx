'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ContactCard } from '@/components/ContactCard'
import { ProfileSection } from '@/components/ProfileSection'
import { SkillsSection } from '@/components/SkillsSection'
import { EducationSection } from '@/components/EducationSection'
import { MembershipSection } from '@/components/MembershipSection'
import { ExperienceSection } from '@/components/ExperienceSection'
// import { ReferencesSection } from '@/components/ReferencesSection'
import { DownloadCVButton } from '@/components/DownloadCV'
import { SidebarNav } from '@/components/nav-bar'  // ✅ Import sidebar

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ✅ Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-primary to-orange-600 opacity-30 blur-3xl"
        animate={{ opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 10, repeat: Infinity }}
      />




      {/* ✅ CV Content with Sidebar Layout */}
      <div className="relative z-10 flex">
        {/* ✅ Sidebar Navigation */}
        <SidebarNav />
        <div className="hidden md:block"></div> {/* Empty space for sidebar */}
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
          {/* <section id="references">
            <AnimatedSection>
              <ReferencesSection />
            </AnimatedSection>
          </section> */}
          <AnimatedSection>
            <DownloadCVButton />
          </AnimatedSection>
        </main>
      </div>
    </div>
  )
}
