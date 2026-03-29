import InnerBanner from '@/components/ui/InnerBanner';
import ContactSection from '@/components/sections/ContactSection';

export default function ContactPage() {
    return (
        <main>
            <InnerBanner
                title="Contact Us"
                paths={[{ name: 'Home', url: '/' }, { name: 'Contact' }]}
            />
            <ContactSection />
        </main>
    );
}
