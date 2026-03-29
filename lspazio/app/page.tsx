import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BlogSection from '@/components/sections/BlogSection';
import Testimonials from '@/components/sections/Testimonials';
import TeamSection from '@/components/sections/TeamSection';
import PartnerSection from '@/components/sections/PartnerSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <BlogSection />
      <Testimonials />
      <TeamSection />
      <PartnerSection />
    </main>
  );
}
