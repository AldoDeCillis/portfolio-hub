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
    description: string;
    skills: Skill[];
    accent: string;
}

export const Skills: FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend Development',
            description: 'Interfacce moderne e responsive',
            accent: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'HTML', icon: '🌐', color: 'text-orange-400' },
                { name: 'CSS', icon: '🎨', color: 'text-blue-400' },
                { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
                { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
            ],
        },
        {
            title: 'Backend Development',
            description: 'Server e logica di business',
            accent: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'PHP', icon: '🐘', color: 'text-purple-400' },
                { name: 'Laravel', icon: '🔧', color: 'text-red-400' },
                { name: 'Livewire', icon: '⚡', color: 'text-pink-400' },
                { name: 'Python', icon: '🐍', color: 'text-green-400' },
            ],
        },
        {
            title: 'Database & Tools',
            description: 'Gestione dati e strumenti',
            accent: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'MySQL', icon: '🗄️', color: 'text-blue-400' },
                { name: 'PostgreSQL', icon: '🐘', color: 'text-indigo-400' },
                { name: 'Docker', icon: '🐳', color: 'text-cyan-400' },
                { name: 'Git', icon: '📂', color: 'text-orange-400' },
            ],
        },
        {
            title: 'Modern Workflow',
            description: 'Metodologie e specializzazioni',
            accent: 'from-orange-500 to-red-500',
            skills: [
                { name: 'AI Integrations', icon: '🤖', color: 'text-purple-400' },
                { name: 'Agile/Scrum', icon: '🔄', color: 'text-green-400' },
                { name: 'Atomic Design', icon: '⚛️', color: 'text-cyan-400' },
                { name: 'Vibe Coding', icon: '🎵', color: 'text-pink-400' },
            ],
        },
    ];

    const toolsAndPlatforms = [
        { name: 'WordPress', icon: '📝', color: 'text-blue-400' },
        { name: 'Google Workspace', icon: '📊', color: 'text-green-400' },
        { name: 'WSL', icon: '🖥️', color: 'text-purple-400' },
        { name: 'Bash', icon: '💻', color: 'text-yellow-400' },
    ];

    return (
        <motion.section
            id="skills"
            className="relative flex items-center overflow-hidden py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Subtle Grid */}
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

            <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-4">
                {/* Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="mb-6 inline-flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                            <span className="text-2xl">🛠️</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                            <span className="font-mono text-sm tracking-wider text-purple-400">TECH_STACK</span>
                        </div>
                    </div>

                    <Heading level={1} className="mb-4 text-4xl font-bold lg:text-5xl">
                        <span className="text-white">Skills & </span>
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
                    </Heading>

                    <Text className="mx-auto max-w-3xl text-xl text-gray-300">
                        Un arsenal di tecnologie moderne per creare soluzioni digitali all'avanguardia
                    </Text>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid flex-1 grid-cols-1 gap-8 overflow-hidden lg:grid-cols-2">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className="h-fit rounded-2xl border border-purple-500/20 bg-black/30 p-6 backdrop-blur-xl"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                        >
                            {/* Category Header */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className={`h-12 w-3 rounded-full bg-gradient-to-b ${category.accent}`} />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                                    <p className="text-sm text-gray-400">{category.description}</p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                            borderColor: 'rgba(139, 92, 246, 0.3)',
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: categoryIndex * 0.15 + skillIndex * 0.1,
                                        }}
                                    >
                                        <span className="text-xl">{skill.icon}</span>
                                        <span className={`font-mono text-sm ${skill.color}`}>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tools & Platforms Footer */}
                <motion.div
                    className="mt-8 border-t border-purple-500/20 pt-6"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-sm text-gray-400">TOOLS_&_PLATFORMS:</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
                            {toolsAndPlatforms.map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                        borderColor: 'rgba(139, 92, 246, 0.3)',
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                >
                                    <span className="text-lg">{tool.icon}</span>
                                    <span className={`font-mono text-sm ${tool.color}`}>{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Ambient Effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-pink-500/5 blur-3xl" />
            </div>
        </motion.section>
    );
};
