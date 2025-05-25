import React, { FC } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { motion } from 'framer-motion';
interface ArticleCardProps { title:string; excerpt:string; link?:string; }
export const ArticleCard: FC<ArticleCardProps> = ({ title, excerpt, link }) => (
  <motion.div className="bg-cyber-gray rounded-lg shadow p-4" whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Heading level={3} className="mb-2 text-white font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {title}
    </Heading>
    <Text className="mb-4 text-sm text-gray-300">{excerpt}</Text>
    {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyber-neon-blue hover:underline">Read more</a>}
  </motion.div>
);
