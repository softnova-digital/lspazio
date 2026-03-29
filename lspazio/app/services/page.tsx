import InnerBanner from '@/components/ui/InnerBanner';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Testimonials from '@/components/sections/Testimonials';

export default function ServicesPage() {
    return (
        <main>
            <InnerBanner
                title="Our Services"
                paths={[{ name: 'Home', url: '/' }, { name: 'Services' }]}
            />
            <div className="p-t80">
                <ServicesSection />
            </div>
            <ProjectsSection />
            <Testimonials />
        </main>
    );
}
