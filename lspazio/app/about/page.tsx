import InnerBanner from '@/components/ui/InnerBanner';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import OurStorySection from '@/components/sections/OurStorySection';

export default function AboutPage() {
    return (
        <main>
            <InnerBanner
                title="About Us"
                paths={[{ name: 'Home', url: '/' }, { name: 'About' }]}
            />
            <AboutSection />
            <ServicesSection />
            <TeamSection />
            <OurStorySection />
        </main>
    );
}
