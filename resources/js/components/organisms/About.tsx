import { motion } from 'framer-motion';
import { FC } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface Highlight {
    title: string;
    description: string;
    icon: string;
    colorFrom: string;
    colorTo: string;
    borderColor: string;
}

interface Achievement {
    title: string;
    description: string;
    tech: string[];
    icon: string;
}

interface AboutProps {
    profileImage?: string; // URL dell'immagine del profilo
}

export const About: FC<AboutProps> = ({ profileImage }) => {
    const highlights: Highlight[] = [
        {
            title: 'Full-Stack Excellence',
            description: 'Specializzato in Laravel e React, con solida esperienza in architetture scalabili',
            icon: '⚡',
            colorFrom: 'from-blue-500/10',
            colorTo: 'to-cyan-500/10',
            borderColor: 'border-blue-500/20',
        },
        {
            title: 'Problem Solver',
            description: 'Approccio metodico alla risoluzione di problemi complessi con soluzioni eleganti',
            icon: '🧩',
            colorFrom: 'from-green-500/10',
            colorTo: 'to-emerald-500/10',
            borderColor: 'border-green-500/20',
        },
        {
            title: 'AI Enthusiast',
            description: 'Integrazione di tecnologie AI per ottimizzare processi e migliorare l\'UX',
            icon: '🤖',
            colorFrom: 'from-purple-500/10',
            colorTo: 'to-pink-500/10',
            borderColor: 'border-purple-500/20',
        },
        {
            title: 'Team Player',
            description: 'Metodologie Agile/SCRUM e collaborazione efficace in team multidisciplinari',
            icon: '🚀',
            colorFrom: 'from-orange-500/10',
            colorTo: 'to-red-500/10',
            borderColor: 'border-orange-500/20',
        },
    ];

    const achievements: Achievement[] = [
        {
            title: 'Skill Assessment Platform',
            description: 'Piattaforma completa con integrazione ONET per valutazione competenze',
            tech: ['Laravel', 'React.js', 'API Integration'],
            icon: '📊',
        },
        {
            title: 'Enterprise Dashboards',
            description: 'Gestionali avanzati con integrazioni di sistemi esterni e real-time data',
            tech: ['Laravel', 'Livewire', 'MySQL'],
            icon: '📈',
        },
        {
            title: 'AI-Powered Solutions',
            description: 'Implementazione di workflow automatizzati e chatbot intelligenti',
            tech: ['OpenAI API', 'n8n', 'Python'],
            icon: '🧠',
        },
    ];

    return (
        <section
            id="about"
            className="relative flex items-center justify-center min-h-screen py-8 overflow-hidden"
        >
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="mx-auto w-full max-w-6xl px-4">
                {/* Header con foto */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-6 inline-flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                            <span className="text-xl">👨‍💻</span>
                        </div>
                        <span className="font-mono text-sm tracking-wider text-purple-400">ABOUT_ME</span>
                    </div>

                    {/* Sezione foto profilo */}
                    {profileImage && (
                        <motion.div
                            className="mb-6 flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75"></div>
                                <img
                                    src={profileImage}
                                    alt="Aldo De Cillis"
                                    className="relative w-32 h-32 rounded-full object-cover border-2 border-white/20"
                                />
                            </div>
                        </motion.div>
                    )}

                    <Heading level={1} className="mb-3 text-3xl font-bold lg:text-4xl">
                        <span className="text-white">Aldo </span>
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">De Cillis</span>
                    </Heading>

                    <Text className="mx-auto max-w-2xl text-lg text-gray-300 mb-4">
                        Full-Stack Web Developer
                    </Text>

                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6">
                        <span className="flex items-center gap-1">
                            <span>📍</span> Bari, Italia
                        </span>
                        <span className="flex items-center gap-1">
                            <span>💼</span> 3+ anni esperienza
                        </span>
                        <span className="flex items-center gap-1">
                            <span>🏢</span> Aulab.srl
                        </span>
                    </div>
                </motion.div>

                {/* Main Description */}
                <motion.div
                    className="mb-12 rounded-xl border border-purple-500/20 bg-black/30 p-6 backdrop-blur-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Text className="text-gray-300 leading-relaxed">
                        Developer appassionato con forte esperienza in <span className="text-red-400 font-semibold">Laravel</span> e <span className="text-cyan-400 font-semibold">React</span>.
                        Specializzato nella creazione di applicazioni web scalabili e moderne, dall'architettura backend alla user experience.
                        La mia filosofia di <span className="text-pink-400 font-semibold">"Vibe Coding"</span> mi permette di raggiungere obiettivi ambiziosi
                        integrando creatività e tecnologie all'avanguardia, inclusa l'AI per ottimizzare workflow e processi.
                    </Text>
                </motion.div>

                {/* Highlights Grid con nuovo stile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.title}
                            className={`text-left p-6 rounded-lg bg-gradient-to-r ${highlight.colorFrom} ${highlight.colorTo} border ${highlight.borderColor} backdrop-blur-sm`}
                            whileHover={{
                                scale: 1.02,
                                borderColor: highlight.borderColor.replace('/20', '/40')
                            }}
                            transition={{ duration: 0.3 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                                    <span className="text-xl">{highlight.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                                    <p className="text-sm text-gray-300">{highlight.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Key Projects */}
                <motion.div
                    className="border-t border-purple-500/20 pt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <div className="text-center mb-8">
                        <span className="font-mono text-sm text-gray-400 mb-3 block">KEY_PROJECTS</span>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }}
                                transition={{ duration: 0.3 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="text-3xl mb-3">{achievement.icon}</div>
                                <h4 className="text-white font-semibold mb-3 text-base">{achievement.title}</h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{achievement.description}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {achievement.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Ambient Effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-pink-500/5 blur-3xl" />
            </div>
        </section>
    );
};
