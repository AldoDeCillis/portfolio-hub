import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { About } from '@/components/organisms/About';
import { BlogSection } from '@/components/organisms/BlogSection';
import { ContactForm } from '@/components/organisms/ContactForm';
import { CVWizard } from '@/components/organisms/CVWizard';
import { Hero } from '@/components/organisms/Hero';
import { Skills } from '@/components/organisms/Skills';
import { MainLayout } from '@/components/templates/MainLayout';
import { usePage } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC } from 'react';

type Project = {
    id: number;
    title: string;
    description: string;
    image_url: string;
    link: string;
};
type Article = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    image_url: string | null;
    read_time: string;
    published_at: string;
    category: string | null;
};

const Home: FC = () => {
    const { projects, articles } = usePage<{
        projects: Project[];
        articles: Article[];
    }>().props;
    console.log(articles);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
        <MainLayout>
            <Hero />
            <About />
            <Skills />
            <CVWizard />
            <motion.section
                id="projects"
                className="relative py-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-500/10 blur-3xl"
                    style={{ y }}
                />
                <div className="relative z-10">
                    <motion.div
                        className="mb-20 text-center"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Heading
                            level={2}
                            className="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-6xl font-bold text-transparent"
                        >
                            🚀 Featured Projects
                        </Heading>
                        <Text className="mx-auto max-w-2xl text-xl text-gray-300">
                            Scopri i progetti innovativi che stanno rivoluzionando il mondo del recruitment
                        </Text>
                    </motion.div>
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
                        {projects.map((proj: Project, idx: number) => (
                            <ProjectCard
                                key={proj.id}
                                title={proj.title}
                                description={proj.description}
                                imageUrl={proj.image_url}
                                link={proj.link}
                                index={idx}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>
            <BlogSection articles={articles} />
            <ContactForm />
        </MainLayout>
    );
};
export default Home;
