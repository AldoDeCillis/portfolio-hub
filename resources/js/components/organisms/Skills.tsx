import { motion } from 'framer-motion';
import { FC } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface Skill {
    name: string;
    icon: string;
    color: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
    accent: string;
}

export const Skills: FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend',
            accent: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'HTML', icon: '🌐', color: 'text-orange-400' },
                { name: 'CSS', icon: '🎨', color: 'text-blue-400' },
                { name: 'Tailwind CSS', icon: '🎨', color: 'text-teal-400' },
                { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
                { name: 'TypeScript', icon: '📘', color: 'text-blue-300' },
                { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
                { name: 'Inertia.js', icon: '🚀', color: 'text-purple-400' },
            ],
        },
        {
            title: 'Backend & APIs',
            accent: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'PHP', icon: '🐘', color: 'text-purple-400' },
                { name: 'Laravel', icon: '🔧', color: 'text-red-400' },
                { name: 'Livewire', icon: '⚡', color: 'text-pink-400' },
                { name: 'Python', icon: '🐍', color: 'text-green-400' },
                { name: 'FastAPI', icon: '⚡', color: 'text-green-300' },
                { name: 'REST APIs', icon: '🔌', color: 'text-blue-400' },
            ],
        },
        {
            title: 'Database & DevOps',
            accent: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'MySQL', icon: '🗄️', color: 'text-blue-400' },
                { name: 'PostgreSQL', icon: '🐘', color: 'text-indigo-400' },
                { name: 'Redis', icon: '🔴', color: 'text-red-400' },
                { name: 'Docker', icon: '🐳', color: 'text-cyan-400' },
                { name: 'Git', icon: '📂', color: 'text-orange-400' },
                { name: 'GitHub', icon: '🐙', color: 'text-gray-300' },
            ],
        },
        {
            title: 'AI & Automation',
            accent: 'from-orange-500 to-red-500',
            skills: [
                { name: 'OpenAI API', icon: '🤖', color: 'text-green-400' },
                { name: 'n8n', icon: '🔄', color: 'text-pink-400' },
                { name: 'Puppeteer', icon: '🎭', color: 'text-cyan-400' },
            ],
        },
    ];

    return (
        <section id="skills" className="relative flex min-h-screen items-center justify-center overflow-hidden py-8">
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
                {/* Header */}
                <motion.div
                    className="mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 inline-flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                            <span className="text-xl">🛠️</span>
                        </div>
                        <span className="font-mono text-sm tracking-wider text-purple-400">TECH_STACK</span>
                    </div>

                    <Heading level={1} className="mb-3 text-3xl font-bold lg:text-4xl">
                        <span className="text-white">Skills & </span>
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
                    </Heading>

                    <Text className="mx-auto max-w-2xl text-lg text-gray-300">Tecnologie moderne per soluzioni digitali all'avanguardia</Text>
                </motion.div>

                {/* Skills Categories */}
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="rounded-xl border border-purple-500/20 bg-black/30 p-5 backdrop-blur-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="mb-4 flex items-center gap-3">
                                <div className={`h-8 w-2 rounded-full bg-gradient-to-b ${category.accent}`} />
                                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm backdrop-blur-sm transition-colors hover:bg-white/10"
                                    >
                                        <span>{skill.icon}</span>
                                        <span className={skill.color}>{skill.name}</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Tools */}
                <motion.div
                    className="border-t border-purple-500/20 pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="text-center">
                        <span className="mb-3 block font-mono text-sm text-gray-400">ADDITIONAL_TOOLS:</span>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { name: 'Atlassian Suite', icon: '🏢', color: 'text-blue-400' },
                                { name: 'Google Workspace', icon: '📊', color: 'text-green-400' },
                                { name: 'WSL', icon: '🖥️', color: 'text-purple-400' },
                                { name: 'Bash', icon: '💻', color: 'text-yellow-400' },
                                { name: 'Vibe Coding', icon: '🎵', color: 'text-pink-400' },
                            ].map((tool) => (
                                <span
                                    key={tool.name}
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm backdrop-blur-sm transition-colors hover:bg-white/10"
                                >
                                    <span>{tool.icon}</span>
                                    <span className={tool.color}>{tool.name}</span>
                                </span>
                            ))}
                        </div>
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
