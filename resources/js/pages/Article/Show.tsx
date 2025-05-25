import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

type Article = {
    title: string;
    excerpt: string;
    content: string; // HTML
    image_url: string | null;
    read_time: string;
    published_at: string; // formattato in PHP
    category: string | null;
    tags: {
        id: number;
        name: string;
        slug: string;
    }[];
};

const Show: FC = () => {
    const { article } = usePage<{ article: Article }>().props;

    return (
        <motion.div className="mx-auto max-w-3xl px-4 py-32" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>

            <Link href={route('blog.index')} className="mb-8 inline-block text-sm text-gray-400 hover:underline">
                ← Torna al Blog
            </Link>

            {article.image_url && (
                <div className="mb-8 overflow-hidden rounded-2xl">
                    <motion.img
                        src={article.image_url}
                        alt={article.title}
                        className="h-64 w-full object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            )}

            {article.category && (
                <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm text-white">
                    {article.category}
                </span>
            )}
            <div className="mb-8 flex items-center gap-4 text-xs text-gray-400">
                <span>📅 {article.published_at}</span>
                <span>⏱️ {article.read_time}</span>
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                    <Link
                        href={route('blog.index', { tag: tag.slug })}
                        key={tag.id}
                        className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300"
                    >
                        {tag.name}
                    </Link>
                ))}
            </div>

            <Heading level={1} className="mb-6 text-5xl font-bold text-white">
                {article.title}
            </Heading>

            <Text className="prose prose-invert mb-12 max-w-none leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </Text>
        </motion.div>
    );
};

export default Show;
