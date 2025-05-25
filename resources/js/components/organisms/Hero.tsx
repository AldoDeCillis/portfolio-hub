import React, { FC, useState, useEffect } from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { motion } from 'framer-motion';
export const Hero: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return (
    <motion.section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      </div>
      {[...Array(50)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-purple-400/30 rounded-full" initial={{ x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight }} animate={{ x: [null, Math.random()*window.innerWidth], y: [null, Math.random()*window.innerHeight] }} transition={{ duration: Math.random()*20+10, repeat: Infinity, repeatType: 'reverse' }} />
      ))}
      <motion.div className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none z-0" animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }} transition={{ type: 'spring', damping: 30, stiffness: 200 }} />
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Heading level={1} className="text-7xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent font-bold">
            Portfolio
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hub</span>
          </Heading>
        </motion.div>
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Text className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trasforma la tua carriera con portfolio dinamici e CV generati dall'AI. <span className="text-purple-400 font-semibold">Il futuro del personal branding inizia qui.</span>
          </Text>
        </motion.div>
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="primary" className="text-lg px-12 py-5">🚀 Inizia Ora</Button>
          <Button variant="secondary" className="text-lg px-12 py-5">🎬 Guarda Demo</Button>
        </motion.div>
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0,10,0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"><div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div></div>
        </motion.div>
      </div>
    </motion.section>
  );
};
