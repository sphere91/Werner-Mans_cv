'use client'

import { motion } from 'framer-motion'
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
import Image from "next/image"

//TODO: Update ExperienceSection with latest job details

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Background Images */}
      <Image
        src="/Digital Overlay-Left Top.png" // Replace with your left image path
        alt="Left decorative frame"
        className="fixed top-0 left-0 z-[-1] w-100 h-100 md:h-4/5 object-cover opacity-20 hidden md:block"
        priority
        width={4222}
        height={12500}
      />
      <Image
        src="/Digital Overlay-Right Bottom.png" // Replace with your right image path
        alt="Right decorative frame"
        className="fixed bottom-0 right-0 z-[-1] w-100 h-100 md:h-4/5 object-cover opacity-20 hidden md:block"
        width={4222}
        height={12500}
        priority
      />
      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-600 to-blue-400 opacity-30 blur-3xl"
        animate={{ opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      {/* CV Content with Sidebar Layout */}
      <div className="relative z-10 flex">
        {/* Sidebar Navigation */}
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
    </div>
  )
}