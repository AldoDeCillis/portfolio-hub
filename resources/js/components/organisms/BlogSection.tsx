// resources/js/components/organisms/BlogSection.tsx
import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

export const BlogSection: FC = () => {
  const featuredArticle = {
    title: "Il Futuro dell'AI nel Recruitment: Come Cambierà il Mondo del Lavoro",
    excerpt:
      "Un'analisi approfondita su come l'intelligenza artificiale sta rivoluzionando il processo di selezione del personale, dalle prime fasi di screening fino ai colloqui finali. Scopriamo insieme le opportunità e le sfide che ci attendono.",
    readTime: '8 min di lettura',
    date: '15 Maggio 2025',
    category: 'AI & Technology',
    image: 'https://picsum.photos/800/400?random=featured',
    link: '#',
  }

  const articles = [
    {
      title: 'CV Perfetto: 10 Errori da Evitare Assolutamente',
      excerpt:
        "Guida pratica per creare un CV che catturi l'attenzione dei recruiter ed eviti i trabocchetti più comuni.",
      readTime: '5 min',
      date: '12 Maggio 2025',
      category: 'Career Tips',
      link: '#',
    },
    {
      title: 'Portfolio Digitale: Showcase del Tuo Talento',
      excerpt:
        'Come costruire un portfolio online che racconta la tua storia professionale in modo coinvolgente.',
      readTime: '6 min',
      date: '10 Maggio 2025',
      category: 'Portfolio',
      link: '#',
    },
    {
      title: 'Soft Skills nel 2025: Cosa Cercano le Aziende',
      excerpt:
        'Le competenze trasversali più richieste nel mercato del lavoro moderno e come svilupparle.',
      readTime: '4 min',
      date: '8 Maggio 2025',
      category: 'Skills',
      link: '#',
    },
  ]

  return (
    <motion.section
      id="blog"
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
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
            Scopri le ultime tendenze del mondo del lavoro, consigli di carriera e
            insights sul futuro del recruitment
          </Text>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <motion.div
            className="lg:col-span-2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.article
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    📅 {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {featuredArticle.readTime}
                  </span>
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

                <motion.a
                  href={featuredArticle.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 font-semibold text-lg transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Leggi l'articolo completo
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          </motion.div>

          {/* Side Articles */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/20">
                    {article.category}
                  </span>
                  <span>📅 {article.date}</span>
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
                  <motion.a
                    href={article.link}
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-pink-400 font-medium text-sm transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    Leggi tutto
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>

                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    ⏱️ {article.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="secondary" className="px-8 py-4 text-lg">
            📚 Visualizza tutti gli articoli
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
