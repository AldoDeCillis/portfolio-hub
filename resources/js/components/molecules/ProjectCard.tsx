import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
    index?: number;
}
export const ProjectCard: FC<ProjectCardProps> = ({ title, description, imageUrl, link, index = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-2xl backdrop-blur-xl"
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    animate={{
                        background: isHovered
                            ? 'linear-gradient(45deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))'
                            : 'linear-gradient(45deg, transparent, transparent)',
                    }}
                />
                {imageUrl && (
                    <div className="relative h-48 overflow-hidden">
                        <motion.img
                            src={imageUrl}
                            alt={title}
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                )}
                <div className="p-8">
                    <Heading level={3} className="mb-4 text-2xl font-bold text-white">
                        {title}
                    </Heading>
                    <Text className="mb-6 leading-relaxed text-gray-300">{description}</Text>
                    {link && (
                        <motion.a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-purple-400 transition-colors duration-300 hover:text-pink-400"
                            whileHover={{ x: 5 }}
                        >
                            Visualizza Progetto
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};
