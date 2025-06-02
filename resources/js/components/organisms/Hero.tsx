import React, { FC, useState, useEffect } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const Hero: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-5 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
{/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Floating Code Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-400/15 font-mono text-xs pointer-events-none select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 5
          }}
        >
          {['</>', '{...}', '()=>', 'npm', 'git', 'API', 'DB', 'HTTP', 'JSON'][Math.floor(Math.random() * 7)]}
        </motion.div>
      ))}

      {/* Enhanced Mouse Follower */}
      <motion.div
        className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200
        }}
      />

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-5rem)]">

          {/* Left Content - Main Hero */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* Main Title */}
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              className="perspective-1000"
            >
              <Heading
                level={1}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pt-8"
              >
                <motion.span
                  className="block text-white mb-2"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Aldo De Cillis
                </motion.span>
                <motion.span
                  className="block text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Full-stack Web Developer
                </motion.span>
                <motion.div
                  className="text-lg md:text-xl text-purple-300 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {'{ vibe_coding_mode : true }'}
                  </motion.span>
                </motion.div>
              </Heading>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Text className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Trasformo idee in <span className="text-purple-400 font-semibold">codice elegante</span> e
                <span className="text-pink-400 font-semibold"> esperienze digitali</span> memorabili.
              </Text>
              <Text className="text-lg text-gray-400 mt-4 max-w-xl">
                Freelance specializzato in soluzioni web moderne, scalabili e performanti.
              </Text>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  className="relative px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border border-purple-500/30 hover:border-purple-400/50 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>⚡</span>
                    Iniziamo a Collaborare
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  className="px-8 py-4 text-lg border-2 border-purple-500/30 hover:border-purple-400/50 bg-black/20 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    <span>👨‍💻</span>
                    Esplora i Progetti
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Code Terminal Mockup */}
            <motion.div
              className="relative max-w-md ml-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Terminal Window */}
              <div className="bg-black/50 backdrop-blur-xl rounded-lg border border-purple-500/20 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono ml-4">portfolio.dev</div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 space-y-2 font-mono text-sm">
                  <div className="text-green-400">$ whoami</div>
                  <div className="text-white">full-stack-developer</div>
                  <div className="text-green-400">$ ls skills/</div>
                  <div className="text-purple-400">frontend/ backend/ database/</div>
                  <div className="text-green-400">$ cat passion.txt</div>
                  <motion.div
                    className="text-pink-400"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    "Coding is not just work, it's art"
                  </motion.div>
                  <motion.div
                    className="text-green-400 flex items-center gap-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                  >
                    $ <span className="w-2 h-4 bg-green-400 inline-block"></span>
                  </motion.div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -left-8 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-lg border border-purple-500/20 p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 font-mono">3+</div>
                  <div className="text-xs text-gray-400">Anni Esperienza</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-lg border border-pink-500/20 p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400 font-mono">20+</div>
                  <div className="text-xs text-gray-400">Progetti Completati</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-xs font-mono">SCROLL</span>
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center relative">
              <motion.div
                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
    </motion.section>
  );
};
