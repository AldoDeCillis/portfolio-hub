// resources/js/components/organisms/BlogSection.tsx
import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  image_url: string | null
  read_time: string
  published_at: string
  category: string | null
}

interface BlogSectionProps {
  articles: Article[]
}

export const BlogSection: FC<BlogSectionProps> = ({ articles }) => {
  if (!articles || articles.length === 0) return null

  const [featuredArticle, ...rest] = articles
  const sideArticles = rest.slice(0, 3)

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

  return (
    <motion.section
      id="blog"
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-3xl">📝</span>
          </motion.div>
          <Heading
            level={2}
            className="text-6xl mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold"
          >
            Latest Insights
          </Heading>
          <Text className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scopri le ultime tendenze del mondo del lavoro, consigli di carriera e insights sul futuro del recruitment
          </Text>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured */}
          <motion.article
            className="lg:col-span-2 group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {featuredArticle.image_url && (
              <div className="relative overflow-hidden">
                <motion.img
                  src={featuredArticle.image_url}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {featuredArticle.category && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {featuredArticle.category}
                    </span>
                  </div>
                )}
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <span>📅 {formatDate(featuredArticle.published_at)}</span>
                <span>⏱️ {featuredArticle.read_time}</span>
              </div>
              <Heading
                level={3}
                className="text-2xl lg:text-3xl mb-4 text-white font-bold group-hover:text-purple-300 transition-colors duration-300"
              >
                {featuredArticle.title}
              </Heading>
              <Text className="text-gray-300 leading-relaxed mb-6 text-lg">
                {featuredArticle.excerpt}
              </Text>
              <Link
                href={route('blog.show', featuredArticle.slug)}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 font-semibold text-lg transition-colors duration-300"
              >
                Leggi l'articolo completo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.article>

          {/* Side */}
          <div className="space-y-6">
            {sideArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  {article.category && (
                    <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/20">
                      {article.category}
                    </span>
                  )}
                  <span>📅 {formatDate(article.published_at)}</span>
                  <span>⏱️ {article.read_time}</span>
                </div>
                <Heading
                  level={4}
                  className="text-lg mb-3 text-white font-bold group-hover:text-purple-300 transition-colors duration-300 leading-tight"
                >
                  {article.title}
                </Heading>
                <Text className="text-gray-300 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </Text>
                <div className="flex items-center justify-between">
                  <Link
                    href={route('blog.show', article.slug)}
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-pink-400 font-medium text-sm transition-colors duration-300"
                  >
                    Leggi tutto
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    ⏱️ {article.read_time}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={route('blog.index')}>
            <Button variant="secondary" className="px-8 py-4 text-lg">
              📚 Visualizza tutti gli articoli
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
