import { motion, useScroll, useTransform } from 'framer-motion';
import { FC } from 'react';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { BlogSection } from '@/components/organisms/BlogSection';
import { ContactForm } from '@/components/organisms/ContactForm';
import { CVWizard } from '@/components/organisms/CVWizard';
import { Hero } from '@/components/organisms/Hero';
import { MainLayout } from '@/components/templates/MainLayout';

const dummyProjects = [
    {
        title: 'AI Portfolio Generator',
        description:
            'Una piattaforma intelligente che crea portfolio personalizzati utilizzando machine learning per ottimizzare la presentazione dei tuoi progetti.',
        imageUrl: 'https://picsum.photos/400/240?random=1',
        link: '#',
    },
    {
        title: 'Dynamic CV Builder',
        description:
            'Sistema avanzato di generazione CV che si adatta automaticamente alle offerte di lavoro utilizzando algoritmi di Natural Language Processing.',
        imageUrl: 'https://picsum.photos/400/240?random=2',
        link: '#',
    },
    {
        title: 'Career Analytics Dashboard',
        description:
            'Dashboard interattiva che analizza le tendenze del mercato del lavoro e suggerisce miglioramenti per il tuo profilo professionale.',
        imageUrl: 'https://picsum.photos/400/240?random=3',
        link: '#',
    },
];

const Home: FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
        <MainLayout>
            <Hero />
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
                        {dummyProjects.map((proj, idx) => (
                            <ProjectCard key={idx} {...proj} index={idx} />
                        ))}
                    </div>
                </div>
            </motion.section>
            <BlogSection />
            <ContactForm />
        </MainLayout>
    );
};
export default Home;
