import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

type Article = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    image_url: string;
    read_time: string;
    date: string; // published_at formattato lato PHP
    category: string | null;
    tags: { id: number; name: string }[];
};

const Blog: FC = () => {
    const { articles } = usePage<{ articles: Article[] }>().props;

    return (
        <motion.section id="blog" className="py-32" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Heading level={2} className="mb-12 text-center text-5xl">
                📝 Latest Insights
            </Heading>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
                {articles.map((art, idx) => (
                    <motion.article
                        key={art.id}
                        className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 shadow-xl backdrop-blur-xl"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >

                        {art.image_url && (
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                                <motion.img
                                    src={art.image_url}
                                    alt={art.title}
                                    className="h-48 w-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        )}
                        <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
                            {art.category && (
                                <span className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-2 py-1 font-medium text-purple-300">
                                    {art.category}
                                </span>
                            )}
                            <span>📅 {art.date}</span>
                            <span>⏱️ {art.read_time}</span>
                        </div>
                        <div className="mb-3 flex flex-wrap gap-2">
                            {art.tags.map((tag) => (
                                <span key={tag.id} className="rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-300">
                                    {tag.name}
                                </span>
                            ))}
                        </div>

                        <Heading level={4} className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-purple-300">
                            {art.title}
                        </Heading>
                        <Text className="mb-4 text-sm leading-relaxed text-gray-300">{art.excerpt}</Text>

                        <Link
                            href={route('blog.show', art.slug)}
                            className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 transition-colors hover:text-pink-400"
                        >
                            Leggi tutto
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
};

export default Blog;
