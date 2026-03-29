import InnerBanner from '@/components/ui/InnerBanner';
import ProjectsGrid from '@/components/sections/ProjectsGrid';

export default function ProjectsPage() {
    return (
        <main>
            <InnerBanner
                title="Work Grid"
                paths={[{ name: 'Home', url: '/' }, { name: 'Projects' }]}
            />
            <ProjectsGrid />
        </main>
    );
}
